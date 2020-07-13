<template>
  <div class="home">
    
    <transition :name="transitionName">
                <router-view></router-view>
        </transition>
        <!-- 底部导航 -->
        <van-tabbar v-model="active" active-color="red" inactive-color="#000" route>
            <van-tabbar-item replace to="/shou" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/gory" icon="apps-o">
                分类
            </van-tabbar-item>
            <van-tabbar-item replace :badge="$store.getters.sum" to="/cart" icon="shopping-cart-o">
                购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="contact">
                个人
            </van-tabbar-item>
       </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {
   
  },
  methods: {}
};
</script>

<style scoped>
</style>