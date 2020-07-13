<template>
  <div id="app">
        <Loading v-if="this.$store.state.loading"></Loading>
        <router-view></router-view>
  </div>
</template>
<script>
import Loading from '@/components/loading'
import Home from "@/components/home"
export default {
    name: "app",
    data(){
        return {
            
        }
    },
    components:{
        Home,Loading
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