<template>
  <div class="product-container">
    <router-link to="/products">
      <button class="back-button">← Go Back</button>
    </router-link>
    <div v-if="product" class="product-details">
      <h1 class="product-title">{{ product?.productName }}</h1>
      <div class="product-card-container">
        <img :src="product.productURL" :alt="product.productName" class="card-image">
        <div class="card-content">
          <p class="card-info">Description: <span>{{ product.productDescription }}</span></p>
          <p class="card-info">Category: <span>{{ product.productCategory }}</span></p>
          <p class="card-info">Available Sizes: <span>{{ product.productSize }}</span></p>
          <p class="card-info">Price: <span>R{{ product.productPrice }}</span></p>
          <div class="button-container">
          </div>
        </div>
      </div>
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Spinner
  },
  computed: {
    product() {
      return this.$store.state.product; 
    }
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.id);
    window.scrollTo(0, 0); // Reset scroll position
  }
}
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center items vertically */
  padding: 30px;
  margin: 20px auto;
  width: 100%;
  height: calc(100vh - 60px); /* Full viewport height minus navbar height */
  font-family: 'Poppins', sans-serif;
}

.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center items vertically */
  max-width: 800px; /* Maximum width for larger screens */
  width: 100%;
}

.back-button {
  background-color: rgb(124, 38, 120);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 3px 6px rgba(255, 111, 97, 0.3);
  margin-bottom: 20px; /* Add margin for spacing */
}

.back-button:hover {
  background-color: rgb(228, 172, 225);
  transform: scale(1.05);
}

.product-title {
  font-size: 2.5rem;
  color: #000000;
  text-align: center;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgb(228, 172, 225);
}

.product-card-container {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.card-image {
  width: 100%;
  max-width: 300px; /* Adjust max width as needed */
  height: auto;
  border-radius: 15px;
  object-fit: cover;
}

.card-content {
  flex: 1;
  text-align: left;
  color: #333;
  font-size: 1.1rem;
}

.card-info {
  font-size: 1.5rem;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
}

span {
  color: rgb(228, 172, 225);
}

.card-quantity,
.card-amount {
  margin: 10px 0;
}

.card-quantity span,
.card-amount span {
  color: #ff6f61;
  font-weight: bold;
}

.button-container {
  margin-top: 20px;
}

@media only screen and (max-width: 600px) {
  .product-container {
    padding: 20px;
  }

  .product-title {
    font-size: 2rem;
  }

  .card-image {
    max-width: 100%;
  }

  .card-content {
    font-size: 1rem;
  }

  .back-button {
    padding: 8px 16px;
    font-size: 1rem;
  }

  .product-card-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
