import axios from 'axios'
const request = axios.create({
    baseURL: 'http://192.168.1.99:3000/',
    timeout: 1000,
    headers: { 'Authorization': 'token' }
});

export const loadUser = () => request.get('users')

export const addUser = (name, phone) => request.post('users', { name, phone })

export const updateUser = (id, name, phone) => request.put(`users/${id}`, { name, phone })

export const removeUser = (id) => request.delete(`users/${id}`)
