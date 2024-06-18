const Espectador = require('../models/espectador');
const espectadorCtrl = {}

espectadorCtrl.getEspectadores = async (req, res) => {
    var espectador = await Espectador.find();
    res.json(espectador);
}

espectadorCtrl.getEspectadorById = async (req, res) => {
    var espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
}

espectadorCtrl.saveEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);

    try{
        await espectador.save();
        res.json({
            'msg' : 'Espectador guardado correctamente.'
        })
    } catch (error){
        res.status(400).json({
            'msg' : error
        })
    }
}

module.exports = espectadorCtrl;