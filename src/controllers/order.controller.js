import jwt from "jsonwebtoken";
import db from '../database';
import config from "../config"; 

export const Ordenes = async (req, res) => {
    try {
        const orders = await db.Orden.findAll({
            include: ['Actions']
        });
        res.json(orders);
    } catch (error) { res.status(404).json(error); }
};

export const CrearOrden = async (req, res) =>
{
    try {
        const bearerHeader = req.headers['authorization'];
        if(bearerHeader)
        {
            const bearer = bearerHeader.split(" ");
            const token = bearer[1];
    
            //Decodificar el token
            const decoded = jwt.verify(token, config.secret);
            const id = decoded.id;
            
            //Encontrar el Usuario
            const user = await db.Usuario.findOne({ 
                where: { id } 
            });

            const usuario = user.Nombre;
            const direccion = user.Direccion;

            await db.Orden.create({
                NombreUsuario: usuario,
                DirecciónUsuario: direccion,
                UsuarioId: id
            });
            res.status(201).json({msg: 'Datos de la orden creados con exito'});
        }
        else { res.status(401).send({ auth: false, msg: "Ha olvidado el token" }); }
    } catch (error) { res.status(404).json(error); }
};

export const Ordenar = async (req, res) =>
{
    try {
        const { id } = req.params;
        const {ProductoId, Cantidad, MediodePago} = req.body;
        if(ProductoId && Cantidad && MediodePago)  
        {   
            const BuscarProducto = await db.Producto.findOne({ 
                where: { id: ProductoId } 
            });

            if(BuscarProducto)
            {
                const NombreProducto = BuscarProducto.Producto;
                const PrecioProducto = BuscarProducto.Precio;
                const precio = PrecioProducto * Cantidad;
                
                await db.Acción.create({
                    NombreProducto,
                    PrecioProducto,
                    Cantidad,
                    MediodePago,
                    OrdeneId: id,
                    ProductoId
                });
                res.status(201).json({msg: `Orden creada con exito, costototal: ${precio}`});
            } else { res.status(400).json('El producto no existe en la base de datos'); }  
        } else {res.status(400).json({msg: 'Faltan Datos'}); }
    } catch (error) { res.status(404).json(error); }
};

export const ActualizarOrden = async (req, res) => {
    try {
        const { id } = req.params;
        const {ProductoId, Cantidad, MediodePago} = req.body;
        if(ProductoId && Cantidad && MediodePago) {
            const BuscarOrden = await db.Orden.findOne({ 
                where: { id } 
            });
            const BuscarProducto = await db.Producto.findOne({ 
                where: { id: ProductoId } 
            });    
            if (BuscarOrden && BuscarProducto) {
                const NombreProducto = BuscarProducto.Producto;
                const PrecioProducto = BuscarProducto.Precio;
                await db.Acción.create({
                    NombreProducto,
                    PrecioProducto,
                    Cantidad,
                    MediodePago,
                    OrdeneId: id,
                    ProductoId
                });
                res.status(201).json({msg: 'Orden creada con exito'});
            } else { res.status(400).json('El producto no existe en la base de datos'); }
        } else { res.status(400).json('Faltan datos'); }
    } catch (error) { res.status(404).json(error); } 
};

export const EliminarOrden = async (req, res) => {
    try {
        const { id } = req.params;
        const BuscarOrden = await db.Orden.findOne({ 
            where: { id } 
        });
        if(BuscarOrden){
            await db.Orden.destroy({ where: { id } });
            res.status(200).json('Orden eliminada');
        } else { res.status(400).json({msg: 'No se encontro la orden en la base de datos'}); }
    } catch (error) { res.status(404).json(error); } 
};

