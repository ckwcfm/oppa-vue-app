import { defineStore } from 'pinia'

// order = {
//   product: {
//     number: Number,
//     unitPrice: Number
//     veriants: String,
//   },
// }

export const useOrderingStore = defineStore('ordering', {
  state: () => {
    return { order: {} }
  },
  actions: {
    addProduct({ newProduct }) {
      const { name, price } = newProduct
      const product = this.order[name] || { number: 0, unitPrice: price }
      product.number = product.number + 1
      this.order = {
        ...this.order,
        [name]: product,
      }
    },
    removeProduct({ name }) {
      delete this.order[name]
    },
  },
  getters: {
    total: (state) => {
      return Object.values(state.order).reduce((acc, { number, unitPrice }) => {
        return acc + number * unitPrice
      }, 0)
    },
  },
})
