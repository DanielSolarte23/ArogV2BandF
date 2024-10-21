import User from "../models/user.model.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";


export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al optener los usuarios" })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ mensaje: "Usuario no encontrado" })
        res.json(user)
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al optener el usuarios" })
    }
}

export const updateUser = async (req, res) => {
    try {
      const { password } = req.body;
      let updatedData = { ...req.body };
  
      // Si hay una contraseña en el cuerpo de la solicitud, cifrarla
      if (password) {
        const passwordHash = await bcrypt.hash(password, 10);
        updatedData.password = passwordHash;
      }
  
      // Actualiza el usuario y devuelve el nuevo documento actualizado
      const user = await User.findByIdAndUpdate(req.params.id, updatedData, {
        new: true,
      });
  
      if (!user) return res.status(404).json({ mensaje: "Usuario no encontrado" });
  
      // Mantener el token actual sin cambiarlo (puedes devolver el token si es necesario)
      res.json({
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol, 
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
  
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  };
  

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) return res.status(404).json({ mensaje: "Usuario no encontrado" })
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ mensaje: "Usuario no encontrado" })
    }
}