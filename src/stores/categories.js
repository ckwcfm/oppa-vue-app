import { defineStore } from 'pinia'
import { HTTP } from '../plugins/http'
const route = '/api/categories'
export const useCategoryStore = defineStore('category', {
  state: () => {
    return { categories: [] }
  },
  actions: {
    async loadCategories() {
      try {
        const { data } = await HTTP.get(route)
        console.log({ data })
        this.categories = data
      } catch (error) {
        console.error(error)
      }
    },
    async addCategory({ name }) {
      try {
        const { data: category } = await HTTP.post(route, {
          name,
        })
        console.log({ category })
        this.categories.push(category)
      } catch (error) {
        throw error
      }
    },
    async removeCategory({ id }) {
      try {
        await HTTP.delete(`${route}/${id}`)
        this.categories = this.categories.filter((c) => c.id !== id)
      } catch (error) {
        throw error
      }
    },
  },
  getters: {},
})
