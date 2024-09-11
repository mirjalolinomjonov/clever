<template>
  <main class="flex">
    <Dashboard />
    <RouterView class="w-full" />
  </main>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'layoutIndex',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss" scoped></style>
