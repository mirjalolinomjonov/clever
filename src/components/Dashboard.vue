<template>
  <aside class="aside w-[250px]">
    <router-link to="/" class="pl-6 block w-[136px] h-9">
      <img src="@/assets/icons/logo.svg" alt="clever logo" />
    </router-link>
    <nav class="nav flex flex-col justify-between">
      <ul class="nav-list">
        <li
          @click="isActiveRouter = item.name.toLowerCase()"
          v-for="(item, index) in navList[0]"
          :key="index"
          class="nav-list__item"
          :class="{ active: isActiveRouter === item.name.toLowerCase() }"
        >
          <router-link :to="item.router" class="nav-list__item-router flex-center gap-5">
            <BaseIcon :name="item.icon" />
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <ul class="nav-list">
        <li
          @click="isActiveRouter = item.name.toLowerCase()"
          v-for="(item, index) in navList[1]"
          :key="index"
          class="nav-list__item"
          :class="{ active: isActiveRouter === item.name.toLowerCase() }"
        >
          <router-link :to="item.router" class="nav-list__item-router flex-center gap-5">
            <BaseIcon :name="item.icon" />
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import BaseIcon from '@/components/common/BaseIcon.vue'
export default {
  name: 'DashboardSimple',
  components: {
    BaseIcon
  },
  data() {
    return {
      isActiveRouter: 'home',
      navList: [
        [
          {
            name: 'Home',
            icon: 'home',
            router: '/'
          },
          {
            name: 'Test CRUD',
            icon: 'msg',
            router: '#'
          },
          {
            name: 'Users',
            icon: 'users',
            router: '#'
          }
        ],
        [
          {
            name: 'Account',
            icon: 'user',
            router: '#'
          },
          {
            name: 'Logout',
            icon: 'logout',
            router: '#'
          }
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';
.aside {
  min-height: 100vh;
  padding: 30px 0 20px;
  border-right: 1px solid #edf2f7;

  .nav {
    height: calc(100vh - 132px);
    margin-top: 46px;
    // nav-list
    &-list {
      // nav-list__item
      &__item {
        position: relative;
        &::before {
          content: '';
          width: 2px;
          height: 24px;
          background: #4c6fff;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          visibility: hidden;
          transition: color 0.15s ease-in-out;
        }
        &:hover {
          &::before {
            visibility: visible;
          }
          a {
            color: #4c6fff;
          }
        }
        // nav-list__item-router
        &-router {
          @include font-size(14px, 600, 14.94px, #425466);
          padding: 16px 24px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.nav-list__item {
  &:hover svg rect {
    fill: #4c6fff;
  }

  &.active {
    &.nav-list__item::before {
      visibility: visible;
    }
    &.nav-list__item a {
      color: #4c6fff;
      svg rect {
        fill: #4c6fff;
      }
    }
  }
}
</style>
