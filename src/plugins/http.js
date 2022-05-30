import axios from 'axios'
const baseURL = 'http://localhost:8080/v1'
const http = axios.create({
  baseURL,
})
import { useUserStore } from '@/stores/user'

http.interceptors.request.use(
  async (config) => {
    const { accessToken } = useUserStore()
    config.headers = {
      Authorization: accessToken,
      'Content-Type': 'application/json',
    }
    return config
  },
  (error) => {
    console.error({ error })
    Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    try {
      const originalRequest = error.config

      // ? if url is login or refresh we are not going to retry
      const loginUrl = `${baseURL}/auth/login/password`
      const refreshUrl = `${baseURL}/auth/register/password`

      if (
        error.response.status === 401 &&
        (originalRequest.url === loginUrl || originalRequest.url === refreshUrl)
      ) {
        throw error
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        const userStore = useUserStore()
        const { user } = await userStore.refresh()
        const { token } = user
        // axios.defaults.headers.common.Authorization = token
        originalRequest.headers.Authorization = token
        return axios(originalRequest)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

export const HTTP = http

const authHttp = axios.create({
  baseURL,
})

export const AUTH = authHttp
