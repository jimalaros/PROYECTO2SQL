import { Router } from 'express';
import * as Usuarios from '../controllers/usuarios.controller';

const router = Router();

router.get('/', Usuarios.Usuarios);

router.post('/nuevos', Usuarios.CrearUsuario);

router.put('/', Usuarios.ActualizarUsuario);

router.delete('/Eliminar/:id', Usuarios.EliminarUsuario);

export default router;