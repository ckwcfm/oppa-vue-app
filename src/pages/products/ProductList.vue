<script setup>
import { useCategoryStore } from '@/stores/categories'
import { storeToRefs } from 'pinia'
const { categories } = storeToRefs(useCategoryStore())

const products = [
  {
    name: 'title',
    price: 12312,
  },
  {
    name: 'tsfd',
    price: 123,
  },
]
</script>
<template>
  <div class="flex flex-col p-4 space-y-2">
    <div class="flex justify-start items-center space-x-2">
      <v-icon>mdi-format-list-bulleted</v-icon>
      <span class="text-lg font-semibold"> 產品列表 </span>
    </div>
    <v-btn>add product</v-btn>
    <v-table class="rounded-md dark:bg-neutral-900">
      <thead>
        <tr>
          <th>fsf</th>
          <th>fsf</th>
          <th>fsf</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
