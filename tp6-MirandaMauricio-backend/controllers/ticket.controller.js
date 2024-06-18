const Ticket = require('../models/Ticket');
const ticketCtrl = {}

ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}

ticketCtrl.getById = async (req, res) => {
    var ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.json(ticket);
}

ticketCtrl.saveTicket = async (req, res) => {
    var ticket = await new Ticket(req.body);

    if(ticket.categoriaEspectador == "l")
        ticket.precioTicket -= ticket.precioTicket * 0.2;

    try{
        await ticket.save();
        res.json({
            'msg' : 'Ticket guardado correctamente.'
        })
    } catch (error){
        res.status(400).json({
            'msg' : error
        })
    }
}

ticketCtrl.editTicket = async (req, res) => {
    var ticket = await new Ticket(req.body);

    if(ticket.categoriaEspectador == "l")
        ticket.precioTicket -= ticket.precioTicket * 0.2;

    try{
        await Ticket.updateOne({_id: req.body._id}, ticket);
        res.json({
            'msg' : 'Ticket actualizado.'
        })
    } catch (error){
        res.status(400).json({
            'msg' : error
        })
    }
}

ticketCtrl.deleteTicket = async (req, res) =>{
    try{
        await Ticket.deleteOne({ _id: req.params.id});
        res.json({
            'msg' : 'Ticket eliminado.'
        })
    } catch(error){
        res.status(400).json({
            'msg' : 'Error al procesar la operacion'
        })
    }
}

ticketCtrl.findByEspectador = async (req, res) => {
    var tipoEspectador = req.params.tipo;

    try{
        var tickets = await Ticket.find({ categoriaEspectador : tipoEspectador });
        res.json(tickets);
    } catch (error){
        res.json({
            'msg' : error
        })
    }
}

module.exports = ticketCtrl;