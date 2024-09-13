<template>
  <div class="admin">
    <div class="title">Our Dashboard</div>

    <!-- Dropdown for Users and Products -->
    <div class="dropdown-container">
      <label for="viewSelector">View: </label>
      <select v-model="selectedView" id="viewSelector" class="dropdown-select">
        <option value="products">Products</option>
        <option value="users">Users</option>
        <option value="carts">Cart</option>
      </select>
    </div>

    <!-- Products Table -->
    <div v-if="selectedView === 'products' && products?.length">
<!-- Button to open Add Product modal -->
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#addProductModal"
>
  Add product
</button>

<!-- Modal for Adding Product -->
<div
  class="modal fade"
  id="addProductModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="newproductName" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="newproductName" v-model="payload.productName" required/>
          </div>
          <div class="mb-3">
            <label for="newproductDescription" class="form-label">Product Description</label>
            <textarea class="form-control" id="newproductDescription" v-model="payload.productDescription" required
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="newproductPrice" class="form-label">Price</label>
            <input type="number" class="form-control" id="newproductPrice" v-model="payload.productPrice" required/>
          </div>
          <div class="mb-3">
            <label for="newproductURL" class="form-label">Image URL</label>
            <input type="url" class="form-control" id="newproductURL" v-model="payload.productURL" required/>
          </div>
          <div class="mb-3">
            <label for="newproductQuantity" class="form-label">Quantity</label>
            <input type="number" class="form-control" id="newproductQuantity" v-model="payload.quantity" required/>
          </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click.prevent="addProduct">Add</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="head">Image</th>
            <th scope="col" class="head">Product ID</th>
            <th scope="col" class="head">Product Name</th>
            <th scope="col" class="head">Description</th>
            <th scope="col" class="head">Price</th>
            <th scope="col" class="head">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>
              <img :src="product.productURL" :alt="product.productName" class="item-image"/>
            </td>
            <td>{{ product.productID }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.productDescription }}</td>
            <td>R{{ product.productPrice }}</td>
            <td class="hello">
              <button
                type="button"
                @click="updateProduct(product.product_id)"
                class="btn btn-primary"
                data-bs-toggle="modal"
                :data-bs-target="'#modal-product-' + index"
              >
              <img src="https://keirakistensamy.github.io/capstoneImg/images/edit.png" width="25px" height="25px">
              </button>

              <button
                class="btn"
                @click="deleteProduct(product.productID)"
              ><img src="https://keirakistensamy.github.io/capstoneImg/images/binIcon.png" width="25px" height="25px"></button>

              <!-- Modal for Edit Product-->
