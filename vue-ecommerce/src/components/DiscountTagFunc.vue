<script>
  export default {
    functional: true,
    render: function (h, context) {
      // console.log('renderizando discount-tag', context.props.discount);
      const discount = context.props.discount;
      return discount ? h(
        'div',
        {'class': 'discount-tag ' + context.data.staticClass},
        (context.props.discount * 100) + '%',
      ) : undefined;
    },
    props: {
      discount: Number,
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  .discount-tag {
    transform: rotate(30deg);

    background: green;
    color: white;
    padding: 0 10px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
