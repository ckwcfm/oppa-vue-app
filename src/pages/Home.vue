<script setup>
import OrderList from '../components/OrderList.vue'
import MenuList from '../components/MenuList.vue'
</script>

<template>
  <div class="flex h-full md:flex-row flex-col-reverse space-x-2">
    <order-list class="md:w-[420px] w-full h-full" />
    <menu-list class="p-4 w-full h-full" />
  </div>
</template>
