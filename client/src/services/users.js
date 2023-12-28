import axiosInstance from "./axiosInstance";

// Login auth route.
const login = async (username, password) => {
	return axiosInstance.post(`/api/auth/login`, { username, password }).then(res => res);
};


// Signup route
const signup = async (username, password) => {
	return axiosInstance.post(`/api/auth/signup`, { username, password }).then(res => res);
}

export default {
	login,
	signup,
};
