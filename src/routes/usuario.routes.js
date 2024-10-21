import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js"
import { getUser, getUsers, updateUser, deleteUser } from "../controller/user.controller.js"

const router = Router();

router.get('/usuarios', authRequire, getUsers);
router.get('/usuarios/:id', authRequire, getUser);
router.put('/usuarios/:id', authRequire, updateUser);
router.delete('/usuarios/:id', authRequire, deleteUser);

export default router;