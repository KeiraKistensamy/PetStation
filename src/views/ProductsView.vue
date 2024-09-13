<template>
  <div class="container-fluid">
    <!-- Filters Section -->
    <div class="row justify-content-center filters-container mt-4">
      <div class="col-12 filters">
        <div
          class="filters-header d-flex align-items-center justify-content-between"
        >
          <!-- Search Bar -->
          <form
            @submit.prevent="handleSearch"
            class="d-flex align-items-center search-form"
          >
            <input
              type="text"
              id="search-bar"
              name="search-bar"
              v-model="searchQuery"
              class="form-control search-bar"
              placeholder="Search products..."
            />
            <button type="submit" class="btn btn-link p-0 ml-2">
              <img
                src="https://keirakistensamy.github.io/capstoneImg/images/search.png"
                alt="Search Icon"
                style="width: 20px; height: 20px; margin-left: 10px"
              />
            </button>
          </form>

          <!-- Name Filter Dropdown -->

          <div class="ml-4">
            <label for="nameSortDropdown">Sort by Name:</label>
            <select
              id="nameSortDropdown"
              v-model="nameFilter"
              class="form-control"
            >
              <option value="">Default</option>
              <!-- No sorting -->
              <option value="asc">A to Z</option>
              <option value="desc">Z to A</option>
            </select>
          </div>

          <!-- Category Filter Dropdown -->
          <div class="ml-4">
            <label for="categoryFilterDropdown">Filter by Category:</label>
            <select
              id="categoryFilterDropdown"
              v-model="selectedCategory"
              class="form-control"
            >
              <option value="">All</option>
              <!-- Default to show all -->
              <option value="collar">Collar</option>
              <option value="leash">Leash</option>
              <option value="sweater">Sweater</option>
              <option value="jersey">Jersey</option>
              <option value="Dogbed">Dogbed</option>
              <option value="costume">Costume</option>
            </select>
          </div>

          <!-- Price Sorting -->
          <div class="ml-4">
            <label for="priceSortDropdown">Sort by Price:</label>
            <select
              id="priceSortDropdown"
              v-model="priceFilter"
              class="form-control"
            >
              <option value="">None</option>
              <!-- No sorting -->
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
<div class="ml-4"><button @click="resetFilters" class="reset-button" style="background-color: #fff; border: none; padding: 5px 10px; color: blue; margin-top: 30px;">Reset Filters</button></div>        </div>
      </div>
    </div>

    <!-- Product Cards -->

  <div class="row products-container mt-4">
    <h1 class="title">Our Products</h1>
    <div class="col-12">
    </div>
    <div class="row justify-content-center">
      <div v-if="filteredProducts?.length" class="col-md-12">
        <div class="row justify-content-center gap-2">
          <Card
            class="product-card"
            v-for="product in filteredProducts"
            :key="product.productID"
          >
            <template #cardHeader>
              <img
                :src="product.productURL"
                :alt="product.productName"
                class="card-image"
              />
            </template>
            <template #cardBody>
              <div class="card-content">
                <h5 class="card-title">{{ product.productName }}</h5>
                <p class="card-category">{{ product.productCategory }}</p>
                <p class="card-description">{{ product.productDescription }}</p>
                <p class="card-price">Price: {{ product.productPrice }}</p>
                <div class="button-group">
                  <router-link
                    :to="{
                      name: 'singleview',
                      params: { id: product.productID },
                    }"
                  >
                    <button class="card-button">
                      View Details
                    </button>
                  </router-link>
                  <button class="card-button" @click="addProduct(product)">
                    Add to Cart
                  </button>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
      <Spinner v-else />
    </div>
  </div>

  </div>
</template>

<script setup>
import Spinner from "@/components/Spinner.vue";
import Card from "@/components/Card.vue";
import { computed, onMounted, ref } from "vue";
import {useCookies} from 'vue3-cookies'
import { useStore } from "vuex";
const {cookies} = useCookies()

const store = useStore();
const products = computed(() => store.state.products);

// Search query state
const searchQuery = ref("");
// Category filter state (dropdown)
const selectedCategory = ref("");
// Price sorting state
const priceFilter = ref("");
// Name sorting state
const nameFilter = ref("");

// Reset filters method
const resetFilters = () => {
  searchQuery.value = "";        
  selectedCategory.value = "";   
  priceFilter.value = "";        
  nameFilter.value = "";        
};

