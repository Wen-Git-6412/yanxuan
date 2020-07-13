<template>
  <div>
        <div v-html="content" class="content"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: [
    "content"
  ],
  components:{
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.content{
    width: 100% !important;
    height: 100% !important;
    img{
        width: 100% !important;
        height: 100px !important;
    }
}
</style>