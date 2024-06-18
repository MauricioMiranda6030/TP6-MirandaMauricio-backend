const transaccionCtrl = require('./../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.saveTransaccion);
router.get('/:email', transaccionCtrl.getTransaccionesByEmail);
router.get('/:mOrigen/:mDestino', transaccionCtrl.getTransaccionesByMonedas);

module.exports = router;
