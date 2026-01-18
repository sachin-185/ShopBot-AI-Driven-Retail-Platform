import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
});

// Response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors globally
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      if (status === 401) {
        // Unauthorized - clear token and redirect to login
        localStorage.removeItem('userToken');
        window.location.href = '/login';
      } else if (status >= 500) {
        // Server error
        console.error('Server error:', data.message || 'Internal server error');
      }
    } else if (error.request) {
      // Network error
      console.error('Network error:', error.message);
    } else {
      // Other error
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Function to set auth token
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
export { API_BASE_URL };