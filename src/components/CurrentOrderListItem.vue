<script setup>
import { useOrderingStore } from '../stores/ordering'
const { name, number, unitPrice } = defineProps({
  name: '',
  number: 0,
  unitPrice: 0,
})
const orderingStore = useOrderingStore()
const { removeProduct } = orderingStore
const onRemove = (name) => {
  removeProduct({ name })
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center">
      <div class="">
        {{ name }}
      </div>
      <hr
        class="flex-grow h-px mx-4 border-t-gray-800 border-dotted border-t-2"
      />
      <div class="font-semibold">x {{ number }}</div>
    </div>
    <div class="flex justify-between">
      <div class="text-slate-500 text-sm font-semibold">
        單價 ${{ unitPrice }}
      </div>
      <div class="text-slate-500 text-sm font-semibold">
        ${{ unitPrice * number }}
      </div>
    </div>
    <v-btn
      icon
      size="x-small"
      elevation="0"
      density=""
      class="self-end"
      @click="onRemove(name)"
    >
      <v-icon size="x-small" color="red"> mdi-trash-can-outline </v-icon>
    </v-btn>
  </div>
</template>
