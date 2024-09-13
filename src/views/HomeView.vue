<template>
  <div class="background-container"></div>
  <h1 class="heading text-center">Welcome to PetStation</h1>
  <p class="text text-center">
    Welcome to PetStation, both pups and people! We’re one of Cape Town's
    leading pet fashion and accessories brands, specializing in stylish dog
    clothing, designer collars, and cozy bedding. Our collection includes dog
    jerseys, sweaters and costumes along with fashionable
    accessories like collars for your furry friends. 
    
    Our products are available instore and online. By visiting our 
    stockists, you can receive expert advice in person, try out the products,
    and save on delivery costs. Contact us to find the perfect fit for your fur
    baby . Browse our unique product range designed to make tails wag!
  </p>
  <router-link class="d-flex justify-content-center" to="/products">
    <button class="btn btn-success">Go to products →</button>
  </router-link>

<div class="gallery-container">
  <div class="gallery">
    <div class="gallery-item">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/blue.webp" alt="Blue Sofa">
      <div class="overlay">
        <router-link to="/products" class="shop-now-btn">View Collection</router-link>
      </div>
    </div>
    <div class="gallery-item">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/happy.webp" alt="Wooden Cabinet" class="woody">
      <div class="overlay">
        <router-link to="/products" class="shop-now-btn">View Collection</router-link>
      </div>
    </div>
    <div class="gallery-item">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/green.webp" alt="Pendant Light">
      <div class="overlay">
        <router-link  to="/products" class="shop-now-btn">View Collection</router-link>
      </div>
    </div>
    <div class="gallery-item">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/images (2).jpg" alt="Shelf Decor">
      <div class="overlay">
        <router-link to="/products" class="shop-now-btn">View Collection</router-link>
      </div>
    </div>
  </div>
</div>

<div class="fixed-image-section">

</div>

<div class="row text-center">
  <h3 class="class text-center pt-5">What we sell:</h3>
  
  <div class="selling col-md-4">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/dogbed.webp" alt="Dog Bed" width="200px" height="200px">
    <p>Dog Beds</p>
  </div>
  
  <div class="selling col-md-4">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/download.jpg" alt="Leash and Collars" width="200px" height="200px">
    <p>Leash and Collars</p>
  </div>
  
  <div class="selling col-md-4">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/leather.webp" alt="Dog Clothes" width="200px" height="200px">
    <p>Various Dog Clothes</p>
  </div>
</div>


<div class="row text-center">
  <h3 class="class text-center pt-5">What else can we do for you?</h3>
  
  <div class="selling col-md-4 pt-5 ">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/sizes.jpg" alt="Dog Bed" width="200px" height="200px">
        <router-link to="/sizeguide"><p>Size guide</p></router-link>
  </div>
  
  <div class="selling col-md-4 pt-5 ">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/exchangess.jpg" alt="Leash and Collars" width="200px" height="200px">
    <router-link to="/exchanges"><p>Exchanges</p></router-link>  </div>
  
  <div class="selling col-md-4 pt-5 ">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/contact.jpg" alt="Dog Clothes" width="200px" height="200px">
    <router-link to="/contactus"><p>Contact us</p></router-link>
  </div>
</div>

</template>

<script>
export default {
  name: "BackgroundComponent",
};
</script>

<style scoped>

.heading {
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
}

.fixed-image-section {
    background-image: url("https://keirakistensamy.github.io/capstoneImg/images/pexels-photo-19908684.webp"); /* Replace with your image */
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 60vh;
    position: relative;
}

.background-container {
  padding-top: 70px;
  height: 100%;
  width: 100%;
  background-image: url("https://keirakistensamy.github.io/capstoneImg/images/sandy.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 60vh;
  position: relative;
}

.text {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 1%;
}

.class {
    font-family: "Irish Grover", system-ui;
    font-weight: 400;
    font-style: normal;
}

.selling img {
  display: block;
  margin: 0 auto;
}

.selling p {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.row {
  margin: 0 auto;
  max-width: 1200px;
}

.text-center {
  text-align: center;
}

@keyframes headingAnimation {
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.heading {
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  animation: headingAnimation 1s ease-out;
}


@media (max-width: 768px) {
  .selling {
    margin-bottom: 20px;
  }
}
.gallery-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 5px; 
  max-width: 1000px;
}
.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.gallery-item:hover img {
  transform: scale(1.1);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
.gallery-item:hover .overlay {
  opacity: 1;
}
.overlay h3 {
  margin: 0;
  font-size: 20px;
}
.overlay p {
  font-size: 14px;
  margin-bottom: 20px;
}
.overlay button {
  padding: 10px 20px;
  background-color: #FF9900;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
.overlay button:hover {
  background-color: #E88B00;
}

.gallery-item:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
.gallery-item:nth-child(2) {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.gallery-item:nth-child(3) {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.gallery-item:nth-child(4) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
.gallery-item:nth-child(5) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
.gallery-item:nth-child(6) {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}



/* Responsiveness for smaller screens */
@media (max-width: 768px) {
  .carousel-item img {
    width: 100%;
    height: auto;
  }
}
/* Additional media query for screens 300px or narrower */
@media (max-width: 300px) {
  .gallery {
    grid-template-columns: 1fr; /* Display single column for gallery items */
    grid-template-rows: auto;
  }

  .gallery-item {
    height: auto; /* Allow gallery items to resize automatically */
  }

  .gallery-item img {
    width: 100%;  /* Ensure the image takes up full width of the container */
    height: auto; /* Keep the aspect ratio of the image */
  }

  .selling img {
    width: 100px; /* Reduce size of images */
    height: 100px;
  }

  .text {
    padding-left: 5%;
    padding-right: 5%; /* Reduce padding to fit content on smaller screens */
  }

  .heading {
    font-size: 30px; /* Reduce heading size for smaller screens */
  }

  .background-container,
  .fixed-image-section {
    height: 40vh; /* Reduce background container height */
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }
}

</style>
