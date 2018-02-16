<template>
  <div class="product-card">
    <div class="description">
      <div class="name">{{trace(product.name)}}</div>
      <div class="brand">{{product.brand}}</div>
      <div class="price--original" v-if="isDiscounted">
        <price :price="product.price"/>
      </div>
      <div class="price">
        <price :price='finalPrice'/>
      </div>
      <button class="nice-button" @click="addToCart(product)">Add to Cart</button>
    </div>
    <div class="img">
      <discount-tag class="discount" :discount="product.discount"/>
      <img v-if="product.img" :src="product.img" :alt="product.name">
    </div>
  </div>
</template>

<script>
  import Price from './Price';
  import DiscountTagFunc from './DiscountTagFunc';
  import DiscountTagJSX from './DiscountTagJSX';
  import DiscountTag from './DiscountTag';

  export default {
    props: {
      product: Object,
      additionalDiscount: Number,
    },
    data() {
      return {};
    },
    computed: {
      isDiscounted() {
        return this.product.discount !== 0 || this.additionalDiscount !== 0;
      },
      finalPrice() {
        return this.product.price * (1 - this.effectiveDiscount);
      },
      effectiveDiscount() {
        return this.product.discount + this.additionalDiscount;
      },
    },
    methods: {
      trace(s) {
        console.log('rendering product-card', s);
        return s;
      },
      addToCart(product) {
        alert(`added ${product.name}`);
      },
    },
    components: {
      Price,
      DiscountTag: DiscountTag,
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  .product-card {
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin: 12px;
    padding: 6px;
    background: white;
    border: 1px solid #888;
    transition: box-shadow ease-in-out 0.1s;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .description {
      display: inline-block;
      vertical-align: top;
      width: 150px;
    }

    .img {
      position: relative;
      display: inline-block;
      width: 170px;
      height: 170px;
      background-color: white;
    }

    .discount {
      position: absolute;
      right: 0px;
    }

    .name {
      font-weight: bold;
    }
    .brand {

    }
    .price {
      &--original {
        text-decoration: line-through;
        color: gray;
      }
    }

    .nice-button {
      position: absolute;
      bottom: 0;
      margin: 5px 0;
      background: #11227d;
      color: white;
      padding: 5px 10px;
      font-weight: bold;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        background-color: #f5630b;
      }
      border: 1px solid white;
      border-radius: 10px;
    }
  }
</style>
