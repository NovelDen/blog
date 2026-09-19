import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore("counter", () => {
  const user = ref("")
  const getuser = computed(() => user)
  const setuser = (name) => {
    user.value = name
  }

  return { user, getuser, setuser }
})
