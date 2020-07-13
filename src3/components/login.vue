<template>
  <div>
    <div class="head">
        <h4>登陆账号</h4>
        <p>虾米-严选商城欢迎您</p>
    </div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
        </van-button>
  </div>
</van-form>
<div class="zhuce" @click="zhuce">还没有注册？立即注册</div>
  </div>
</template>

<script>
import { Toast } from "vant"
import qs from "qs"
export default {
  name: '',
  data() { 
    return {
        username: '13500000000',
        password: '123456',
    }
  },
  props: [

  ],
  components:{
  },
  mounted() {

  },
  methods:{
        onSubmit(values) {
            this.$axios.post("user/m/login?deviceId=007&deviceName=monkey",qs.stringify({mobile:this.username,pwd:this.password})).then((res)=>{
                console.log(res.data.data)
                if(res.data.msg == "success"){
                    localStorage.setItem("userId",res.data.data.uid)
                    this.$router.push({
                        path:"/"
                    })
                    Toast.success('登陆成功');
                }
            })
        },
        zhuce(){
            this.$router.push(({
                path:"/rser"
            }))
        }
  },
 }
</script>

<style lang="scss" scoped>
.head{
    width: 100%;
    h4{
        width: 100%;
        font-size: 25px;
        color: #bbb;
        margin-top: 30px;
        margin-left: 20px;
    }
    p{
        color: #909090;
        font-size: 15px;
        margin-left: 20px;
        margin-top: 30px;
        margin-bottom: 20px;
    }
}
.zhuce{
    width: 100%;
    text-align: center;
    color: #549ff9;
}
</style>