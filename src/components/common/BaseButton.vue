<template>
  <button class="base-btn inline-flex-center-center gap-2">
    <slot name="icon"></slot>
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';
.base-btn {
  @include font-size(12px, 600, 12px, #fff);
  width: 100px;
  height: 36px;
  padding: 12px 20px;
  border-radius: 6px;
  background: #4c6fff;
  text-transform: capitalize;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.99);
  }
}
</style>
