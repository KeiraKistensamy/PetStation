<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">
        Pet Station!
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin" class="nav-link">
                Admin
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactus" class="nav-link">
                Contact Us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/checkout" class="nav-link">
                Checkout
              </router-link>
            </li>
          </ul>
          <div class="nav-icons">
            <router-link to="/userprofile" class="nav-link">
              <img src="https://keirakistensamy.github.io/capstoneImg/images/information.png" width="40px" height="40px" alt="Profile">
            </router-link>
            <div class="auth-icons d-flex align-items-center">
              <router-link to="/login" class="nav-link">
                <img src="https://keirakistensamy.github.io/capstoneImg/images/log-in.png" width="40px" height="40px" alt="Login">
              </router-link>
              <router-link to="/signup" class="nav-link">
                <img src="https://keirakistensamy.github.io/capstoneImg/images/signup.png" width="40px" height="40px" alt="Signup">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComp',

  user() {
    return this.$store.state.user;
  },
  userID() {
    return this.user? this.user.userID : null;
  },
  isAdmin (){
    return this.user?.userRole?.toLowerCase() === 'admin';
  }
}
</script>

<style scoped>
/* Styling for the navigation bar */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0 20px;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
}

.logo {
  margin-right: auto;
  font-size: 24px;
  color: #330D64;
  font-weight: bold;
  font-family: "Irish Grover", system-ui;
}

.nav-link {
  color: #000;
  font-size: 18px;
  padding: 10px 15px;
  font-weight: bold; /* Add this line to make the nav-items bolder */
  transition: all 0.3s ease;
  border-radius: 8px;
  text-decoration: none;
  position: relative;
  background-color: transparent; /* Ensure no background on hover */
}

.nav-link:hover {
  color: #4A1F91;
  background-color: transparent; /* Remove the gray background on hover */
}

.nav-link.active {
  color: #fff;
  background-color: #4A1F91;
}

/* Styling for the active link indicator */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0%;
  height: 3px;
  background-color: #4A1F91;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.auth-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.auth-icons img {
  width: 40px;
  height: 40px;
}

@media (max-width: 768px) {
  nav {
    padding: 0 10px;
  }

  ul {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .logo {
    margin-bottom: 15px;
  }

  .nav-link {
    font-size: 16px;
    padding: 8px 12px;
  }

  /* Add a background to the navbar when it is collapsed on mobile */
  .navbar-collapse {
    background-color: #fff; /* White background when collapsed */
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .nav-link {
    font-size: 14px;
    padding: 6px 10px;
  }

  .nav-icons {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .auth-icons img {
    flex-direction: column;
    align-items: center;
    width: 35px;
    height: 35px;
  }
}
</style>
