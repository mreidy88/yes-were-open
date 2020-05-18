import { api } from './api-helper';
export const Register = async (credentials) => {
    try {
      const resp = await api.post('/Register', credentials);
      return resp.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const Login = async (credentials) => {
    try {
      const resp = await api.post('/Login', credentials);
      localStorage.setItem('token', resp.data.token);
      return resp.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const signOut = async (user) => {
    try {
      await localStorage.clear();
      return true;
    } catch (error) {
      throw error;
    }
  };
  
  export const changePassword = async (passwords, user) => {
    try {
      const resp = await api.post('/');
      return resp.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const verifyUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const res = await api.get('/verify');
      return res.data;
    }
    return false;
  };