import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config';
import db from '../database';

export const Usuarios = async (req, res) => {
    const usuarios = await db.Usuario.findAll();
    res.json(usuarios);
};

export const CrearUsuario = async (req, res) => {
    try {
        const { Nombre, Apellido, Correo, Contraseña, Direccion, Administrador } = req.body;
        if (Nombre && Apellido && Correo && Contraseña && Direccion) {
            const UsuarioRepetido = await db.Usuario.findOne({ 
                where: { Correo } 
            });
            if (UsuarioRepetido) {
                res.status(400).json("El Correo ya existe en la base de datos");
            } else {
                await db.Usuario.create({
                    Nombre,
                    Apellido,
                    Correo,
                    Contraseña: bcrypt.hashSync(Contraseña, 10),
                    Direccion,
                    Administrador
                });   
                res.status(201).json("Usuario creado con exito");
            };
        } else { res.status(400).json("Faltan datos"); }
    } catch (error) { res.status(404).json(error); } 
};

export const InicioSesion = async (req, res) => {
    try {
        const { Correo, Contraseña } = req.body;
        if (Correo && Contraseña) {
            const usuario = await db.Usuario.findOne({ 
                where: { Correo } 
            });
            const Contraseña = bcrypt.compare(req.body.Contraseña, usuario.Contraseña);
            if (!usuario && !Contraseña) {
                return res.status(401).send({ auth: false, token: null });
            } else {
                const token = jwt.sign({ id: usuario.id }, config.secret, {
                    expiresIn: 60 * 60 * 24,
                });
                res.status(200).json({ auth: true, token });
            }
        } else { res.status(400).json({msg: 'Faltan datos'}); }
    } catch (error) { res.status(404).json(error); }  
};

export const EliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const BuscarUsuario = await db.Usuario.findOne({ 
            where: { id } 
        });
        if(BuscarUsuario){
            await db.Usuario.destroy({ where: { id } });
            res.status(200).json('Usuario eliminado');
        } else { res.status(400).json({msg: 'No se encontro el usuario en la base de datos'}); }
    } catch (error) { res.status(404).json(error); }
};

