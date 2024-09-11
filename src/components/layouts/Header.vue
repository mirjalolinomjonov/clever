<template>
  <header class="header pt-[30px] px-[30px]">
    <div class="flex-center-between">
      <button @click="backTo$router.go(-1)" :disabled="disabled" class="header__title">
        <slot name="icon"></slot>
        {{ title }}
      </button>

      <div>
        <slot name="button"></slot>
        <BaseButton name="create">
          <template #icon>
            <img src="@/assets/icons/plus.svg" alt="icon plus" />
          </template>
        </BaseButton>
      </div>
    </div>

    <!-- navbar list -->
    <ul class="list">
      <li v-for="(item, index) in navList" :key="index" class="list__item">
        <router-link :to="item.router" class="list__item-router">{{ item.name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import BaseButton from '@/components/common/BaseButton.vue'
export default {
  name: 'HeaderLayout',
  components: {
    BaseButton
  },
  props: {
    title: {
      type: String,
      default: 'oops'
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      navList: [
        {
          name: 'tests',
          router: '/tests'
        },
        {
          name: 'applicants',
          router: '/applicants'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';

.header {
  border-bottom: 1px solid #edf2f7;
  // header__title
  &__title {
    @include font-size(28px, 600, 38.09px, #27272e);
  }

  .list {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 25px;
    // list__item
    &__item {
      // list__item-router
      &-router {
        @include font-size(14px, 600, 20px, #718096);
        text-transform: capitalize;
        padding-bottom: 20px;
        border-bottom: 1px solid transparent;
        display: inline-block;
        transition: all 0.15s ease-in-out;
        &:hover,
        &.router-link-active,
        &.router-link-exact-active {
          color: #1a202c;
          border-color: #4c6fff;
        }
      }
    }
  }
}
</style>
