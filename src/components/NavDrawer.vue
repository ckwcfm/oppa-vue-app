<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import logo from '@/assets/logo_colored.svg'
import { useUserStore } from '@/stores/user'
const drawer = ref(true)
const routes = [
  { title: '落單', icon: 'mdi-menu', path: '/home' },
  { title: '菜式', icon: 'mdi-food', path: '/products' },
]
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { user, isLoggedIn } = storeToRefs(useUserStore())
const { logout } = useUserStore()
</script>

<template>
  <div v-if="isLoggedIn">
    <v-navigation-drawer app v-model="drawer" color="primary" temporary>
      <v-list rounded bg-color="transparent">
        <v-list-subheader>MENU</v-list-subheader>
        <v-list-subheader> {{ user?.username }}</v-list-subheader>
        <v-list-item
          v-for="({ title, icon, path }, index) in routes"
          :key="index"
          :to="path"
          :prepend-icon="icon"
          :title="title"
          active-color="accent"
        />
        <v-switch
          class="mx-4"
          false-value="lightTheme"
          true-value="darkTheme"
          v-model="theme"
        >
          <template v-slot:label> Theme: {{ theme }} </template>
        </v-switch>
      </v-list>

      <template v-slot:append>
        <div class="ma-2">
          <v-btn color="error" block @click="logout">登出</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-img contain :src="logo" max-width="64"> </v-img>
      <v-toolbar-title>OPPA 歐巴滋手</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
