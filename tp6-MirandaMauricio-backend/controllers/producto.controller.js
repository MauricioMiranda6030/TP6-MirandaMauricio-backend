const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
}

productoCtrl.getProductoById = async (req, res) => {
    var producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoCtrl.findDestacados = async (req, res) => {
    try{
        var productos = await Producto.find({ destacado : true});
        res.status(200).send(productos);
    }catch(error){
        res.status(400).send(error);
    }
}

productoCtrl.saveProducto = async (req, res) => {
    var producto = new Producto(req.body);

    try{
        await producto.save();
        res.json({
            'msg' : 'producto guardado correctamente.'
        })
    } catch (error){
        res.status(400).json({
            'msg' : error
        })
    }
}

productoCtrl.editProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try{
        await Producto.updateOne({_id: req.body._id}, producto);
        res.json({
            'msg' : 'Producto actualizado.'
        })
    } catch (error){
        res.status(400).json({
            'msg' : error
        })
    }
}

productoCtrl.deleteProducto = async (req, res) =>{
    try{
        await Producto.deleteOne({ _id: req.params.id});
        res.json({
            'msg' : 'Producto eliminado.'
        })
    } catch(error){
        res.status(400).json({
            'msg' : 'Error al procesar la operacion'
        })
    }
}

module.exports = productoCtrl;