<script>
  export default {
    functional: true,
    render: function (h, context) {
      const discount = context.props.discount;
      return discount ? (
        <div class={'discount-tag'} {...context.data}>
          {(context.props.discount * 100) + '%'}
        </div>
      ) : undefined;
    },
    props: {
      discount: Number,
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  .discount-tag {
    position: absolute;
    right: 0px;

    transform: rotate(30deg);

    background: purple;
    color: white;
    padding: 0 10px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
