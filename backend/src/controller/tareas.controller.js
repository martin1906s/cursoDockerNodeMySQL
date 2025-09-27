const TareasService = require('../services/tareas.service');

async function getTareas(req, res) {
    try {
        const tareas = await TareasService.getTareas();
        res.status(200).json({message: 'Tareas obtenidas', data: tareas});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getTareas
}