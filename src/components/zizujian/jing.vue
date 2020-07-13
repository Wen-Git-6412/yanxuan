<template>
  <div class="jing">
    <van-swipe :loop="false" :width="300" >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
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
      this.$axios.get("https://api.it120.cc/small4/cms/news/list").then(res=>{
        //   console.log(res)
      })
  },
  methods: {}
};
</script>

<style scoped>
</style>