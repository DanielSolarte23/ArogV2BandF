import { useState, useContext, createContext } from "react";

import {
  createRutaRequest,
  getRutaRequest,
  getRutasRequest,
  deleteRutaRequest,
  updateRutaRequest,
} from "../api/rutas";

const RutasContext = createContext();

export const useRutas = () => {
  const context = useContext(RutasContext);

  if (!context) {
    throw new Error("El useRutas debe estar dentro de AuthProvider");
  }

  return context;
};

export function RutasProvider({ children }) {
  const [rutas, setRuta] = useState([]);

  const getRutas = async () => {
    try {
      const res = await getRutasRequest();
      setTask(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createRuta = async (ruta) => { 
    try {
      const res = await createRutaRequest(ruta);
      console.log(res);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      console.log(error);
      
    }
  };
  


  const deleteRuta = async (id) => {
    try {
      const res = await deleteRutaRequest(id);
      if (res.status === 204) setRuta(rutas.filter((ruta) => ruta._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getRuta = async (id) => {
    try {
      const res = await getRutaRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateRuta = async (id, ruta) => {
    try {
      await updateRutaRequest(id, ruta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RutasContext.Provider
      value={{
        rutas,
        createRuta,
        getRuta,
        deleteRuta,
        getRutas,
        updateRuta,
      }}
    >
      {children}
    </RutasContext.Provider>
  );
}
