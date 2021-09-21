

export const Productos = async (req, res) => {
    const products = await sequelize.query("SELECT * FROM productos",
        {
            type: QueryTypes.SELECT
        }
    );
    console.log(products);
    res.json(products);
};

export const CrearProducto = async (req, res) => {
    const { Nombre, Precio } = req.body;
    await sequelize.query("INSERT INTO productos (Nombre, Precio) VALUES (?, ?)",
        {
            replacements: [Nombre, Precio],
            type: QueryTypes.INSERT
        }
    );
    res.status(201).send();
};

export const ActualizarProducto = async (req, res) => {
    const { Nombre, Precio } = req.body;
    const { id } = req.params;
    await sequelize.query("UPDATE productos SET Nombre = ?, Precio = ?,  WHERE id = ?",
        {
            replacements: [Nombre, Precio, id],
            type: QueryTypes.UPDATE
        }
    );
    res.status(200).json('Producto actualizado');
};

export const EliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        await sequelize.query("DELETE FROM productos WHERE id = ?",
            {
                replacements: [id],
                type: QueryTypes.DELETE
            }
        );
        res.status(200).json('Producto eliminado');
    } catch (err) {
        res.status(500).json(err);
    }
};

