import axios from 'axios';

const SERVER_URL = `http://localhost:3000`;
const TIMEOUT_ERR_MSG = `Sorry, this request took too long to complete.`

const axiosInstance = axios.create({
	baseURL: SERVER_URL,
	timeout: 10000,
	timeoutErrorMessage: TIMEOUT_ERR_MSG,
});

export default axiosInstance;
