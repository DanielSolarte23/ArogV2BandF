import Task from "../models/task.model.js"; // Importa el modelo de tareas (Task) desde la carpeta models

// Función para obtener todas las tareas del usuario actual
export const getTasks = async (req, res) => {
    try {
        // Busca todas las tareas asociadas al ID del usuario autenticado y las "popula" con la información del usuario
        const tasks = await Task.find({
            user: req.user.id // Filtra las tareas por el usuario actual
        }).populate('user') // Añade información del usuario relacionado
        res.json(tasks) // Devuelve las tareas encontradas en formato JSON
    } catch (error) {
        return res.status(500).json({ message: "Algo fue mal" }) // En caso de error, devuelve un mensaje con status 500 (error del servidor)
    }
}

// Función para crear una nueva tarea
export const createTask = async (req, res) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const { title, description, date } = req.body;
        // Crea una nueva tarea con los datos recibidos y el ID del usuario autenticado
        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id, // Asigna la tarea al usuario actual
        })
        const saveTask = await newTask.save() // Guarda la nueva tarea en la base de datos
        res.json(saveTask) // Devuelve la tarea guardada en formato JSON
    } catch (error) {
        return res.status(500).json({ message: "Algo fue mal" }) // En caso de error, devuelve un mensaje con status 500 (error del servidor)
    }
}

// Función para obtener una tarea específica por su ID
export const getTask = async (req, res) => {
    try {
        // Busca la tarea por su ID y "popula" con la información del usuario
        const task = await Task.findById(req.params.id).populate('user')
        if (!task) return res.status(404).json({ mensaje: "Tarea no encontrada" }) // Si no se encuentra la tarea, devuelve un mensaje con status 404
        res.json(task) // Devuelve la tarea encontrada en formato JSON
    } catch (error) {
        return res.status(404).json({ message: "Tarea no encontrada" }) // En caso de error, devuelve un mensaje de tarea no encontrada con status 404
    }
};

// Función para eliminar una tarea por su ID
export const deleteTask = async (req, res) => {
    try {
        // Busca y elimina la tarea por su ID
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).json({ mensaje: "Tarea no encontrada" }) // Si no se encuentra la tarea, devuelve un mensaje con status 404
        return res.sendStatus(204) // Si la tarea fue eliminada, devuelve un status 204 (sin contenido)
    } catch (error) {
        return res.status(404).json({ message: "Tarea no encontrada" }) // En caso de error, devuelve un mensaje de tarea no encontrada con status 404
    }
}

// Función para actualizar una tarea por su ID
export const updateTask = async (req, res) => {
    try {
        // Busca la tarea por su ID y la actualiza con los datos del cuerpo de la solicitud, devolviendo la tarea actualizada
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Devuelve la tarea actualizada en lugar de la original
        })
        if (!task) return res.status(404).json({ mensaje: "Tarea no encontrada" }) // Si no se encuentra la tarea, devuelve un mensaje con status 404
        res.json(task) // Devuelve la tarea actualizada en formato JSON
    } catch (error) {
        return res.status(404).json({ message: "Tarea no encontrada" }) // En caso de error, devuelve un mensaje de tarea no encontrada con status 404
    }
}
