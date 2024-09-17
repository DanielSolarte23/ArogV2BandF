import { Router } from "express"; // Importa el enrutador de Express para definir rutas
import { authRequire } from '../middlewares/validateToken.js'; // Importa el middleware para validar tokens de autenticación
import { getTask, getTasks, updateTask, deleteTask, createTask } from "../controller/task.controller.js"; // Importa los controladores para las operaciones de tareas
import { validateSchema } from "../middlewares/validator.middleware.js"; // Importa el middleware para validar datos con esquemas
import { createTaskShema } from "../schemas/task.schema.js"; // Importa el esquema de validación para la creación de tareas

const router = Router(); // Crea una instancia del enrutador de Express

// Ruta para obtener todas las tareas
// Usa el middleware `authRequire` para asegurar que el usuario esté autenticado antes de llamar al controlador `getTasks`
router.get('/tasks', authRequire, getTasks);

// Ruta para obtener una tarea específica por ID
// Usa el middleware `authRequire` para asegurar que el usuario esté autenticado antes de llamar al controlador `getTask`
router.get('/tasks/:id', authRequire, getTask);

// Ruta para crear una nueva tarea
// Usa el middleware `authRequire` para asegurar que el usuario esté autenticado
// Usa el middleware `validateSchema` para validar los datos de la tarea antes de llamar al controlador `createTask`
router.post('/tasks', authRequire, validateSchema(createTaskShema), createTask);

// Ruta para eliminar una tarea específica por ID
// Usa el middleware `authRequire` para asegurar que el usuario esté autenticado antes de llamar al controlador `deleteTask`
router.delete('/tasks/:id', authRequire, deleteTask);

// Ruta para actualizar una tarea específica por ID
// Usa el middleware `authRequire` para asegurar que el usuario esté autenticado antes de llamar al controlador `updateTask`
router.put('/tasks/:id', authRequire, updateTask);

export default router; // Exporta el enrutador configurado para su uso en otras partes de la aplicación
