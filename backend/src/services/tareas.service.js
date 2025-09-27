const TareasRepository = require('../repositories/tareas.repositories');

async function getTareas() {
    return await TareasRepository.getTareas();
}

module.exports = {
    getTareas
}