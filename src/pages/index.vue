<template>
  <section>
    <Header id="header" title="Dashboard" />
    <div
      class="container p-[30px] bg-[#f0fdf4] overflow-y-auto"
      :style="`height: calc(100vh - ${offsetHeight}px)`"
    >
      <RouterView />
    </div>
  </section>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
export default {
  name: 'indexPage',
  components: { Header },
  data() {
    return {
      offsetHeight: undefined
    }
  },
  mounted() {
    this.offsetHeight = document.querySelector('#header').offsetHeight
  }
}
</script>

<style lang="scss" scoped></style>
