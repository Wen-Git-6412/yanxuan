<template>
  <div class="zxc">
        <div class="div" v-for="(item,index) in arr" :key="index">
            <div class="box">
                <img width="50" :src="item.goods.pic" alt="">
                <div>1111</div>
                <div class="good">{{ item.goods.goodReputationStr }}</div>
                <div class="aa">{{ item.goods.goodReputationRemark }}</div>
            </div>
            <div class="div2" style="display:flex">
                <div style="font-size:10px;color:#bbb;">
                    <p>{{ item.goods.dateAdd }}</p>
                    <p>{{ item.goods.dateReputation }}</p>
                </div>
                <div style="font-size:10px;color:#bbb;width:105px;margin-left:20px">
                    <p>选择规格:{{ item.goods.property }}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        arr:[]
    }
  },
  props: [
    "id"
  ],
  components:{
  },
  mounted() {
    this.$axios.get("shop/goods/reputation?goodsId="+this.id).then((res)=>{
        // console.log(res.data.data)
        this.arr = res.data.data
    })
  },
  methods:{

  },
 }
</script>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.axc{
    width: 100%;
    height: 100%;
}
.div{
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #bbbbbb;
    padding: 10px 0px 0px 10px;
    .box{
        display: flex;
        position: relative;
        .good{
            width: 40px;
            height: 25px;
            text-align: center;
            font-size: 14px;
            line-height: 25px;
            background: #B7282E;
            color: white;
            border-radius: 5px;
        }
        img{
            width: 60px;
            height: 60px;
            border-radius: 50px;
        }
        div{
            margin-left: 20px;
        }
        .aa{
            position: absolute;
            top: 30px;
            left: 60px;
            font-size: 14px;
        }
    }
    .div2{
        margin-left: 80px;
    }
}
</style>