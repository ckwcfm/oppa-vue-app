<script setup>
import { storeToRefs } from 'pinia'
import { useOrderingStore } from '../stores/ordering'
import CurrentOrderListItem from './CurrentOrderListItem.vue'
const { order, total } = storeToRefs(useOrderingStore())
</script>

<template>
  <v-container class="space-y-2 flex flex-col max-h-full relative">
    <div
      class="text-center text-gray-400 font-semibold text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      v-if="Object.keys(order).length === 0"
    >
      沒有食品
    </div>

    <div class="flex space-x-2">
      <v-icon>mdi-cart-outline</v-icon>
      <div class="font-bold">訂單</div>
    </div>
    <v-divider color="primary mt-4" />
    <v-list class="space-y-2 bg-transparent h-full">
      <div v-for="({ number, unitPrice }, name) in order" :key="name">
        <current-order-list-item
          :name="name"
          :number="number"
          :unit-price="unitPrice"
        />
      </div>
    </v-list>

    <v-divider color="primary mt-4" />
    <div class="text-right font-bold text-xl">總數: {{ total }}</div>
    <v-btn left block color="primary">
      <v-icon left>mdi-cart-outline</v-icon>
      結計
    </v-btn>
  </v-container>
</template>
