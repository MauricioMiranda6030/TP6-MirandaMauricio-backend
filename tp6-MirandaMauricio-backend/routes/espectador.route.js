const espectadorCtrl = require('./../controllers/espectador.controller');

const express = require('express');
const router = express.Router();

router.get('/', espectadorCtrl.getEspectadores);
router.post('/', espectadorCtrl.saveEspectador);
router.get('/:id', espectadorCtrl.getEspectadorById);

module.exports = router;