<template>
  <div class="index">
    <div class="head" v-show="isShow">
        <img width="40" src="http://39.105.231.166:7002/static/toux.jpg" alt="">
    </div>
        <!-- 轮播图 -->
        <div class="banner">
                <van-swipe class="my-swipe" :autoplay="3000">
                        <van-swipe-item v-for="(item,index) in banner" :key="index">
                                <img width="100%" :src="item.picUrl" alt="">
                        </van-swipe-item>
                </van-swipe>
                <!-- 菜单 -->
                <div class="cd">
                    <ul>
                        <li>签到</li>
                        <li>礼券</li>
                        <li>砍价</li>
                        <li>专栏</li>
                    </ul>
                </div>
        </div>
        <!-- 全民砍价 -->
        <div class="kanjia">
                <p>全民砍价 > </p>
                <ul>
                        <li v-for="(item,index) in arr" :key="index">
                                <van-card
                                :desc="item.characteristic"
                                :title="item.name"
                                :thumb="item.pic"/>
                                <div class="li">
                                        <span>
                                            <p style="color:red">￥{{ item.minPrice }}</p>
                                            <p>低价</p>
                                        </span>
                                        <span style="color:#bbb">
                                            <p>￥429</p>
                                            <p>原价</p>
                                        </span>
                                        <span style="color:#bbb">
                                            <p>￥100</p>
                                            <p>限量</p>
                                        </span>
                                </div>
                        </li>
                </ul>
        </div>
        <!-- 精选专题 -->
        <div class="jxzt">精选专题</div>
        <van-swipe class="jx" :loop="false" :width="300">
            <van-swipe-item v-for="(item,index) in aaa" :key="index">
                <img width="100%" height="80%" :src="item.pic" alt="">
                <div class="asd">
                    <p style="font-size:14px">{{ item.title }}</p>
                    <p style="font-size:12px;color:#bbb">{{ item.descript }}</p>
                </div>
            </van-swipe-item>
        </van-swipe>
        <!-- 人气推荐 -->
        <div class="jxzt">人气推荐</div>
        <div class="tuijian">
            <ul>
                <li @click="back(item.id)" v-for="(item,index) in newarr" :key="index">
                    <div  v-if="item.recommendStatus">
                        <img width="100%" :src="item.pic" alt="">
                        <p>{{ item.name }}</p>
                        <p style="font-size:12px;color:#bbb">{{ item.characteristic }}</p>
                        <p style="color:red">￥{{ item.minPrice }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div @click="top" v-show="show" class="top">
            <i class="el-icon-top"></i>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        banner:[],
        arr:[],
        current: 0,
        aaa:[],
        isShow:false,
        newarr:[],
        show:false
    }
  },
  props: [

  ],
  components:{
  },
  mounted() {
        //轮播图
        this.$axios.get("banner/list").then((res)=>{
                this.banner = res.data.data
        })
        this.$axios.get("shop/goods/kanjia/list").then((res)=>{
                this.arr = res.data.data.goodsMap
        })
        //人气推荐
        this.$axios.get("shop/goods/list").then((res)=>{
                // console.log(res.data.data)
                this.newarr = res.data.data
        })
        //精选专题
        this.$axios.get("cms/news/list").then((res)=>{
                this.aaa = res.data.data
        })
        onscroll = ()=>{
            let scrollTop = document.documentElement.scrollTop
            if(scrollTop>=450){
                this.isShow = true
            }else{
                this.isShow = false
            }
            if(scrollTop>=600){
                this.show = true
            }else{
                this.show = false
            }
        }
  },
  methods:{
        onChange(index) {
            this.current = index;
        },
        back(id){
            this.$router.push({
                path:"/detail",
                query:{
                    id,
                }
            })
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
    }
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
.head{
    width: 100%;
    height:50px;
    background: white;
    position: fixed;
    top: 0px;
    left: 0;
    right:0;
    z-index: 1000;
    text-align: center;
}
.tuijian{
    width: 100%;
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li{
            width: 40%;
        }
    }
}
.jxzt{
    width: 100%;
    height: 40px;
    background: white;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
}
.jx{
    width: 100%;
    height: 220px;
}
.asd{
    width: 100%;
    height: 50px;
    background: white;
}
.index{
    width: 100%;
    height: 100%;
    padding-bottom: 80px;
}
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.my-swipe .van-swipe-item {
    width: 100%;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
.banner{
        width: 100%;
        position: relative;
        img{
            width: 100%;
        }
        .cd{
            width: 100%;
            height: 100px;
            background: white;
            position: absolute;
            bottom: 0;
            border-radius: 50px 50px 0px 0px;
            ul{
                display: flex;
                width: 100%;
                height: 100px;
                // justify-content: space-around;
                li{
                    flex: 1;
                    text-align: center;
                    line-height: 100px;
                }
            }
        }
}
.kanjia>ul>li{
        position: relative;
        .li{
            width: 150px;
            display: flex;
            position: absolute;
            bottom: 10px;
            left: 100px;
            justify-content: space-around;
            span{
                font-size: 14px;
                text-align: center;
            }
        }
}
.van-card{
    height: 120px;
    padding: 0;
    margin: 0;
    margin-top: 20px;
    background: none;
    border-top: 1px solid #bbb;
    padding-top: 5px;
}
</style>