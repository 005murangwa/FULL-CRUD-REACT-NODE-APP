import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTasks = () => axios.get(`${API_URL}/tasks`);
export const getTask = (id) => axios.get(`${API_URL}/tasks/${id}`);
export const createTask = (task) => axios.post(`${API_URL}/tasks`, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/tasks/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);
