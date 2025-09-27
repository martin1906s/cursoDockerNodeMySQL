const express = require('express');
const router = express.Router();
const TareasController = require('../controller/tareas.controller');

router.get('/tareas', TareasController.getTareas);

module.exports = router;