<div
  class="modal fade"
  :id="'modal-product-' + index"
  tabindex="-1"
  aria-labelledby="productModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="productModalLabel" @click="openEditModal">Edit Product</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="productName" class="form-label">Product Name</label>
            <input
              type="text"
              class="form-control"
              id="productName"
              v-model="product.productName"
            />
          </div>
          <div class="mb-3">
            <label for="productDescription" class="form-label">Product Description</label>
            <textarea
              class="form-control"
              id="productDescription"
              v-model="product.productDescription"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="productAmount" class="form-label">Price</label>
            <input
              type="number"
              class="form-control"
              id="productAmount"
              v-model="product.productPrice"
            />
          </div>
          <div class="mb-3">
            <label for="productImageUrl" class="form-label">Image URL</label>
            <input
              type="url"
              class="form-control"
              id="productImageUrl"
              v-model="product.productURL"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="editProduct"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
              <!-- End of Modal -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Users Table -->
    <div v-else-if="selectedView === 'users' && users?.length">
      <div
        class="modal fade"
        id="addProductModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="newfirstname" class="form-label"
                    >Firstname:</label
                  >
                  <textarea
                    class="form-control"
                    id="newfirstname"
                    v-model="payload.firstname"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="newlastName" class="form-label">Lastname:</label>
                  <textarea
                    class="form-control"
                    id="newlastName"
                    v-model="payload.lastName"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="newuserAge" class="form-label">Age:</label>
                  <textarea
                    class="form-control"
                    id="newuserAge"
                    v-model="payload.userAge"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="newemail" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="newemail"
                    v-model="payload.email"
                  />
                </div>
                <div class="mb-3">
                  <label for="newpassword" class="form-label">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    id="newpassword"
                    v-model="payload.password"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="addUser"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="head">User ID</th>
            <th scope="col" class="head">First Name</th>
            <th scope="col" class="head">Last Name</th>
            <th scope="col" class="head">Age</th>
            <th scope="col" class="head">Email</th>
            <th scope="col" class="password head">Password</th>
            <th scope="col" class="role head">User Role</th>
            <th scope="col" class="head">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.emailAdd }}</td>
            <td class="password">{{ user.password }}</td>
            <td>{{ user.userRole }}</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                :data-bs-target="'#modal-user-' + index"
              >
                Edit
              </button>
              <button class="btn btn-danger">Delete</button>

              <!-- Modal for edit user-->
              <div
                class="modal fade"
                :id="'modal-user-' + index"
                tabindex="-1"
                aria-labelledby="userModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="title" id="userModalLabel">Edit User</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label for="firstName" class="form-label"
                            >First Name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            v-model="user.firstName"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="lastName" class="form-label"
                            >Last Name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            v-model="user.lastName"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="userAge" class="form-label">Age</label>
                          <input
                            type="number"
                            class="form-control"
                            id="userAge"
                            v-model="user.userAge"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            v-model="user.email"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="password" class="form-label"
                            >Password</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                            v-model="user.password"
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn" data-bs-dismiss="modal">
                        Save changes
                      </button>
                      <!-- <button type="button" class="btn">Save changes</button> -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- End of Modal -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Carts Table -->
    <div v-if="selectedView === 'carts'">
      {{ carts }}
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="head">cartID</th>
            <th scope="col" class="head">userID</th>
            <th scope="col" class="head">productID</th>
            <th scope="col" class="head">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in carts" :key="index">
            <td>{{ cart.cartID }}</td>
            <td>{{ cart.userID }}</td>
            <td>{{ cart.productID }}</td>
            <td>{{ cart.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Spinner v-if="!products?.length && !users?.length && !carts?.length" />
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    // Initialize Vuex store and router
    const store = useStore();
    // const router = useRouter();
    const { cookies } = useCookies();

    // Ref to track the selected view
    const selectedView = ref("products");

    // Product form payload
    const payload = ref({
      productName: "",
      productDescription: "",
      productPrice: "",
      productURL: "",
      quantity: ""
    });

    // Computed properties to fetch products, users, and carts from the store
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);
    const carts = computed(() => store.state.carts);

    // Load data when the component mounts
    onMounted(() => {
      store.dispatch("fetchProducts");
      store.dispatch("fetchUsers");
      store.dispatch("fetchCart");
    });

    // Adding a product function
    function addProduct() {
      if (
        !payload.value.productName ||
        !payload.value.productDescription ||
        !payload.value.productPrice ||
        !payload.value.productURL ||
        !payload.value.quantity
      ) {
        alert("Please fill all fields");
        return;
      }
      // Dispatch an action to add the product (assumes an action exists)
      store.dispatch("addProduct", payload.value).then(() => {
        // Reset payload after product addition
        payload.value = {
          productName: "",
          productDescription: "",
          productPrice: "",
          productURL: "",
          quantity: ""
        };
      });
    }

    // State and functions for updating products
    const product = ref({
      productID: "",
      productName: "",
      productDescription: "",
      productPrice: "",
      productURL: ""
    });

    function openEditModal(productID) {
      const prod = products.value.find(p => p.productID === productID);
      if (prod) {
        product.value = { ...prod };
      }
    }

    function editProduct() {
      store
        .dispatch("updateProduct", {
          productID: product.value.productID,
          productData: {
            productName: product.value.productName,
            productDescription: product.value.productDescription,
            productPrice: product.value.productPrice,
            productURL: product.value.productURL
          }
        })
        .then(() => {
          // Reset product data after editing
          product.value = {
            productID: "",
            productName: "",
            productDescription: "",
            productPrice: "",
            productURL: ""
          };
        });
    }

    // Deleting a product function
    function deleteProduct(id) {
      store.dispatch("deleteProduct", id).then(() => {
        console.log("Product deleted:", id);
      });
    }

    // Computed property to fetch the user and check admin status
    const user = computed(() => store.state.user || cookies.get('LegitUser')?.result);

    const isAdmin = computed(() => user.value && user.value.role === "admin");

    // Fetch user data on mount
    onMounted(() => {
      if (user.value) {
        store.dispatch("fetchUser", user.value.userID);
      }
    });

    // Return all reactive properties and methods for use in the template
    return {
      selectedView,
      payload,
      products,
      users,
      carts,
      product,
      user,
      isAdmin,
      addProduct,
      openEditModal,
      editProduct,
      deleteProduct
    };
  },
  components: {
    Spinner
  }
};
</script>

