<template>
  <div class="detail">
            <i @click="back('/')" class="el-icon-arrow-left ss"></i>
            <div class="head">
                <div class="banner">
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item v-for="(item,index) in banner" :key="index">
                            <img width="100%" height="400px" :src="item.pic" alt="">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div class="info">
                    <p>{{ basicInfo.name }}</p>
                    <p>{{ basicInfo.characteristic }}</p>
                    <div style="display:flex">
                        <p>低价￥{{ basicInfo.minPrice }}</p>
                        <p>原价￥{{ basicInfo.originalPrice }}</p>
                    </div>
                </div>
            </div>
            <div class="cd">
                    <van-tabs>
                        <van-tab title="商品介绍">
                            <!-- <div v-html="content" class="content"></div> -->
                            <Asd :content="content"></Asd>
                        </van-tab>
                        <van-tab title="商品评价">
                            <!-- <div>商品评价:{{ $route.query.id }}</div> -->
                            <Zxc :id="$route.query.id"></Zxc>
                        </van-tab>
                    </van-tabs>
            </div>
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
                <van-goods-action-icon icon="cart-o" text="购物车" @click="back('/cart')" :badge="$store.getters.sum" />
                <van-goods-action-icon icon="star" text="已收藏" color="#bbb" />
                <van-goods-action-button type="warning" text="加入购物车" @click="show = true" />
                <van-goods-action-button type="danger" text="立即购买" @click="show = true"  />
            </van-goods-action>
            <!-- 购物车弹出层 -->
            <div class="cart">
                <van-popup v-model="show" position="bottom" style="height:40%;" >
                    <span @click="ss" class="span">X</span>
                    <div v-for="(item,index) in properties" :key="index">
                        <div  style="display:flex;margin:15px 0px 0px 15px;border-bottom:1px solid #bbb;height:70px;">
                            <img width="60" height="60" :src="banner[1].pic" alt="">
                            <div style="margin-left:10px;">
                                <p style="font-size:15px;">{{ basicInfo.name }}</p>
                                <p style="color:red;font-size:14px;margin-top:15px;">￥{{ basicInfo.minPrice }}</p>
                            </div>
                        </div>
                        <div style="margin:10px 0px 0px 15px;">
                            <p style="font-size:14px;">{{ item.name }}</p>
                            <div class="asd">
                                <ul>
                                    <li :style="activeIndex == i?'border: 1px solid red;':'border: 1px solid #bbb;'"
                                     @click="toogle(v,i)" v-for="(v,i) in item.childsCurGoods" :key="i">
                                        {{ v.name }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style="height:50px;line-height:50px;display:flex;justify-content: space-between;padding:0px 15px;margin-top:20px">
                            <span style="font-size:14px;">购买数量</span><van-stepper v-model="num" />
                        </div>
                    </div>
                    <van-button type="danger" class="btn" block @click="goCart">加入购物车</van-button>
                </van-popup>
            </div>
            <div @click="top" v-show="sshow" class="top">
                <i class="el-icon-top"></i>
            </div>
  </div>
</template>

<script>
import Asd from "@/components/Asd"
import Zxc from "@/components/Zxc"
import { Toast } from 'vant'
export default {
  name: '',
  data() { 
    return {
        banner:[],//轮播图
        basicInfo:[],
        content:{},
        show:false,
        properties:[],
        num:1,
        activeIndex:-1,
        title:"",
        sshow:false
    }
  },
  props: [

  ],
  components:{
    Asd,Zxc
  },
  mounted() {
    this.$axios.get("shop/goods/detail?id="+this.$route.query.id).then((res)=>{
        // console.log(res.data.data)
        //轮播图的数据
        this.banner = res.data.data.pics
        //获取商品信息
        this.basicInfo = res.data.data.basicInfo
        //获取内容
        this.content = res.data.data.content
        //获取购物车弹出层里面的内容
        this.properties = res.data.data.properties
    })
    onscroll = ()=>{
            let scrollTop = document.documentElement.scrollTop
            if(scrollTop>=600){
                this.sshow = true
            }else{
                this.sshow = false
            }
        }
  },
  methods:{
        back(str){
            this.$router.push(({
                path:str,
            }))
        },
        toogle(item,i){
            this.activeIndex = i
            this.title = item
        },
        goCart(){
            let has = localStorage.getItem("userId")
            if(has){
                let obj = {
                    name:this.basicInfo.name,
                    size:this.title.name,
                    num:this.num,
                    img:this.banner[1].pic,
                    checked:true,
                    price:this.basicInfo.minPrice
                }
                this.num = 1
                this.title = ""
                this.activeIndex = -1
                this.$store.commit("addCart",obj)
                this.show = false
            }else{
                Toast.fail('请登录');
                this.$router.push({
                    path:"/login"
                })
            }
        },
        ss(){
            this.show = false
            this.num = 1
            this.title = ""
            this.activeIndex = -1
        },
        top(){
            let timer=setInterval(()=>{
                        var topH=document.documentElement.scrollTop
                        var stepLength=Math.ceil(topH/5);
                        document.documentElement.scrollTop = document.documentElement.scrollTop - stepLength;
                        if(topH<=0){
                                clearInterval(timer);
                        }
                },30);
        },
  },
 }
</script>

<style lang="scss" scoped>
.top{
    width: 40px;
    height: 40px;
    background: rgba(150,150,150,0.5);
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    position: fixed;
    bottom: 60px;
    right: 15px;
    i{
        font-size: 20px;
    }
}
.detail{
    width: 100%;
    height: 100%;
}
*{
    padding: 0;
    margin: 0;
}
.ss{
    display: block;
    width: 30px;
    height: 30px;
    background: white;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1000;
    text-align: center;
    line-height: 30px;
    font-size: 25px;
    border-radius: 50%;
}
.cart{
    .span{
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0;
        top: 10px;
    }
}
.info{
    margin-left: 20px;
    p:nth-of-type(1){
        font-weight: bold;
        margin-top: 10px;
    }
    p:nth-of-type(2){
        font-size: 10px;
        color: #bbbbbb;
        margin-top: 10px;
    }
    div{
        p:nth-of-type(1){
            color: #CC0C0C;
            font-size: 14px;
            font-weight: 400;
        }
        p:nth-of-type(2){
            margin-top: 12px;
            margin-left: 5px;
        }
    }
}
.btn{
    position: absolute;
    bottom: 0;
}
.asd{
    width: 100%;
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 25%;
            height: 30px;
            border-radius: 5px;
            font-size: 12px;
            line-height: 30px;
            margin-left: 15px;
            padding: 0px 2px;
            text-align: center;
        }
    }
}
</style>