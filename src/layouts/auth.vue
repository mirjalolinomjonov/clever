<template>
  <main class="auth-simple">
    <router-link to="/" class="flex justify-center py-6">
      <img class="h-10 w-[151px]" src="@/assets/icons/logo.svg" alt="clever logo" />
    </router-link>
    <keep-alive class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <component :is="currentComponent" @changeAuthSimple="currentComponent = $event"></component>
    </keep-alive>
  </main>
</template>

<script>
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login.vue'
export default {
  name: 'authLayout',
  components: {
    Register,
    Login
  },
  data() {
    return {
      currentComponent: 'Login'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_mixins.scss';

.auth-simple {
  min-height: 100vh;
  text-align: center;

  .register-or-login {
    width: 425px;
    text-align: center;
    // register-or-login__title
    &__title {
      @include font-size(28px, 600, 38.09px, #27272e);
      margin-bottom: 8px;
    }
    // register-or-login__subtitle
    &__subtitle {
      @include font-size(16px, 400, 25.92px, #27272e);
      margin-bottom: 54px;
      @media screen and (max-width: 1400px) {
        margin-bottom: 24px;
      }
    }

    .form {
      text-align: left;
      .input-field {
        &:not(:last-child) {
          margin-bottom: 30px;
          @media screen and (max-width: 1400px) {
            margin-bottom: 22px;
          }
        }
        // input-field__label
        &__label {
          @include font-size(14px, 500, 16.94px, #425466);
          display: block;
          margin-bottom: 8px;
          cursor: pointer;
          &::first-letter {
            text-transform: uppercase;
          }
        }
        // input-field__input
        &__input {
          @include font-size(15px, 500, 15px, #425466);
          width: 100%;
          height: 46px;
          border-radius: 6px;
          padding: 16px;
          background: #edf2f7;
          &::placeholder {
            color: #7a828a;
          }
        }
        // input-field__warning
        &__warning {
          @include font-size(11px, 400, 12px, #7a7a9d);
          margin-top: 8px;
        }
      }

      // form__submit
      &__submit {
        @include font-size(14px, 600, 14px, #fff);
        width: 100%;
        height: 46px;
        padding: 16px 24px;
        background: #4c6fff;
        border-radius: 10px;
        transition: all 0.15s ease-in-out;
        &:hover {
          opacity: 0.8;
        }
        &:active {
          transform: scale(0.99);
        }
      }
      // form__change-login-register
      &__change-login-register {
        @include font-size(16px, 400, 12px, #27272e);
        margin-top: 12px;
        transition: color 0.15s ease-in-out;
        &:hover {
          color: #4c6fff;
        }
      }
    }
  }
}
</style>
