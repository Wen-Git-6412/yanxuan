<template>
  <div class="cate">
    <header>
        <input type="text" placeholder="回车搜索商品" v-model="inpValue" @keydown.enter="enter">
    </header>
    <div class="head"></div>
        <div class="ct">
            <div class="div">
                <ul>
                    <li :class="n == 4?'active':''" style="width:100%;color: #675D56;font-size:14px;
                    height:50px;line-height:50px" @click="toogle('all',4)">所有分类</li>
                    <li v-for="(item,index) in list" :key="index">
                        <span :class="n == index?'active':''"  @click="toogle(item.id,index)" v-if="item.level == 1">{{ item.name }}</span>
                    </li>
                </ul>
            </div>
            <div class="fixed">

            </div>
                <div class="sp">
                    <ul>
                        <li v-for="(item,index) in arr" :key="index">
                            <img :src="item.icon" alt="">
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                </div>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        list:[],
        arr:[],
        n:-1,
        inpValue:""
    }
  },
  props: [

  ],
  components:{
  },
  mounted() {
    this.$axios.get("https://api.it120.cc/small4/shop/goods/category/all").then((res)=>{
        this.list = res.data.data
        this.arr = this.list
    })
  },
  methods:{
    toogle(id,index){
        this.n = index
        this.arr = this.list.filter((item,index)=>{
            return item.pid == id
        })
        if(id == 'all'){
            this.arr = this.list
        }
    },
    enter(){
        this.arr = this.list.filter((item,index)=>{
            return item.name.includes(this.inpValue)
        })
    }
  },
 }
</script>

<style  lang="scss" scoped>
.fixed{
    width: 80px;
    height: 618px;
}
.cate{
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
}
.head{
    width: 100%;
    height: 40px;
}
header{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #bbb;
    line-height: 40px;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    right: 0;
    input{
        width: 70%;
        height: 30px;
        border-radius: 10px;
        font-size: 14px;
        padding-left: 10px;
        margin-left: 10px;
        outline: none;
        background: #F5F5F5;
        border: 1px solid #F5F5F5;
    }
}
.ct{
    width: 100%;
    height: 100%;
    display: flex;
    .div{
        width: 80px;
        height: 618px;
        border-right: 1px solid #bbbbbb;
        position: fixed;
        text-align: center;
        left: 0;
        ul{
            width: 100%;
            height: 100%;
            li{
                width: 100%;
                // height: 10px;
                span{
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    display: inline-block;
                    font-size: 14px;
                    color: #675D56;
                }
            }
        }
    }
    .sp{
        width: 310px;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 32%;
                text-align: center;
                img{
                    width: 70px;
                    height: 70px;
                }
                span{
                    display: block;
                    font-size: 10px;
                    color: #3E4561;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
            }
        }
    }
}
.active{
    border-left: 2px solid red;
    color: red !important;
}
</style>