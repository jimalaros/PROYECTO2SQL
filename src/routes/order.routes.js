import { Router } from 'express';
import * as Orders from '../controllers/order.controller';

const router = Router();

router.get('/', Orders.Ordenes);

router.post('/nuevas', Orders.CrearOrden);

router.post('/Ordenar/:id', Orders.Ordenar);

router.put('/:id', Orders.ActualizarOrden);

router.delete('/Eliminar/:id', Orders.EliminarOrden);

export default router;