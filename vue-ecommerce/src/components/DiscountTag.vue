<template>
  <div class="discount-tag" v-if="discount !== 0">{{trace(discount * 100)}}%</div>
</template>

<script>
  export default {
    props: {
      discount: Number,
    },
    methods: {
      trace(s) {
        console.log('rendering discount-tag', s);
        return s;
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  .discount-tag {
    transform: rotate(30deg);

    background: red;
    color: white;
    padding: 0 10px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
