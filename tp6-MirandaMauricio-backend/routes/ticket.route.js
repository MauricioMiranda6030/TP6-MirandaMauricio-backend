const ticketCtrl = require('./../controllers/ticket.controller');

const express = require('express');
const router = express.Router();

router.get('/', ticketCtrl.getTickets);
router.post('/', ticketCtrl.saveTicket);
router.get('/buscar/:id', ticketCtrl.getById);
router.get('/:tipo', ticketCtrl.findByEspectador);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);

module.exports = router;