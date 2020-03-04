import axios from 'axios';
import { getToken } from './authService';


const apiService = axios.create ({
    baseUrl: 'http://localhost:3000'
});

apiService.interceptors.request.use(async config => {
    const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
});

export default apiService;