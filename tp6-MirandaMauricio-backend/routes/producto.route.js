const productoCtrl = require('./../controllers/producto.controller');

const express = require('express');
const router = express.Router();

router.get('/', productoCtrl.getProductos);
router.get('/destacados', productoCtrl.findDestacados);
router.post('/', productoCtrl.saveProducto);
router.delete('/:id', productoCtrl.deleteProducto);
router.get('/:id', productoCtrl.getProductoById);
router.put('/:id', productoCtrl.editProducto);


module.exports = router;