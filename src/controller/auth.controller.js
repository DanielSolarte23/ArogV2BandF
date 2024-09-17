import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/config.js";


export const MostrarUsuarios = async (req,res) =>{
  try {
    const users = await users.find();
    res.json(users)
  } catch (error) {
    res.status(500).json({message: "Error al obtener los usuarios"})
    console.log(error);
    
  }
}

// Registro de usuario
export const register = async (req, res) => {
  const { email, password, nombre } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(['El correo ya está en uso']);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      nombre,
      email,
      password: passwordHash,
      rol: 'ciudadano'  // Asigna rol por defecto en el registro
    });

    const userSaved = await newUser.save();

    const token = await createAccesToken({ id: userSaved._id });
    
    res.cookie('token', token);

    res.json({
      id: userSaved._id,
      nombre: userSaved.nombre,
      email: userSaved.email,
      rol: userSaved.rol,  // Devuelve el rol del usuario registrado
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });

  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Inicio de sesión
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ mensaje: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json({ mensaje: "Contraseña incorrecta" });

    const token = await createAccesToken({ id: userFound._id });
    
    res.cookie('token', token);

    res.json({
      id: userFound._id,
      nombre: userFound.nombre,
      email: userFound.email,
      rol: userFound.rol,  // Devuelve el rol del usuario autenticado
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });

  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Cerrar sesión
export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0)
  });
  return res.sendStatus(200);
};

// Perfil del usuario
export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ mensaje: "Usuario no encontrado" });

    return res.json({
      id: userFound._id,
      nombre: userFound.nombre,
      email: userFound.email,
      rol: userFound.rol,  // Incluye el rol en el perfil
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Verificar token
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      nombre: userFound.nombre,
      email: userFound.email,
      rol: userFound.rol  // Devuelve el rol del usuario verificado
    });
  });
};
