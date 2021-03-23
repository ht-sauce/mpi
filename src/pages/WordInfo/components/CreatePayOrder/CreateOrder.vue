<template>
  <div class="create-order">
    <div class="title">
      <span>请留下联系人信息</span>
      <span>便于及时告知制作进度</span>
    </div>
    <van-form class="form-data" label-width="72rem">
      <van-field
        v-model="formData.username"
        required
        name="username"
        label="姓名："
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="formData.username"
        required
        name="username"
        label="手机号："
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div class="send-code">
        <van-field
          v-model="formData.username"
          required
          name="username"
          label="验证码："
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
        </van-field>
        <van-button class="code-but" size="small" type="primary">发送验证码</van-button>
      </div>

      <van-field
        v-model="formData.username"
        name="username"
        label="期望时间："
        :rules="[{ required: true, message: '请填写期望时间' }]"
      />
      <van-field v-model="formData.username" name="username" label="备注：" />
    </van-form>
    <div class="custom-agreement">
      <van-field name="UserAgreement">
        <template #input>
          <div class="user-agreement">
            <van-checkbox-copy
              class="agreement-checkbox"
              v-model="formData.UserAgreement"
              shape="square"
            />
            <span>我已阅读</span>
            <span class="agreement">服务协议</span>
          </div>
        </template>
      </van-field>
    </div>

    <gj-button class="button" @click="goPay" type="three">立即支付 ¥9999</gj-button>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent, inject } from 'vue'
import { Form, Field, Button } from 'vant'
import GjButton from '@/components/Button/ipad.vue'
import VanCheckboxCopy from '@/businessComponents/VanCheckboxCopy/index.vue'
export default defineComponent({
  components: {
    VanButton: Button,
    VanForm: Form,
    VanField: Field,
    GjButton,
    VanCheckboxCopy,
  },
  setup() {
    const updateStep = inject('updateStep')
    const data = reactive({
      formData: {},
    })

    function goPay() {
      updateStep(2)
    }

    return {
      ...toRefs(data),
      goPay,
    }
  },
})
</script>

<style scoped lang="scss">
.create-order {
  color: #1b334e;
  font-size: 13.28rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  .title {
    font-size: 18.3rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    line-height: 25rem;
  }
  .form-data {
    margin-top: 20rem;
    width: 100%;
  }
  ::v-deep(.van-cell) {
    padding: 0 0 0 14.11rem;
    font-size: 14.11rem;
    height: 56rem;
    background: transparent;
    &::after {
      border: none;
    }
    .van-field__label {
      margin-right: 0;
      margin-top: 4rem;
    }
    .van-field__body {
      background: #d3c2a3;
      height: 33.2rem;
      padding: 0 6rem;
    }
    .van-field__error-message {
      color: #8c2020;
      font-size: 10rem;
      line-height: 14rem;
    }
  }
  .van-cell--required::before {
    color: #1b334e;
    margin-top: 6rem;
  }

  .send-code {
    display: flex;
    align-items: flex-start;
    ::v-deep(.van-field__body) {
      width: 105rem;
    }
    .code-but {
      width: 107rem;
      flex-shrink: 0;
      background: #1b334e;
      color: #fee4ae;
      font-size: 13.28rem;
      border-color: #1b334e;
    }
  }

  .custom-agreement {
    .van-cell {
      height: auto;
    }
    .agreement-checkbox {
      margin-right: 4rem;
    }
    ::v-deep(.van-field__body) {
      background: transparent;
      height: auto;
      padding: 0 6rem;
    }
  }

  .user-agreement {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .agreement {
      margin-left: 4rem;
      line-height: 14rem;
      color: #8c2020;
      border-bottom: #8c2020 1px solid;
    }
  }
  .button {
    margin-top: 20rem;
    width: 240rem;
    height: 50rem;
    font-size: 15rem;
  }
}
</style>
