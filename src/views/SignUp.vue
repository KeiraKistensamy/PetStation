<template>
  <div class="wrapper">
    <form class="form-signup">
      <h2 class="form-signup-heading">Sign Up</h2>

      <input type="text" class="form-control" v-model="payload.firstName" placeholder="First Name" required />
      
      <input type="text" class="form-control" v-model="payload.lastName" placeholder="Last Name" required />
      
      <input type="number" class="form-control" v-model="payload.age" placeholder="Age" required />
      
      <input type="email" class="form-control" v-model="payload.emailAdd" placeholder="Email Address" required />

      <div class="password-container">
        <input :type="passwordVisible ? 'text' : 'password'" class="form-control" v-model="payload.password" placeholder="Password" required />
        <button type="button" class="toggle-password" @click="togglePasswordVisibility">
          {{ passwordVisible ? 'Hide' : 'Show' }}
        </button>
      </div>
      
      <input type="email" class="form-control" v-model="payload.userRole" placeholder="User Role" required />

      <div class="terms">
        <input type="checkbox" id="terms" required />
        <label for="terms">I agree to the <a href="#">terms of use</a></label>
      </div>
      <div class="terms">
        <input type="checkbox" id="terms" required />
        <label for="terms">Keep me updated withe latest news and/or deals</label>
      </div>

      <button class="btn btn-lg btn-primary btn-block" @click.prevent="SignUp" type="button">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '@/store'

const payload = ref({
  firstName: "",
  lastName: "",
  age: "",
  emailAdd: "",
  password: "",
  userRole: " "
})

const passwordVisible = ref(false)

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value
}

function SignUp() {
  store.dispatch('addUser', payload.value)
}
</script>

<style scoped>
body {
  background-color: #a78ba7 !important;
}

.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}

.form-signup {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.form-signup-heading {
  margin-bottom: 30px;
  text-align: center;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-size: 30px;
  color: #394867;
}

.form-control {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Irish Grover", system-ui;
}

.form-control:focus {
  outline: none;
  border-color: #394867;
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

.terms {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.terms input[type="checkbox"] {
  margin-right: 10px;
}

.terms a {
  color: #007bff;
  text-decoration: none;
}

.terms a:hover {
  text-decoration: underline;
}

.btn-primary {
  background-color: #394867;
  border: none;
  padding: 10px;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2c3b57;
}
</style>
