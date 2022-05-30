<script setup>
import Sidebar from '../../components/products/sidebar.vue'
</script>

<template>
  <div class="flex flex-row h-full">
    <sidebar class="w-[420px] h-full" />
    <router-view class="w-full bg-slate-50 dark:bg-neutral-800 h-full" />
  </div>
</template>
