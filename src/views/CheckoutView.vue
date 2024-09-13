<template>
  <div class="checkout">
    <div class="checkout-banner">
      <h1 class="title text-center">Checkout</h1>
    </div>
    <div class="order-summary">
      <h2 class="title text-center">Order Summary</h2>
      <div class="order-items">
        <div v-if="cart?.length">
          <div v-for="item in groupedCart" :key="item.productID" class="order-item">
            <img :src="item.productURL" class="item-image" :alt="item.productName" />
            <div class="item-details">
              <h3>{{ item.productName }}</h3>
              <p>Price: R{{ item.productPrice }}</p>
              <p>Quantity: {{ item.productQuantity }}</p>
            </div>
          </div>
          <div class="order-total">
            <h3>Total: R{{ totalAmount }}</h3>
          </div>
          <button class="btn-submit" @click="handlePurchase">Purchase</button>
        </div>
        <p v-else>Your cart is empty.</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { toast } from 'vue3-toastify'

const store = useStore();
const cart = computed(() => store.state.cart);
const groupedCart = computed(() => {
const grouped = cart.value.reduce((acc, item) => {
const found = acc.find(i => i.productID === item.productID);
    if (found) {
      found.productQuantity += 1;
    } else {
      acc.push({ ...item, productQuantity: 1 });
    }
    return acc;
  }, []);
  return grouped;
});

const totalAmount = computed(() => {
  return groupedCart.value.reduce((sum, item) => sum + (item.productPrice * item.productQuantity), 0);
});

const handlePurchase = async () => {
  try {
    await store.dispatch('purchaseCart');
    toast.success('Successfully paid!', {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
    store.commit('setCart', []);
  } catch (error) {
    toast.error(`Payment failed: ${error.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
};

onMounted(() => {
  store.dispatch('fetchCart');
});
</script>

  
  <style scoped>
  .checkout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 20px;
    color: #000;
    margin-top: 30px;
  }
  
  .checkout-banner h1 {
    font-size: 36px;
    margin-bottom: 10px;
    font-family: "Irish Grover", system-ui;
    font-weight: 400;
    font-style: normal;
  }
  
  .order-summary, .payment-details {
    background-color: #fff;
    border: 1px solid #c0c0c0; 
    padding: 30px;
    margin: 20px 0;
    border-radius: 8px;
  }
  
  .order-summary h2, .payment-details h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .order-items {
    display: flex;
    flex-direction: column;
  }
  
  .order-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .order-item img {
    height: 100px;
    margin-right: 20px;
  }
  
  .item-details p {
    margin: 0;
  }
  
  .order-total {
    margin-top: 20px;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .form-group input:focus {
    outline: none;
    border-color: #f9e5e8; 
  }
  .btn-submit {
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  float: right;
  width: 30%;
  margin-top: 20px;
}

.btn-submit:hover {
  background-color: #80535a; /* Baby pink hover */
}
  
  @media (max-width: 768px) {
    .checkout-page {
      padding: 20px;
    }
  
    .checkout-banner h1 {
      font-size: 28px;
    }
  
    .checkout-banner p {
      font-size: 16px;
    }
  
    .order-item {
      flex-direction: column;
      text-align: center;
    }
  
    .order-total {
      text-align: center;
    }
  }
  </style>