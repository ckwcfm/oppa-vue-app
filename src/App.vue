<script setup>
import { ref } from '@vue/reactivity'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import NavDrawer from './components/NavDrawer.vue'
const themeStore = useThemeStore()
const { theme, tailwindThemeMode } = storeToRefs(themeStore)
</script>

<template>
  <v-app :theme="theme" :class="tailwindThemeMode" class="h-screen">
    <nav-drawer />
    <v-main class="h-full">
      <router-view />
    </v-main>
  </v-app>
</template>
