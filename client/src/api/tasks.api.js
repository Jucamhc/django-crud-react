import axios from 'axios'

const tasksApi = axios.create({
    baseURL: "http://127.0.0.1:8000/tasks/api/v1/tasks/"
});


/* Consultas a back tasks */

export const getAllTasks = () => tasksApi.get('/');
export const getOneTasks = (id) => tasksApi.get(`/${id}/`);
export const createTaks = (form) => tasksApi.post('/', form)
export const deleteTask = (id) => tasksApi.delete(`/${id}`)
export const updateTak = (id, form) => tasksApi.put(`/${id}/`, form)

