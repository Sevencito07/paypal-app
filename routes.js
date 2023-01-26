import { Router } from "express";

import {createOrder, captureOrder, cancelOrder}  from './componets/payment'

 const router  = Router();

router.post('/create-order', createOrder);
router.get('/capture-order', captureOrder);
router.get('/cancel-order', cancelOrder)

export default router