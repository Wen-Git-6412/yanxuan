<template>
  <div class="cart">
        <div class="head">
            <div style="color:red;" @click="flag">{{ $store.state.flag?'完成':'编辑' }}</div>
            <div>购物车</div>
            <div></div>
        </div>
        <div class="cc" v-for="(item,index) in $store.state.cart" :key="index">
            <div>
                <!-- <van-checkbox @click="checked(index)" style="margin-top:30px;" v-model="item.checked" checked-color="red"></van-checkbox> -->
                <input type="checkbox" @click="checked(index)" v-model="item.checked">
            </div>
            <div>
                <img width="80" height="80" :src="item.img" alt="">
                <div style="margin-left:15px;">
                    <h6 style=margin-top:15px;>{{ item.name }}</h6>
                    <p style="font-size:10px;color:#bbb;margin-top:5px">{{ item.size }}</p>
                    <p style="font-size:14px;margin-top:10px;color:red;">￥{{ item.price }}</p>
                </div>
            </div>
            <div>
                <van-stepper class="num" v-model="item.num" />
            </div>
        </div>
        <div v-show="$store.state.cart.length<=0" class="img">
            <img src="/static/cart.png" alt="">
        </div>
        <div v-show="!$store.state.cart.length<=0" class="footer">
            <div style="display:flex;">
                <!-- <van-checkbox @click="checkAll" v-model="$store.state.chkk" checked-color="red"></van-checkbox> -->
                <input @click="checkAll" type="checkbox" v-model="$store.state.chkk">
                <span style="font-size:14px;margin-left:5px;">全选</span>
            </div>
            <div>
                <span style="font-size:12px;color:red;margin-right:10px;">合计￥{{ $store.getters.sum1 }}</span>
                <van-button style="width:100px" type="danger" @click="dt">{{ $store.state.flag?'删除':'下单' }}</van-button>
            </div>
        </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: '',
  data() { 
    return {
        
    }
  },
  props: [

  ],
  components:{
  },
  mounted() {

  },
  methods:{
        ...mapMutations(["flag","checked","checkAll","dt"]),
  },
  beforeRouteLeave(ro,form,next){
      next()
      this.$store.commit("ff",false)
  }
 }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.img{
    width: 100%;
    height: 400px;
}
.img>img{
        width: 100%;
        height: 400px;
}
.head{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    border-bottom: 1px solid #bbbbbb;
}
input[type='checkbox']{
    width: 20px;
    height: 20px;
}
input[type='checkbox']:checked{
    background: red;
}
.cc{
    height: 80px;
    display: flex;
    margin-top: 10px;
    position: relative;
}
.cc img{
    border-radius: 5px;
}
.cc>div:nth-of-type(1){
    width: 30px;
    height: 100%;
    line-height: 80px;
    text-align: center;
}
.cc>div:nth-of-type(2){
    display: flex;
}
.cc>div:nth-of-type(3)>.num{
    position: absolute;
    right: 20px;
    bottom: 0;
}
.footer{
    width: 100%;
    height: 50px;
    background: white;
    position: fixed;
    bottom: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    align-items: center;
    border-top: 1px solid #bbbbbb;
    border-bottom: 1px solid #bbbbbb;
}
</style>