// Filters
const filteredProducts = computed(() => {
  let filtered = products.value;

  if (searchQuery.value) {
    filtered = filtered.filter(product =>
      product.productName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

if (selectedCategory.value) {
    filtered = filtered.filter(
      product =>
        product.productCategory &&
        product.productCategory.toLowerCase() === selectedCategory.value.toLowerCase()
    );
  }

if (priceFilter.value === "low") {
    filtered = filtered.sort((a, b) => a.productPrice - b.productPrice);
  } else if (priceFilter.value === "high") {
    filtered = filtered.sort((a, b) => b.productPrice - a.productPrice);
  }

  if (nameFilter.value === "asc") {
    filtered = filtered.sort((a, b) => a.productName.localeCompare(b.productName));
  } else if (nameFilter.value === "desc") {
    filtered = filtered.sort((a, b) => b.productName.localeCompare(a.productName));
  }

  return filtered;
});

const handleSearch = () => {
  console.log("Search executed with query:", searchQuery.value);
};

function addProduct(product){
  console.log(product)
  const payload = {
    userID: cookies.get('LegitUser').result.userID,
    productID: product.productID,
    quantity: 0
  }
  console.log(payload)
  store.dispatch('addToCart', payload)
}

onMounted(() => {
  store.dispatch("fetchProducts");
});
</script>

<style scoped>
.container-fluid {
  padding: 20px;
}

.reset-button {
  text-decoration: underline;
  text-decoration-color: blue;
}

.filters-header {
  margin-bottom: 20px;
}

.search-form {
  flex-grow: 1;
}

.search-bar {
  width: 70%;
  color: #4a1f91;
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid #ced4da;
  transition: border-color 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.search-bar:focus {
  border-color: #0c1824;
  outline: none;
  box-shadow: 0 2px 10px rgba(19, 20, 20, 0.3);
}

.price-filter {
  margin-left: 20px;
}

.title {
  font-family: "Irish Grover", system-ui;
  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;
}

.products-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  width: 23%;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-image {
  width: 100%;
  max-height: 150px; 
  object-fit: cover;
  border-radius: 10px;
}

.card-content {
  padding: 10px;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #333;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
}

.card-category,
.card-description,
.card-price {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  margin-bottom: 10px;
  color: #777;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px; 
  margin-top: 10px;
  width: 100%;
}

.card-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 0.875rem; 
}

.card-button:hover {
  background-color: #0056b3;
}

/* Media query for responsiveness */
@media (max-width: 576px) {
  .search-bar {
    width: 100%; /* Make search bar take full width on smaller screens */
  }

  .filters-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .products-container {
    margin-top: 10px;
    gap: 10px;
  }

  .product-card {
    width: 100%; /* Take full width on mobile devices */
    margin: 10px 0;
  }

  .card-title {
    font-size: 1rem; /* Reduce title size for better fit */
  }

  .card-category,
  .card-description,
  .card-price {
    font-size: 0.875rem; /* Reduce text size for better fit */
  }

  .card-button {
    padding: 8px 15px; /* Adjust button padding for smaller screens */
  }

  .title {
    font-size: 30px; /* Reduce title font size for smaller screens */
  }
}

@media (max-width: 350px) {
  .search-bar {
    width: 100%; /* Ensure search bar takes full width */
  }
  .form-control {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
  .reset-button {
    padding: 5px; /* Adjust padding for Reset button */
    font-size: 14px; /* Adjust font size */
  }
}

@media (max-width: 300px) {
  .product-card {
    width: 100%; /* Make sure the card takes the full width on 300px screens */
    margin: 5px 0;
    padding: 5px; /* Reduce padding to fit content better */
  }

  .card-title {
    font-size: 0.9rem; /* Further reduce text size for very small screens */
  }

    .card-image {
    max-height: 100px; /* Adjust image height for very small screens */
  }

  .card-button {
    padding: 6px 12px; /* Smaller padding for very small screens */
    font-size: 0.75rem; /* Even smaller font size */
  }

  .card-category,
  .card-description,
  .card-price {
    font-size: 0.75rem; /* Further reduce text size */
  }

  .card-button {
    padding: 5px 10px; /* Further reduce button padding */
  }
}
</style>