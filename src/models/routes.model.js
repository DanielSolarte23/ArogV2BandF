import mongoose from "mongoose";

// Define el schema para las rutas
const routesSchema = new mongoose.Schema({
    nombreRuta: {
        type: String,
        required: true
    },
    origen: {
        type: String,
        required: true,
        enum: ['Aida Lucia', 'Galeria la esmeralda', 'Galeria barrio bolivar', 'Galeria la 13']  // Opciones predefinidas
    },
    destino: {
        type: String,
        required: true,
        enum: ['Planta de tratamiento', 'Relleno sanitario']  // Opciones predefinidas
    },
    duracion: {
        type: String,  // Puedes mantenerlo en string o cambiarlo a Number si prefieres minutos totales
        required: true
    },
    distancia: {
        type: Number,
        required: true
    },
    paradas: {
        type: String,
        required: true,
        enum: ['Calle 1', 'Calle 2', 'Calle 3', 'Galeria la esmeralda', 'Galeria barrio bolivar', 'Galeria la 13']
    },
    horarios: [
        {
            dia: {
                type: String,
                required: true
            },
            horaSalida: {
                type: Date,  // Cambiado a Date para recibir input type="datetime-local"
                required: true
            },
            horaLlegada: {
                type: Date,  // Cambiado a Date para recibir input type="datetime-local"
                required: true
            }
        }
    ],
    funcionarioId: {
        type: mongoose.Schema.Types.ObjectId,  // Referencia al ID de un funcionario (Usuario)
        ref: "User",
        required: false
    }
});

// Exportar el modelo de la colección
const Ruta = mongoose.model("Ruta", routesSchema);

export default Ruta;
