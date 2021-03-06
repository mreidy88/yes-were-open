import axios from 'axios';

const baseUrl = 'http://localhost:3000'
export const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

export const createUser = async (data) => {
  const resp = await api.post('/users', { user: data })
  return resp.data
}

export const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data })
  return resp.data
}

export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}

export const getAllRestaurants = async () => {
  const resp = await api.get('/restaurants');
  return resp.data;
}


export const updateRestaurant = async (id, data) => {
  const resp = await api.put(`/restaurants/${id}`, { restaurant: data })
  return resp.data
}

export const createRestaurants = async (data) => {
  const resp = await api.post('/restaurants', { restaurant: data })
  return resp.data
}

export const destroyRestaurant = async (id) => {
  const resp = await api.delete(`/restaurants/${id}`)
  return resp.data
}

