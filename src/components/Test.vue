<template>
  <div class="test flex flex-col justify-between">
    <div>
      <!-- header -->
      <div class="flex-between">
        <figure class="avatar">
          <img class="avatar__img" :src="`https://picsum.photos/id/${id}/100/100`" alt="user img" />
        </figure>
        <button class="more self-start">
          <img src="@/assets/icons/btn-more.svg" alt="more icon" />
          <ul class="more-list">
            <li class="more-list__item"><span @click="onHandler(true)">edit</span></li>
            <li class="more-list__item"><span @click="onHandler(false)">delete</span></li>
          </ul>
        </button>
      </div>
      <!-- labels -->
      <router-link to="#" class="test__title block mt-[18px]">Lorem, ipsum.</router-link>
      <p class="test__subtitle">Lorem ipsum dolor sit amet.</p>
    </div>
    <!-- deadline time -->
    <div class="flex-center gap-4">
      <time class="test__deadline inline-flex-center gap-3" datetime="">
        <img src="@/assets/icons/calendar.svg" alt="calendar icon" />
        Thu.24
      </time>
      <span class="test__deadline inline-flex-center gap-3">
        <img src="@/assets/icons/alarm.svg" alt="calendar icon" />
        11:00 - 12:20
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestSimple',
  props: {
    testObject: {
      type: Object,
      default: () => {}
    },
    id: Number
  },
  methods: {
    onHandler(event) {
      if (event) {
        alert('Edit')
      } else {
        alert('Delete')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';

.test {
  width: 100%;
  height: 203px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 3px 8px -1px #3232470d;
  box-shadow: 0px 0px 1px 0px #0c1a4b3d;
  background: #fff;
  overflow: hidden;

  .avatar {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    overflow: hidden;
    background: #f0fdf4;
    // avatar__img
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .more {
    position: relative;
    &:hover .more-list {
      visibility: visible;
      opacity: 1;
    }
    // more-list
    &-list {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding: 6px 12px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0px 3px 8px -1px #3232470d;
      box-shadow: 0px 0px 1px 0px #0c1a4b3d;
      text-align: left;
      visibility: hidden;
      opacity: 0;
      transition: all 0.15s ease-in-out;
      // more-list__item
      &__item {
        @include font-size(14px, 500, 20px, #7a7a9d);
        transition: color 0.15s ease-in-out;
        text-transform: capitalize;
        &:first-child:hover {
          color: #4ade80;
        }
        &:last-child:hover {
          color: #f87171;
        }
      }
    }
  }

  // test__title
  &__title {
    @include font-size(16px, 600, 25px, #27272e);
  }
  // test__subtitle
  &__subtitle {
    @include font-size(14px, 700, 22.68px, #4c6fff);
  }
  // test__deadline
  &__deadline {
    @include font-size(12px, 700, 14.52px, #7a7a9d);
  }
}
</style>
