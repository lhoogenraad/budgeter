import axiosInstance from "./axiosInstance";

// Login auth route.
const login = async (email, password) => {
	return axiosInstance.post(`/api/auth/login`, { email, password }).then(res => res);
};


// Signup route
const signup = async (email, password) => {
	return axiosInstance.post(`/api/auth/signup`, { email, password }).then(res => res);
}

export default {
	login,
	signup,
};
