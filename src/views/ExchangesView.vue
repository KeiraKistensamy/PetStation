<template>
  <div class="exchange-policy-container">
    <h1>Exchange Policy for PetStation</h1>
    <div class="policy-content">
      <p class="intro">We want you to be completely satisfied with your purchase from Pet Station! If for any reason you are not happy with your dog clothes, you may be eligible to exchange them according to the following policy:</p>
      
      <h2>Eligibility for Exchange</h2>
      <ul>
        <li>Items must be returned within 30 days of the purchase date.</li>
        <li>The item must be in its original condition, unused, and with all tags attached.</li>
        <li>Proof of purchase (receipt or order number) is required for all exchanges.</li>
      </ul>

      <h2>How to Request an Exchange</h2>
      <ol>
        <li>Contact our customer service team via email or by calling us at 063 941 4716.</li>
        <li>Provide your order number, the item you wish to exchange, and the reason for the exchange.</li>
        <li>Our team will provide you with instructions on how to return the item.</li>
      </ol>

      <h2>Conditions for Exchange</h2>
      <ul>
        <li>Exchanges are only possible for items of equal or lesser value. If you want to exchange for a higher value item, you will need to pay the difference.</li>
        <li>Shipping costs for exchanges are the responsibility of the customer, unless the exchange is due to a defect or error on our part.</li>
        <li>We reserve the right to refuse exchanges if the returned item does not meet our policy requirements.</li>
      </ul>

      <h2>Contact Us</h2>
      <p>If you have any questions or need further assistance with our exchange policy, please do not hesitate to contact us at PetStation123@gmail.com or call us at 063 941 4716.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExchangePolicy'
}
</script>

<style scoped>
.exchange-policy-container {
  padding: 40px;
  max-width: 900px;
  margin: auto;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.policy-content {
  line-height: 1.6;
  color: #333;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #555;
}

h1 {
  font-size: 2.5rem;
  color: #4A1F91;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-weight: 600;
}

h2 {
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #333;
  margin-top: 20px;
  margin-bottom: 15px;
  border-bottom: 2px solid #4A1F91;
  padding-bottom: 5px;
}

ul, ol {
  margin-left: 20px;
  margin-bottom: 20px;
}

ul li, ol li {
  margin-bottom: 10px;
}

a {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}
</style>
