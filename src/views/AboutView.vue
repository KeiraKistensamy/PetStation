<template>
  <!-- Header Section -->
  <div class="header">
  <h1 class="heading text-center">About Us</h1>
  </div>
  <h2 class="gandi text-center">
    “The greatness of a nation and its moral progress can be judged by the way
    its animals are treated.” – Mahatma Gandhi.
  </h2>

  <!-- About Us Section -->
  <div class="about-section">
    <div class="row justify-content-center">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <p class="text">
          Welcome to our shop, where we bring joy to every tail wag with the
          finest selection of pet clothes, toys, and shoes for dogs. We pride
          ourselves on offering the highest quality products designed to keep
          your furry friend comfortable, stylish, and entertained. Whether
          you're looking for trendy outfits that make a statement, durable toys
          that stand up to endless playtime, or cozy shoes that protect paws on
          every adventure, we have something for every dog.
        </p>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <p class="text">
          Our commitment to quality ensures that each item in our store is not
          only fashionable but also functional, making your dog's well-being our
          top priority. We carefully curate each product with attention to
          detail, ensuring that your furry friend stays safe, happy, and
          comfortable in everything we offer. From the softest fabrics to the
          sturdiest materials, we stand behind the craftsmanship of our items.
        </p>
      </div>
    </div>

    <router-link class="d-flex justify-content-center mt-4" to="/products">
      <button class="btn custom-btn">Shop our products</button>
    </router-link>
  </div>

  <div class="row">
    <div class="col-md-6">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/pretty.jpg" width="400px" height="400px" style="border-radius: 20px; border: 2px solid black; margin-bottom: 50px;">
    </div>
    <div class="aboutme col-md-6">
      <p>
        Hi! I am Keira Kistensamy, founder of <span>PetStation!</span>. As a lifelong animal lover and proud dog parent, I’ve always been passionate about ensuring that our furry friends receive the best care and comfort possible. After struggling to find stylish, high-quality, and functional clothing and accessories for my own dogs, I realized there was a need for a place where pet owners could find products that blend fashion with practicality. That's why I started PetStation— a store dedicated to offering a curated selection of dog clothes, toys, and accessories that are not only fun and fashionable but also designed to make life more comfortable and joyful for pets and their owners. Whether it's a trendy outfit or a durable toy, everything we offer is chosen with your dog's well-being in mind.
      </p>
    </div>
  </div>
</template>

<style scoped>
.heading {
  font-family: "Irish Grover", system-ui;
}

/* Header Styling */
.header {
  background-image: url("https://keirakistensamy.github.io/capstoneImg/images/pexels-photo-15265063.webp");
  color: white;
  text-align: center;
  padding: 100px 20px;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 50vh;
  font-size: 36px;
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.aboutme {
  font-size: 1.2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-bottom: 20px;
}

span{
  font-family: "Irish Grover", system-ui;
  color: #4A1F91;
}

.header h1 {
  position: relative;
  font-family: "Irish Grover", system-ui;
  font-size: 50px;
  z-index: 2;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

/* About Us Section Styling */
.about-section {
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  padding: 20px;
}

.gandi {
  margin-top: 50px;
  padding: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 700;
}

/* Text column styling */
.text {
  max-width: 500px; /* Limits the width of the text */
  text-align: center; /* Center-aligns the text */
  margin: 0 auto; /* Ensures the text is centered inside the column */
}

.col-md-6 {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Custom Button Styling */
.custom-btn {
  background-color: #8b5e3c;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-btn:hover {
  background-color: #6f4f28;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .text {
    width: 100%; /* Make the text span full width on smaller screens */
  }
}
</style>
