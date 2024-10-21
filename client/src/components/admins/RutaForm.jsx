import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useRutas } from "../../context/RutasContext";
import { useNavigate, useParams } from "react-router-dom";

const RutaForm = ({ onClose }) => {
    const { register, handleSubmit, setValue, control } = useForm();
    const { createRuta, getRuta, updateRuta } = useRutas();
    const navigate = useNavigate();
    const paramss = useParams();

    const [horarios, setHorarios] = useState([{ dia: '', horaSalida: '', horaLlegada: '' }]);

    // Cargar ruta para editar si se pasa un id en los parámetros
    useEffect(() => {
        async function cargandoRutas(params) {
            if (paramss.id) {
                const ruta = await getRuta(paramss.id);
                console.log(ruta);
                setValue("nombreRuta", ruta.nombreRuta);
                setValue("origen", ruta.origen);
                setValue("destino", ruta.destino);
                setValue("duracion", ruta.duracion);
                setValue("distancia", ruta.distancia);
                setValue("paradas", ruta.paradas.map(parada => parada.nombre));
                setValue("horarios", ruta.horarios);
                setValue("funcionarioId", ruta.funcionarioId);
            }
        }
        cargandoRutas(paramss);
    }, [paramss.id, getRuta, setValue]);

    const onSubmit = handleSubmit((data) => {
        if (paramss.id) {
            updateRuta(paramss.id, data);
        } else {
            createRuta(data);
        }
        navigate('/perfil-admin/rutas');

        onClose();
    });

    // Agregar un nuevo horario
    const addHorario = () => {
        setHorarios([...horarios, { dia: '', horaSalida: '', horaLlegada: '' }]);
    };

    // Eliminar un horario
    const removeHorario = (index) => {
        const newHorarios = [...horarios];
        newHorarios.splice(index, 1);
        setHorarios(newHorarios);
    };

    return (
        <div className="w-full mx-auto h-full bg-white p-5 shadow-lg rounded-lg">
            <h1 className="text-xl font-bold mb-2 text-gray-700">
                {paramss.id ? 'Editar Ruta' : 'Registrar Nueva Ruta'}
            </h1>
            <form onSubmit={onSubmit} className="space-y-4">

                {/* Nombre de la Ruta */}
                <div>
                    <label htmlFor="nombreRuta" className="block text-sm font-medium text-gray-700">
                        Nombre de la Ruta
                    </label>
                    <input
                        type="text"
                        id="nombreRuta"
                        name="nombreRuta"
                        {...register("nombreRuta")}
                        required
                        className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                    />
                </div>

                {/* Origen */}
                <div>
                    <label htmlFor="origen" className="block text-sm font-medium text-gray-700">
                        Origen
                    </label>
                    <select
                        id="origen"
                        name="origen"
                        {...register("origen")}
                        required
                        className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                    >
                        <option disabled value="">
                            Selecciona el origen
                        </option>
                        <option value="Aida Lucia">Aida Lucia</option>
                        <option value="Galeria la esmeralda">Galeria la esmeralda</option>
                        <option value="Galeria barrio bolivar">Galeria barrio bolivar</option>
                        <option value="Galeria la 13">Galeria la 13</option>
                    </select>
                </div>

                {/* Destino */}
                <div>
                    <label htmlFor="destino" className="block text-sm font-medium text-gray-700">
                        Destino
                    </label>
                    <select
                        id="destino"
                        name="destino"
                        {...register("destino")}
                        required
                        className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                    >
                        <option disabled value="">
                            Selecciona el destino
                        </option>
                        <option value="Planta de tratamiento">Planta de tratamiento</option>
                        <option value="Relleno sanitario">Relleno sanitario</option>
                    </select>
                </div>

                {/* Duración */}
                <div>
                    <label htmlFor="duracion" className="block text-sm font-medium text-gray-700">
                        Duración (minutos)
                    </label>
                    <input
                        type="text"
                        id="duracion"
                        name="duracion"
                        {...register("duracion")}
                        required
                        className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                    />
                </div>

                {/* Distancia */}
                <div>
                    <label htmlFor="distancia" className="block text-sm font-medium text-gray-700">
                        Distancia (km)
                    </label>
                    <input
                        type="number"
                        id="distancia"
                        name="distancia"
                        {...register('distancia')}
                        required
                        className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                    />
                </div>

                {/* Paradas */}
                <div>
                    <label htmlFor="paradas" className="block text-sm font-medium text-gray-700">
                        Paradas
                    </label>
                    <select
                        id="paradas"
                        name="paradas"
                        {...register("paradas")}
                        required
                        className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                    >
                        <option value="Calle 1">Calle 1</option>
                        <option value="Calle 2">Calle 2</option>
                        <option value="Calle 3">Calle 3</option>
                        <option value="Galeria la esmeralda">Galeria la esmeralda</option>
                        <option value="Galeria barrio bolivar">Galeria barrio bolivar</option>
                        <option value="Galeria la 13">Galeria la 13</option>
                    </select>
                </div>

                {/* Horarios */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Horarios</label>
                    {horarios.map((horario, index) => (
                        <div key={index} className="grid grid-cols-3 gap-4">
                            {/* Día */}
                            <div>
                                <label htmlFor={`horarios[${index}].dia`} className="block text-sm font-medium text-gray-700">
                                    Día
                                </label>
                                <input
                                    type="text"
                                    id={`horarios[${index}].dia`}
                                    {...register(`horarios[${index}].dia`)}
                                    required
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                                />
                            </div>

                            {/* Hora de salida */}
                            <div>
                                <label htmlFor={`horarios[${index}].horaSalida`} className="block text-sm font-medium text-gray-700">
                                    Hora de Salida
                                </label>
                                <input
                                    type="datetime-local"
                                    id={`horarios[${index}].horaSalida`}
                                    {...register(`horarios[${index}].horaSalida`)}
                                    required
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                                />
                            </div>

                            {/* Hora de llegada */}
                            <div>
                                <label htmlFor={`horarios[${index}].horaLlegada`} className="block text-sm font-medium text-gray-700">
                                    Hora de Llegada
                                </label>
                                <input
                                    type="datetime-local"
                                    id={`horarios[${index}].horaLlegada`}
                                    {...register(`horarios[${index}].horaLlegada`)}
                                    required
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-verde-principal focus:border-verde-principal sm:text-sm"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={() => removeHorario(index)}
                                className="mt-2 text-red-500 text-sm"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addHorario}
                        className="text-blue-500 mt-4"
                    >
                        Agregar otro horario
                    </button>
                </div>

                {/* Botón de submit */}
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                    {paramss.id ? 'Actualizar Ruta' : 'Registrar Ruta'}
                </button>
            </form>
        </div>
    );
};

export default RutaForm;
