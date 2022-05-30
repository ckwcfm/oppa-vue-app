<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const store = useUserStore()
const username = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = async () => {
  if (password.value !== confirmPassword.value) {
    console.log({ password, confirmPassword })
    console.log('not same')
    return
  }
  await store.register({ username: username.value, password: password.value })
}
</script>
<template>
  <v-container>
    <div>register</div>
    <v-text-field
      label="Username"
      placeholder="Placeholder"
      solo
      v-model="username"
    />
    <v-text-field
      label="Password"
      placeholder="Placeholder"
      solo
      v-model="password"
    />
    <v-text-field
      label="ComfirmPassword"
      placeholder="Placeholder"
      solo
      v-model="confirmPassword"
    />
    <v-btn @click="register">註冊</v-btn>
  </v-container>
</template>
