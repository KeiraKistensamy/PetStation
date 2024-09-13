<template>
  <div class="size-guide-container">
    <h1>Dog Clothes Size Guide</h1>
    <p class="description">Choosing the right size for your dog ensures a comfortable and perfect fit. Use the measurements below to find the best size for your pet.</p>
    <table class="size-guide-table">
      <thead>
        <tr>
          <th>Size</th>
          <th>Neck Girth</th>
          <th>Chest Girth</th>
          <th>Back Length</th>
          <th>Recommended Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XS</td>
          <td>8-10 in (20-25 cm)</td>
          <td>12-14 in (30-35 cm)</td>
          <td>8 in (20 cm)</td>
          <td>2-5 lbs (1-2 kg)</td>
        </tr>
        <tr>
          <td>S</td>
          <td>10-12 in (25-30 cm)</td>
          <td>14-16 in (35-40 cm)</td>
          <td>10 in (25 cm)</td>
          <td>5-10 lbs (2-4.5 kg)</td>
        </tr>
        <tr>
          <td>M</td>
          <td>12-14 in (30-35 cm)</td>
          <td>16-18 in (40-45 cm)</td>
          <td>12 in (30 cm)</td>
          <td>10-20 lbs (4.5-9 kg)</td>
        </tr>
        <tr>
          <td>L</td>
          <td>14-16 in (35-40 cm)</td>
          <td>18-20 in (45-50 cm)</td>
          <td>14 in (35 cm)</td>
          <td>20-40 lbs (9-18 kg)</td>
        </tr>
        <tr>
          <td>XL</td>
          <td>16-18 in (40-45 cm)</td>
          <td>20-22 in (50-55 cm)</td>
          <td>16 in (40 cm)</td>
          <td>40-60 lbs (18-27 kg)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SizeGuide'
}
</script>

<style scoped>
.size-guide-container {
  padding: 40px;
  max-width: 800px;
  margin: auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  text-align: center;
}

.size-guide-table {
  width: 100%;
  border-collapse: collapse;
}

.size-guide-table th,
.size-guide-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

.size-guide-table th {
  background-color: #4A1F91;
  color: white;
  font-size: 1.2rem;
}

.size-guide-table td {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .size-guide-table {
    font-size: 0.9rem;
  }
}
</style>
