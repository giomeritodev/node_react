import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.42.119:3333'
});

export default api;