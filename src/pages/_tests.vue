<template>
  <section class="test-wrapper">
    <Test v-for="item in 8" :id="item + 330" :key="item" />
  </section>
</template>

<script>
import Test from '@/components/Test.vue'
export default {
  components: {
    Test
  }
}
</script>

<style lang="scss" scoped>
.test-wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 30px;
}
</style>
