import Ruta from "../models/routes.model.js";
import User from "../models/user.model.js";

export const getRutas = async (req, res) => {
    try {
        const Rutas = await Ruta.find();
        res.json(Rutas);
    } catch (error) {
        return res.status(500).json({ Mensaje: "Error al obtener las rutas", error: error.message });
        console.log(error); //--------------------------LOG
    }
}

export const crearRuta = async (req, res) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const { nombreRuta, origen, destino, duracion, distancia, paradas, horarios } = req.body;

        // Crea una nueva ruta con los datos recibidos y el ID del funcionario
        const nuevaRuta = new Ruta({
            nombreRuta,
            origen,
            destino,
            duracion,
            distancia,
            paradas,
            horarios
        });

        // Guarda la nueva ruta en la base de datos
        const rutaGuardada = await nuevaRuta.save();

        // Devuelve la ruta guardada en formato JSON
        res.json(rutaGuardada);

    } catch (error) {
        // En caso de error, devuelve un mensaje con status 500 (error del servidor)
        return res.status(500).json({ message: "Algo fue mal", error: error.message });
        console.log(error);
        
    }
};


export const getRuta = async (req, res) => {
    try {
        const ruta = await Ruta.findById(req.params.id);
        if (!ruta) return res.status(404).json({ Mensaje: "Ruta no encontrada" });
        res.json(ruta);
    } catch (error) {
        return res.status(500).json({ Mensaje: "Error al obtener la ruta", error: error.message });
        console.log(error);//------------------------------------------LOG
    }
}

export const deleteRuta = async (req, res) => {
    try {
        const ruta = await Ruta.findByIdAndDelete(req.params.id);
        if (!ruta) return res.status(404).json({ Mensaje: "Ruta no encontrada" });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ Mensaje: "Error al eliminar la ruta", error: error.message });
        console.log(error);//---------------------------------------------LOG
    }
}

export const updateRuta = async (req, res) => {
    try {
        const ruta = await Ruta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ruta) return res.status(404).json({ Mensaje: "Ruta no encontrada" });
        res.json(ruta);
    } catch (error) {
        return res.status(500).json({ Mensaje: "Error al actualizar la ruta", error: error.message });
        console.log(error);//-----------------------------------------------LOG
    }
}
