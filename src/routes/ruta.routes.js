import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js"
import { getRuta, getRutas, updateRuta, deleteRuta, crearRuta } from "../controller/routes.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import RutaSchema from "../schemas/Ruta.Schema.js";

const router = Router();

router.get('/rutas', authRequire, getRutas);

router.get('/rutas/:id', authRequire, getRuta);

router.post('/rutas', authRequire,validateSchema(RutaSchema), crearRuta);

router.delete('/rutas/:id', authRequire, deleteRuta);

router.put('/rutas:id', authRequire, updateRuta);

export default router;
