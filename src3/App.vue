<template>
  <div id="app">
        <Loading v-if="Loading"></Loading>
        <router-view></router-view>
  </div>
</template>
<script>
import Home from "@/components/Home"
export default {
    name: "app",
    data(){
        return {
            
        }
    },
    components:{
        Home,
    },
    methods:{

    },
    mounted(){
       
    },
    created(){

    },
    computed:{
        Loading(){
            return this.$store.state.Loading
        }
    }
}
</script>
<style lang="scss">
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
html,body,#app{
    height: 100%;
}
.van-card__title {
    font-size: 16px;
    color: black;
    padding-left: 10px;
}
.van-card__thumb img{
    width: 100px;
    height: 100px;
}
.van-card__content{
    padding: 0;
}
.van-card__header{
    position: relative;
}
.van-card__content{
    position: absolute;
    top: 0;
    left: 110px;
}
</style>