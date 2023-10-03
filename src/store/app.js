// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isNavigationDrawerOpen = ref(true)
  const isAddNewModalOpen = ref(false)
  const isSearchModalOpen = ref(false)

  function toggleNavigationDrawer() {
    isNavigationDrawerOpen.value = !isNavigationDrawerOpen.value
    console.log('isNavigationDrawerOpen', isNavigationDrawerOpen.value)
  }

  function toggleAddNewModal() {
    isAddNewModalOpen.value = !isAddNewModalOpen.value
    console.log('isAddNewModalOpen', isAddNewModalOpen.value)
  }

  function openSearchModal() {
    isSearchModalOpen.value = true
  }


  return { isNavigationDrawerOpen, toggleNavigationDrawer, isAddNewModalOpen, toggleAddNewModal, openSearchModal, isSearchModalOpen }
})
