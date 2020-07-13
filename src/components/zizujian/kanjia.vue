<template>
  <div>
    <p>全民砍价</p>
    <div class="box" v-for="(item,index) in list" :key="index">
      <div class="left">
        <img :src="item.pic" alt />
      </div>
      <div class="right">
        <p v-html="item.name"></p>
        <p class="hui">{{item.characteristic}}</p>
        <span>
          <p>${{item.minBuyNumber}}</p>
          <p>低价</p>
        </span>
        <span>
          <p></p>
          <p>原价</p>
        </span>
        <span>
          <p></p>
          <p>数量</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  props: {},
  components: {},
  mounted() {
    this.$axios
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
        // console.log(res);
        this.list = res.data.data.goodsMap;
      });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 48%;
    height: 100%;
    margin: 5px;
    img {
      width: 100%;
    }
  }
  .right {
    width: 48%;

    .hui {
      font-size: 12px;
      color: #cccc;
      margin-top: 20px;
    }
    span {
      margin-top: 75px;
      float: left;
      margin-left: 25px;
    }
  }
}
</style>