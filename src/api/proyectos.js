import axios from './axios'

export const crearProyectoRequest = (proyecto) => axios.post('/crearProyecto', proyecto);
export const getProyectosRequest = () => axios.get('/obtenerProyectos')