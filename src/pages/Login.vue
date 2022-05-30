<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const store = useUserStore()
const username = ref('')
const password = ref('')
const errormessage = ref('')

const login = async () => {
  try {
    if (!username.value) {
      errormessage.value = '用戶名稱或密碼錯誤'
      return
    }
    if (!password.value) {
      errormessage.value = '用戶名稱或密碼錯誤'
      return
    }
    errormessage.value = ''
    await store.login({ username: username.value, password: password.value })
    const router = useRouter()
    router.go('/')
  } catch (error) {
    errormessage.value = '用戶名稱或密碼錯誤'
  }
}
</script>
<template>
  <div
    class="flex flex-col justify-center items-center space-y-2 p-4 h-full bg-yellow-50"
  >
    <img class="w-64 mb-6 self-center" src="@/assets/logo_colored.svg" />
    <v-card class="flex flex-col p-4 min-w-[350px] space-y-4">
      <div class="flex flex-col space-y-1">
        <label for="usrname" class="font-semibold text-gray-700">
          用戶名稱
        </label>
        <input
          id="username"
          class="rounded-md border border-gray-300 hover:border-gray-600 focus:outline-yellow-400 p-2"
          type="text"
          v-model="username"
          placeholder="用戶名稱"
        />
      </div>

      <div class="flex flex-col space-y-1">
        <label for="password" class="font-semibold text-gray-700"> 密碼 </label>
        <input
          id="password"
          class="rounded-md border border-gray-300 hover:border-gray-600 focus:outline-yellow-400 p-2"
          type="password"
          v-model="password"
          placeholder="密碼"
        />
        <p v-if="errormessage" class="text-red-500 text-xs italic">
          {{ errormessage }}
        </p>
      </div>

      <v-btn class="bg-primary disabled:bg-secondary" @click="login"
        >登入</v-btn
      >
    </v-card>

    <div class="mt-4">
      <span class="text-accent text-sm mr-2">未有戶口？</span>
      <router-link class="text-accent font-bold text-sm" to="/register"
        >註冊</router-link
      >
    </div>
  </div>
</template>
