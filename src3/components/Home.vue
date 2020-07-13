<template>
  <div class="home">
        <transition :name="transitionName">
                <router-view></router-view>
        </transition>
        <!-- 底部导航 -->
        <van-tabbar v-model="active" active-color="red" inactive-color="#000">
            <van-tabbar-item replace to="/" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="cate" icon="apps-o">
                分类
            </van-tabbar-item>
            <van-tabbar-item replace :badge="$store.getters.sum" to="/cart" icon="shopping-cart-o">
                购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/user" icon="contact">
                个人
            </van-tabbar-item>
       </van-tabbar>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        transitionName:"",
        active:""
    }
  },
  props: [

  ],
  components:{
  },
  mounted() {
        
  },
  methods:{

  },
watch: {
  '$route' (to, from) {
    let toName = to.name
    const toIndex = to.meta.index
    const fromIndex = from.meta.index
    this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
  }
}
 }
</script>

<style lang="scss" scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>