import { defineStore } from 'pinia'
import { AUTH } from '../plugins/http'
import { useCookies } from '@vueuse/integrations/useCookies'
const { set, get, remove } = useCookies()

const setCookie = ({ user }) => {
  console.log({ user })
  set('user', user, {
    path: '/',
    domain: 'localhost',
    sameSite: true,
  })
  console.log('sdfsf')
}

export const useUserStore = defineStore('user', {
  state: () => {
    return { user: get('user') }
  },
  actions: {
    async login({ username, password }) {
      const { data: user } = await AUTH.post('/auth/login/password', {
        username,
        password,
      })
      setCookie({ user })
      this.user = user
      this.$router.replace('/')
    },
    async register({ username, password }) {
      try {
        const { data: user } = await AUTH.post('/auth/register/password', {
          username,
          password,
        })
        setCookie({ user })
        this.user = user
        this.$router.replace('/')
      } catch (error) {
        throw error
      }
    },

    async refresh() {
      try {
        const { refreshToken } = get('user')
        const { data: user } = await AUTH.post(
          '/auth/refresh',
          {},
          {
            headers: {
              Authorization: refreshToken,
            },
          }
        )
        setCookie({ user })
        this.user = user
        return { user }
      } catch (error) {
        this.user = null
        this.$router.replace('/login')
        throw error
      }
    },

    logout() {
      console.log('logout')
      this.user = null
      remove('user')
      this.$router.replace('/login')
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    accessToken: () => {
      const { token } = get('user')
      return token
    },
  },
})
