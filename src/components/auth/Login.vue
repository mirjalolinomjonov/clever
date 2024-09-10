<template>
  <section class="register-or-login">
    <div>
      <img class="inline-block mb-[30px] xl:mb-4" src="@/assets/icons/hello-emoji.png" alt="" />
      <h1 class="register-or-login__title">Welcome back!</h1>
      <p class="register-or-login__subtitle">Let's build someting great</p>
    </div>

    <form @submit.prevent="submit" class="form">
      <div v-for="(item, index) in formData" :key="index" class="input-field">
        <label class="input-field__label" :for="item.vmodel">{{ item.label }}</label>
        <input
          v-model="login[item.vmodel]"
          class="input-field__input"
          :type="item.type"
          :id="item.vmodel"
          :name="item.vmodel"
          :placeholder="item.placeholder"
          required
        />
        <span
          v-if="Object.keys(item).includes('warning') && item.warning"
          class="input-field__warning"
        >
          {{ item.warning }}
        </span>
      </div>
      <button class="form__submit" type="submit">Login</button>
      <button @click="$emit('changeAuthSimple', 'Register')" class="form__change-login-register">
        Don't have an account?
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'RegisterSimple',
  data() {
    return {
      login: {
        fname: '',
        email: '',
        password: ''
      },
      formData: [
        {
          vmodel: 'email',
          label: 'e-mail',
          placeholder: 'Type your e-mail',
          type: 'email'
        },
        {
          vmodel: 'password',
          label: 'password',
          placeholder: 'Type your password',
          type: 'password',
          warning: 'Must be 8 characters at least'
        }
      ]
    }
  },
  methods: {
    submit() {
      console.log('submit login')
    }
  }
}
</script>

<style lang="scss" scoped></style>
