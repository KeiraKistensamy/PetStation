import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { applyToken } from '@/service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
// const apiURL = 'https://petstation-0nz3.onrender.com'
const apiURL = 'http://localhost:3006'

applyToken(cookies.get('legitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    cart: cookies.get('cartItems') || [],
    loading: false,
    redirectIntent: null,
    error: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setRedirectIntent(state, value) {
      state.redirectIntent = value
    },
    setCart(state, value) {
      state.cart = value ;
    },
    ADD_TO_CART(state, value) {
      console.log(value);
      
      // state.cart.push(value);
      cookies.set('cartItems',  JSON.stringify(state.cart))
    },
    REMOVE_FROM_CART(state, productID) {
      state.cart = state.cart.filter(item => item.id !== productID);
    },
    CLEAR_CART(state) {
      state.cart = [];
    }
  },
  actions: {
// products
// fetch all products
async fetchProducts(context) {
  try {
    const { results } = await (await axios.get(`${apiURL}/products`)).data
    const msg = 'ena ooop'
    console.log(results);
    if (results) {
      context.commit('setProducts', results)
    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
},
// fetch a product
async fetchProduct(context, id) {
  try {
    const { result, msg } = await (await axios.get(`${apiURL}/products/${id}`)).data
    if (result) {
      context.commit('setProduct', result)
    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
},

// delete a product
async deleteProduct(context, id) {
  try {
    const { msg } = await (await axios.delete(`${apiURL}/product/${id}`)).data
    if (msg) {
      context.dispatch('fetchProducts')
      toast.success(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
},

// add a product
async addProduct(context, product) {
  try {
  const { data } = await axios.post(`${apiURL}/addProduct`, product);
  const { result, msg } = data;
  
    if (result) {
      toast.success('Product added successfully!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
      // Optionally, refetch the product list after adding the product
      context.dispatch('fetchProducts');
    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  } catch (e) {
    toast.error(`Error: ${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
},

// update a product
async updateProduct(context, payload) {
  try {
    const { data } = await axios.put(`${apiURL}/product/update/${payload.productID}`, payload.productData);
    const { result, msg } = data;
    
    if (result) {
      toast.success('Product updated successfully!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
      // Optionally, refetch the product list after updating the product
      context.dispatch('fetchProducts');
    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  } catch (e) {
    toast.error(`Error: ${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
},

// User(s)
// fetch all users
async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}/users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
},

// fetch a user
async fetchUser(context, id) {
  console.log(id);
  
      try {
        const { result, msg } = await (await axios.get(`${apiURL}/user/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
},

// delete a user
async deleteUser(context, id) {
  try {
    const { data } = await axios.delete(`${apiURL}/user/${id}`);
    const { result, msg } = data;
    if (result) {
      toast.success('User deleted successfully!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  } catch (e) {
    toast.error(`Error: ${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
},

// add a user
async addUser(context, payload) {
  try {
    const { data } = await axios.post(`${apiURL}/users/register`, payload);
    const { token, msg } = data;
    if (token) {
      toast.success('User added successfully!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  } catch (e) {
    toast.error(`Error: ${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
},

// update a user
async updateUser(context, id) {
  try {
    const { data } = await axios.patch(`${apiURL}/user/update/${id}`);
    const { result, msg } = data;
    if (result) {
      context.commit('updateUser', result);
      toast.success('User updated successfully!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  } catch (e) {
    toast.error(`Error: ${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
},

// login a user 
async login(context, payload) {
  try {
    const { msg, result, token } = await (await axios.post(`${apiURL}/users/login`, payload)).data

    if (result) {
      toast.success(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })

      context.commit('setUser', {
        msg,
        result
      })
      cookies.set('LegitUser', { token, msg, result })
      applyToken(token)

      if (context.state.redirectIntent === 'admin' && result.userRole === 'admin') {
        router.push({name: 'admin'});
      } else {
        router.push({ name: 'products' })
      }

      context.commit('setRedirectIntent', null);


    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
},

// CART
//  fetch cart
async fetchCart(context) {
  try {
    const { results } = await (await axios.get(`${apiURL}/carts`)).data;
    
    context.commit('setCart', results);
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
},

// purchase cart
async purchaseCart(context) {
  try {
    const { data } = await axios.post(`${apiURL}/carts/purchase`);
    if (data.success) {
      context.commit('CLEAR_CART');
      toast.success('Purchase successful!', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      throw new Error('Purchase failed');
    }
  } catch (e) {
    toast.error(`Purchase failed: ${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
},

// add to cart
async addToCart({ commit }, payload) {
  // console.log(payload)
  // console.log(commit)

  try {
      // const response = await axios.post(`${apiURL}/cart/addToCart`, {
      //     productID: payload.productID,
      //     userID: state.user.userID
      // });
      const {msg} = await (await axios.post(`${apiURL}/carts/${payload.userID}/cart`, payload)).data;
      if (msg) {      
          // commit('ADD_TO_CART', payload);
          commit('setCart', payload);
          toast.success(msg, {
              autoClose: 2000,
              position: toast.POSITION.BOTTOM_CENTER,
          });
      }
  } catch (e) {
      toast.error(`Failed to add item to cart: ${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
      });
  }
},

},
modules: {
}
},
)