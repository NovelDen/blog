import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const routeChildrenListStore = defineStore("routeChildrenList", () => {
      const routeChildrenList = ref([])
      const getrouteChildrenList = computed(() => routeChildrenList)
      const setrouteChildrenList = (...list) => {
            routeChildrenList.value=list
      }

      return { routeChildrenList, getrouteChildrenList, setrouteChildrenList }
})