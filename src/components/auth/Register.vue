<template>
  <section class="register-or-login">
    <div>
      <h1 class="register-or-login__title">Create your account</h1>
      <p class="register-or-login__subtitle">It’s free and easy</p>
    </div>

    <form @submit.prevent="submit" class="form">
      <div v-for="(item, index) in formData" :key="index" class="input-field">
        <label class="input-field__label" :for="item.vmodel">{{ item.label }}</label>
        <input
          v-model="register[item.vmodel]"
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
      <button class="form__submit" type="submit">Register</button>
      <button @click="$emit('changeAuthSimple', 'Login')" class="form__change-login-register">
        I already have an account
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'RegisterSimple',
  data() {
    return {
      register: {
        fname: '',
        email: '',
        password: ''
      },
      formData: [
        {
          vmodel: 'fname',
          label: 'full name',
          placeholder: 'Enter your name',
          type: 'text'
        },
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
      console.log('submit register')
    }
  }
}
</script>

<style lang="scss" scoped></style>
