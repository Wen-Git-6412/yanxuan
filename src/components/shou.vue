<template>
  <div>
    <div>
        <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in list" :key="index">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 签到 -->
    <div class="xuan">
      <van-tabbar v-model="active" :fixed="false">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
    <div>
        <!-- 全民砍价 -->
        <kanjia/>
    </div>
  </div>
</template>

<script>
import kanjia from '@/components/zizujian/kanjia'
export default {
  name: "",
  data() {
    return {
      list: [],
      active: 'home',
    };
  },
  props: {},
  components: {
      kanjia
  },
  mounted() {
    this.$axios.get("https://api.it120.cc/small4/banner/list").then(res => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {}
};
</script>

<style scoped >
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item > img {
  width: 100%;
  height: 200px;
}
</style>