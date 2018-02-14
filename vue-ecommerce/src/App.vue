<template>
  <div id="app">
    <h1>Products</h1>
    <div>
      Overall Discount: <input type="number" min="0" max="100" step=5 v-model="overallDiscount"/> %
    </div>
    <div class="products">
      <product-card
        v-for="product in products"
        :product="product"
        :overall-discount="overallDiscount / 100"
        :key="product.name"
      />
    </div>
  </div>
</template>

<script>
  import ProductCard from './components/ProductCard';

  export default {
    name: 'app',
    data() {
      return {
        overallDiscount: 0,
        products: [
          {name: 'XMax X10 2018', brand: 'Salomon', price: 720.0, discount: 0, img: 'statics/ski-atomic-rojo.png' },
          {name: 'Magnum', brand: 'Head', price: 650.0, discount: 0.2, img:'statics/ski-head-verde.png'},
          {name: 'Amphibio XII', brand: 'Elan', price: 1250.0, discount: 0.15, img:'statics/ski-elan-amphibio.png'},
          {name: 'Vector Edge', brand: 'Salomon', price: 350.0, discount: 0.50, img:'statics/bota-salomon-amarillo.png'},
          {name: 'Fogbreaker', brand: 'CrazyCreek', price: 35.0, discount: 0.0, img:'statics/gafas-verde.png'},
        ],
      };
    },
    components: {
      ProductCard,
    },
  };
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 60px auto;
    padding: 20px;
    max-width: 1200px;
    background: #eee;
    border-right: 20px solid #39af78;
  }

  h1 {
    padding: 0;
    margin: 10px 0;
  }

  input {
    font-size: 14px;
  }

  .products {
    margin: 10px -12px;
  }

  a {
    color: #42b983;
  }
</style>
