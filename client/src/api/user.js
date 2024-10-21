import axios from "./axios"

export const getUsersRequest = () => axios.get('/rutas');
export const getUserRequest = (id) => axios.get(`/rutas/${id}`);
export const updateUsersRequest = (id, user) => axios.put(`/rutas/${id}`, user)
export const deleteUsersRequest = (id) => axios.delete(`/rutas/${id}`)