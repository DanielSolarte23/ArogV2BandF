import mongoose from "mongoose";//importamos la libreria mongoose 

// crear la funcion conect db la cual debe se asincrona 
export const conectDB = async () => {
  // esta funcion va a englobada en en un try cath para manejar errores y que no se nos caiga el servidor
  try {
    //await con el async y conecta a la base de datos en local host del mongo DB
    await mongoose.connect("mongodb://localhost:27017/Arog");
    // MUestra el mensaje en consola
    console.log(">>> Conectado a mongo");
    //y el catch maneja el error ademas de mostrarlo en consola
  } catch (error) {
    console.log(error);
  }
};
