<template>
  <div class="container">
    <div class="welcome-message">
      <h2 v-if="user">Welcome back, {{ user.firstName }} {{ user.lastName }}!</h2>
      <h2 v-else>Please log in</h2>
    </div>

    <div v-if="user" class="user-info">
      <div class="user-detail">
        <span class="label">First Name:</span>
        <span>{{ user.firstName }}</span>
      </div>

      <div class="user-detail">
        <span class="label">Last Name:</span>
        <span>{{ user.lastName }}</span>
      </div>

      <div class="user-detail">
        <span class="label">Age:</span>
        <span>{{ user.age }}</span>
      </div>

      <div class="user-detail">
        <span class="label">Email:</span>
        <span>{{ user.emailAdd }}</span>
      </div>

      <div class="user-detail">
        <span class="label">Role:</span>
        <span>{{ user.userRole }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies'
import store from '@/store'
const { cookies } = useCookies()

export default {
  computed: {
    user() {
      return this.$store.state.user || cookies.get('LegitUser')?.result;
    },
  },

mounted() {
  if (this.user) {
    store.dispatch('fetchUser', this.user.userID).then(() => {
      console.log(this.user); // Log the user object to inspect the API response
    });
  }
}
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.welcome-message {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

h2 {
  font-size: 28px;
  color: #4CAF50;
  margin-bottom: 20px;
}

.user-info {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.user-detail {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 18px;
}

.label {
  font-weight: bold;
  color: #555;
}

span {
  color: #333;
}

/* Add some hover effects for the card */
.user-info:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  transition: all 0.2s ease-in-out;
}
</style>
