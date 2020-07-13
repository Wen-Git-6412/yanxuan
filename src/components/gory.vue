<template>
  <div>
    <van-tree-select height="55vw" :items="topcate" :main-active-index.sync="active" class="bbox">
        <template #content>
        <div v-for="(item,index) in subcart" :key="index">
            <img :src="item.icon" alt="">
            <p>{{item.name}}</p>
        </div>
        </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [], //所有数据
      topcate: [{ text: "所有分类" }], //顶级分类
      active: 0 ,//下标
      topids:[0]//顶级id
    };
  },
  props: {},
  components: {},
//   计算属性
  computed: {
      subcart(){
        //   返回下标=0的话返回
         return this.list.filter(item =>{
             if(this.active == 0){
              return this.list
            }
            // 让pid对应主id
              return item.pid == this.topids[this.active]
          })
      }
      
  },
  mounted() {
    this.cart();
  },
  methods: {
    cart() {
      this.$axios.get("https://api.it120.cc/small4/shop/goods/category/all").then(res => {
        //   console.log(res);
          this.list = res.data.data;

          this.list.forEach(item => {
            //   1 如果pid = 0的话
            if (item.pid == 0) {
                // 2 内容添加到topcate里
              this.topcate.push({ text: item.name });
              //  3 把主id添加到topid里
              this.topids.push(item.id)
            }
          });

        });
    }
  }
};
</script>

<style scoped lang="scss">
.bbox{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    div{
        width: 30%;
        img{
            width: 100%;
        }
        p{
            text-align: center;
        }
    }
}
</style>