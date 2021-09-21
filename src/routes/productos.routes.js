import { Router } from 'express';
import * as Productos from '../controllers/productos.controller';

const router = Router();

router.get('/', Productos.Productos);

router.post('/nuevos', Productos.CrearProducto);

router.put('/', Productos.ActualizarProducto);

router.delete('/Eliminar/:id', Productos.EliminarProducto);

export default router;