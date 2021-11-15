<template>
  <div class="container">
    <nuxt-logo></nuxt-logo>
    <form class="form" @submit="onSubmit">
      <h1 class="title">Log In</h1>
      <div class="field">
        <p class="control">
          <input
            v-model="email"
            class="input"
            type="email"
            placeholder="Email"
          />
        </p>
      </div>
      <div class="field">
        <p class="control">
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="Password"
          />
        </p>
      </div>

      <div class="field">
         <!-- <nuxt-link to="/" type="submit" class="button is-primary is-fullwidth">Login</nuxt-link> -->
        <button to="/" type="submit" class="button is-primary is-fullwidth">
          Login
        </button>
      </div>

      <div v-show="error" class="notification is-danger">
        <p>Invalid password</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'isLoggedIn',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      const payload = {
        data: {
          email: this.email,
          password: this.password,
        },
      }
      try {
        await this.$auth.loginWith('local', payload)
        this.$auth.setUserToken(token)
        this.$auth.branchCode = this.$auth.user.branchCode
        console.log('this auth: ', store.state.auth)
        this.$router.push('/')
      } catch (error) {
        console.log('--- error : ', error)
        this.error = error
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style scoped>
.form {
  width: 320px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>