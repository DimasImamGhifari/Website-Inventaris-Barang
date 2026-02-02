import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Hanya redirect jika bukan dari halaman login
      const isLoginPage = window.location.pathname === '/login'
      if (!isLoginPage) {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

// Logout function
export const logout = async () => {
  try {
    await api.post('/logout')
  } catch (error) {
    // Ignore error, still clear session
  } finally {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
  }
}

export default api
