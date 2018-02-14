<template>
  <span>{{trace(formattedPrice)}}</span>
</template>

<script>
  export default {
    props: {
      price: Number,
    },
    computed: {
      formattedPrice() {
        return this.price.toLocaleString('es-ES', {style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'});
      },
    },
    methods: {
      trace(s) {
        console.log('rendering price', s);
        return s;
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
</style>
