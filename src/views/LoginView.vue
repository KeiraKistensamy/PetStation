<template>
  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Please login</h2>
      <input type="text" class="form-control" name="username" v-model="username.emailAdd" placeholder="Email Address" required="" autofocus="" />

      <!-- Password Input with Toggle Visibility -->
      <div class="password-container">
        <input :type="passwordVisible ? 'text' : 'password'" class="form-control" name="password" v-model="username.password" placeholder="Password" required="" />
        <button type="button" class="toggle-password" @click="togglePasswordVisibility">
          {{ passwordVisible ? 'Hide' : 'Show' }}
        </button>
      </div>

      <button class="btn btn-lg btn-primary btn-block" @click.prevent="login" type="button">Login</button>
      <div class="row">
        <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
      </div>
    </form>
  </div>
</template>

<script setup>
import store from '@/store'
import { ref, onMounted } from 'vue'

// Define user input data
const username = ref({
  emailAdd: '',
  password: ''
})

// Define a state for password visibility toggle
const passwordVisible = ref(false)

// Toggle password visibility
function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value
}

// Handle login process
function login() {
  store.dispatch('login', {
    emailAdd: username.value.emailAdd,
    password: username.value.password
  })
}

onMounted(() => {
})
</script>

<style scoped>
body {
  background-color: #a78ba7 !important;
}

.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-signin-heading {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
}

.form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  box-sizing: border-box;
}

.form-control:focus {
  z-index: 2;
}

input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

input[type="password"],
input[type="text"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.password-container {
  display: flex;
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 8px;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #007bff;
}
</style>
