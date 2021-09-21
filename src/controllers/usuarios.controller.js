

export const Usuarios = async (req, res) => {
    const users = await sequelize.query("SELECT * FROM usuarios",
        {
            type: QueryTypes.SELECT
        }
    );
    console.log(users);
    res.json(users);
};

export const CrearUsuario = async (req, res) => {
    const { Nombre, Apellido, Contraseña, Correo, Contraseña, Direccion } = req.body;
    await sequelize.query("INSERT INTO usuarios (Nombre, Apellido, Contraseña, Correo, Contraseña, Direccion) VALUES (?, ?, ?, ?, ?, 0)",
        {
            replacements: [Nombre, Apellido, Contraseña, Correo, Contraseña, Direccion],
            type: QueryTypes.INSERT
        }
    );
    res.status(201).send();
};

export const ActualizarUsuario = async (req, res) => {
    const { Nombre, Apellido, Contraseña, Correo, Contraseña, Direccion } = req.body;
    const { id } = req.params;
    await sequelize.query("UPDATE usuarios SET Nombre = ?, Apellido = ?, Correo = ?, Contraseña = ?, Direccion = ?,  WHERE id = ?",
        {
            replacements: [Nombre, Apellido, Contraseña, Correo, Contraseña, Direccion, id],
            type: QueryTypes.UPDATE
        }
    );
    res.status(200).json('Usuario actualizado');
};

export const EliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await sequelize.query("DELETE FROM usuarios WHERE id = ?",
            {
                replacements: [id],
                type: QueryTypes.DELETE
            }
        );
        res.status(200).json('Usuario eliminado');
    } catch (err) {
        res.status(500).json(err);
    }
};

