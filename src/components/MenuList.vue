<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/products'
import { useOrderingStore } from '../stores/ordering'
const { addProduct } = useOrderingStore()
const { products } = storeToRefs(useProductStore())
const onProductPressed = (product) => {
  addProduct({ newProduct: product })
}
</script>

<template>
  <div class="bg-gray-50 grid grid-cols-4 gap-4 overflow-y-scroll max-h-full">
    <v-card
      class=""
      v-for="item in products"
      :key="item.name"
      @click="onProductPressed(item)"
    >
      <v-img :src="item.image" height="200px" cover />
      <v-card-title>{{ item.name }}</v-card-title>
    </v-card>
  </div>
</template>
