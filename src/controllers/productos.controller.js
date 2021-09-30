import db from '../database';

export const Productos = async (req, res) => {
    const productos = await db.Producto.findAll();
    res.json(productos);
};

export const CrearProducto = async (req, res) => {
    try {
        const { Producto, Precio } = req.body;
        if (Producto && Precio) {
            const ProductoRepetido = await db.Producto.findOne({ 
                where: { Producto } 
            });
            if (ProductoRepetido) {
                res.status(400).json("El Correo ya existe en la base de datos");
            } else {
                await db.Producto.create({
                    Producto,
                    Precio
                });   
                res.status(201).json("Producto creado con exito");
            };
        } else { res.status(400).json("Faltan datos"); }
    } catch (error) { res.status(404).json(error); }
};

export const ActualizarProducto = async (req, res) => {
    try {
        const { Producto, Precio } = req.body;
        const { id } = req.params;
        if (Producto && Precio) {
            const ProductoExistente = await db.Producto.findById({ 
                where: { id } 
            });    
            if (ProductoExistente) {
                await db.Producto.update({ 
                    where: { Producto, Precio } 
                });
                res.status(200).json('Producto actualizado');
            } else { res.status(400).json("El producto no existe en nuestra base de datos"); }
        } else { res.status(400).json("Faltan datos"); }
    } catch (error) { res.status(404).json(error); } 
};

export const EliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const BuscarProducto = await db.Producto.findOne({ 
            where: { id } 
        });
        if(BuscarProducto){
            await db.Producto.destroy({ where: { id } });
            res.status(200).json('Usuario eliminado');
        } else { res.status(400).json({msg: 'No se encontro el usuario en la base de datos'}); }
    } catch (error) { res.status(404).json(error); } 
};

