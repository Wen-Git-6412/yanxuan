<template>
  <div>
    <div class="head">
      <h2>新用户注册</h2>
      <p>很高兴您将成为商城 的会员（注册只需一步）</p>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <van-field
        v-model="code"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <van-field
        readonly
        clickable
        name="area"
        :value="value"
        label="地区选择"
        placeholder="点击选择省市区"
        @click="showArea = true"
      />
      <van-popup v-model="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
      </van-popup>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">立即注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
      code: "",
      value: "",
      showArea: false,
      areaList: {} // 数据格式见 Area 组件文档
    };
  },
  props: [],
  components: {},
  mounted() {
    this.$axios.get("/static/data.json").then(res => {
      console.log(res);
    });
  },
  methods: {
    onSubmit() {},
    onConfirm(values) {
      this.value = values.map(item => item.name).join("/");
      this.showArea = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  h2 {
    width: 100%;
    font-size: 25px;
    color: #bbb;
    margin-top: 30px;
    margin-left: 20px;
  }
  p {
    color: #909090;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
.zhuce {
  width: 100%;
  text-align: center;
  color: #549ff9;
}
</style>