<script setup>
import { useCategoryStore } from '@/stores/categories'
import { computed, onMounted, ref } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'
const { loadCategories, addCategory, removeCategory } = useCategoryStore()
const { categories } = storeToRefs(useCategoryStore())
const newCategory = ref('')
onMounted(async () => {
  await loadCategories()
})
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-800 p-4 space-y-4 h-full">
    <div class="font-semibold">類別</div>
    <v-text-field
      variant="outlined"
      label="類別"
      v-model="newCategory"
    ></v-text-field>
    <v-btn
      color="primary"
      prepend-icon="mdi-tag-plus-outline"
      :disabled="!newCategory"
      @click="addCategory({ name: newCategory })"
      >增加類別</v-btn
    >
    <div class="space-y-2 overflow-y-scroll h-full">
      <div
        v-for="{ name, id } in categories"
        :key="name"
        class="w-full flex space-x-2 items-stretch"
      >
        <div class="bg-slate-50 dark:bg-neutral-900 rounded w-full flex p-2">
          {{ name }}
        </div>
        <v-btn
          elevation="0"
          color="error"
          prepend-icon="mdi-trash-can-outline"
          @click="removeCategory({ id })"
        >
          刪除
        </v-btn>
      </div>
    </div>
  </div>
</template>
