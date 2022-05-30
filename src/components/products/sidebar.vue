<script setup>
const links = [
  { title: '產品列表', icon: 'mdi-menu', path: '/products' },
  { title: '類別', icon: 'mdi-menu', path: '/products/categories' },
]
</script>
<template>
  <div class="flex flex-col h-full p-4">
    <div class="font-semibold">產品</div>
    <v-list class="bg-transparent">
      <v-list-item
        v-for="link in links"
        :key="link.title"
        :prepend-icon="link.icon"
        :title="link.title"
        :to="link.path"
      >
      </v-list-item>
    </v-list>
  </div>
</template>
