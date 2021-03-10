const API_BASE_URL = '192.168.99.194:8002';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const LOGIN = getApiUrl('/user/loginUser');
export const SIGNUP = getApiUrl('/user/registerUser');