<style scoped>
.admin {
  font-family: "Arial", sans-serif;
  color: #333;
  padding: 2rem;
  position: relative;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 36px;
}

.dropdown-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.password {
  max-width: 9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-select {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.2);
}

.table th,
.table td {
  padding: 10px;
  text-align: left;
  vertical-align: middle;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.table img.item-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
}

.head {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.btn {
  font-size: 0.9rem;
  padding: 5px 10px;
}

.modal-body {
  padding: 20px;
  background-color: #ebcbcb;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

/* Input focus effect */
.form-control:focus {
  border-color: #007bff;
  outline: none;
}

/* MEDIA QUERIES */

@media (max-width: 768px) {
  .title {
    font-size: 40px;
  }

  .dropdown-select {
    font-size: 0.9rem;
    padding: 8px;
  }

  .table th,
  .table td {
    padding: 8px;
    font-size: 0.9rem;
  }

  .table img.item-image {
    width: 80px;
  }

  .btn {
    padding: 5px;
    font-size: 0.8rem;
  }

  .modal-body {
    padding: 10px;
  }

  .form-group label,
  .form-control {
    font-size: 0.9rem;
  }

  .display-2 {
    font-size: 1.5rem;
  }
  table th,
  table td {
    font-size: 0.875rem;
    padding: 0.5rem;
  }
  .purchaseButton {
    width: 100%;
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {
  .navbar-brand img {
    width: 120px;
  }
  .table th,
  .table td {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  .table th {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
  .table td {
    border: none;
    position: relative;
    padding-left: 0;
    text-align: center;
  }
  .table td:before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 1rem;
    font-weight: bold;
    text-align: center;
  }
}

@media screen and (max-width: 360px) {
  #btn-success {
    width: 200px;
    margin-left: -70px;
  }
  #input {
    width: 200px;
    margin-left: -37px;
  }
  .display-2 {
    font-size: 1rem;
  }
  table th,
  table td {
    font-size: 0.5rem;
    padding: 0.25rem;
  }
  .purchaseButton {
    width: 100%;
    margin-top: 0.5rem;
  }
  h2 {
    font-size: 4rem;
  }
  .icon i {
    font-size: 20px;
  }
  .about-para {
    width: 100%;
    font-size: 1rem;
  }

  .ptag {
    font-size: 20px;
    width: 200px;
    padding: 0px 0px;
  }

  .product-wrapper {
    display: flex;
    flex-direction: column;
  }
  .iconss {
    font-size: 10px;
  }
  .text-center {
    font-size: 15px;
    width: 200px;
  }
  #text-center {
    width: 225px !important;
    margin-left: 40px;
  }
}
</style>
