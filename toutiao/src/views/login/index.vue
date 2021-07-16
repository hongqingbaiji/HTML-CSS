<template>
  <div class="login-container">
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-field
        v-model="user_mobile"
        left-icon="phone-o"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user_code"
        clearable
        left-icon="comment-o"
        placeholder="请输入验证码">
        <template #button>
          <van-button size="small" round>发送验证码</van-button>
        </template>
      </van-field> 
    </van-cell-group>
    <van-button type="info" block>登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data() {
    return {
      user_mobile:'',
      user_code:''
    };
  },
  methods:{

  }
};
</script>

<style scoped>

</style>
