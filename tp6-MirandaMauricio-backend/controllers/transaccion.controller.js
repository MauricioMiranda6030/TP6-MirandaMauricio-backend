const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.saveTransaccion = async (req, res) =>{
    var transaccion =  await new Transaccion(req.body);

    transaccion.cantidadDestino = transaccion.cantidadOrigen * transaccion.tasaConversion;

    try{
        await transaccion.save();
        res.json({
            'mgs' : 'transaccion guardada.'
        })
    } catch(error){
        res.json({
            'error' : error
        })
    }
}

transaccionCtrl.getTransaccionesByEmail = async (req, res) => {
    try{
        var transacciones = await Transaccion.find({ emailCliente : req.params.email });
        res.json(transacciones);
    } catch (error){
        res.json({
            'error' : error
        })
    }
}

transaccionCtrl.getTransaccionesByMonedas = async(req, res) => {
    var mOrigen = req.params.mOrigen;
    var mDestino = req.params.mDestino;

    try{
        var transacciones = await Transaccion.find({ monedaOrigen : mOrigen , monedaDestino : mDestino})
        res.json(transacciones);
    } catch(error){
        res.json({ 
            'error' : error
        })
    }
}

module.exports = transaccionCtrl;