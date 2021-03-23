<template>
  <div class="input-base-iframe">
    <OrderConfirm ref="OrderConfirm" />
    <van-form label-width="62rem" class="input-base">
      <div class="left">
        <van-field
          v-model="formData.username"
          required
          name="username"
          label="姓名："
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field required class="custom-field" name="radio" label="性别：">
          <template #input>
            <van-radio-group v-model="formData.sex" direction="horizontal">
              <van-radio-copy name="1">男</van-radio-copy>
              <van-radio-copy name="2">女</van-radio-copy>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="formData.age"
          required
          name="age"
          label="年龄："
          :rules="[{ required: true, message: '请填写年龄' }]"
        />
        <van-field
          v-model="formData.height"
          required
          name="height"
          label="身高："
          :rules="[{ required: true, message: '请填写身高' }]"
        >
          <template #button>
            <span class="height-unit">cm</span>
          </template>
        </van-field>
        <van-field required class="custom-field custom-big" name="shape" label="体型：">
          <template #input>
            <GjSelectFrame v-model="formData.shape" field="id" :list="shapeList" />
          </template>
        </van-field>
        <van-field required class="custom-field custom-big" name="shape" label="服饰：">
          <template #input>
            <GjSelectFrame
              class="clothing"
              v-model="formData.clothing"
              field="id"
              :list="clothing"
            />
          </template>
        </van-field>
      </div>
      <div class="right">
        <van-field required class="custom-field custom-big" name="JustMirror" label="正面照：">
          <template #input>
            <JustMirror v-model="formData.JustMirror" />
          </template>
        </van-field>
        <van-field required class="custom-field custom-big" name="LifeMirror" label="生活照：">
          <template #input>
            <LifeMirror v-model="formData.LifeMirror" />
          </template>
        </van-field>
      </div>
    </van-form>
    <div>
      <gj-button type="four" class="button" @click="SaveButton">保存</gj-button>
      <gj-button select type="four" class="button" @click="onStep(2)">下一步</gj-button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, defineComponent, inject } from 'vue'
import { Form, Field, RadioGroup } from 'vant'
import GjButton from '@/components/Button/ipad'
import VanRadioCopy from '@/businessComponents/VanRadioCopy'
import GjSelectFrame from '@/components/SelectFrame/ipad'
import JustMirror from './JustMirror'
import LifeMirror from './LifeMirror'
import OrderConfirm from '../OrderConfirm/index.vue'
export default defineComponent({
  components: {
    GjButton,
    VanForm: Form,
    VanField: Field,
    VanRadioCopy,
    VanRadioGroup: RadioGroup,
    GjSelectFrame,
    JustMirror,
    LifeMirror,
    OrderConfirm,
  },
  setup() {
    const data = reactive({
      shapeList: [
        { img: '', id: 1 },
        { img: '', id: 2 },
        { img: '', id: 3 },
        { img: '', id: 4 },
      ],
      clothing: [
        { img: '', id: 1 },
        { img: '', id: 2 },
        { img: '', id: 3 },
        { img: '', id: 4 },
      ],
      formData: {
        username: '',
        shape: 2,
        clothing: 2,
        JustMirror: null,
        LifeMirror: [
          { img: '', id: 1 },
          { img: '', id: 2 },
          { img: '', id: 3 },
          { img: '', id: 4 },
        ],
      },
    })

    const updateStep = inject('updateStep')
    const OrderConfirm = ref('OrderConfirm')

    async function onSave() {
      try {
        const OrderConfirmVm = OrderConfirm.value
        await OrderConfirmVm.confirm()
        return Promise.resolve()
      } catch (e) {
        return Promise.reject(e)
      }
    }
    // vue不允许error信息直接返回到渲染信息层面
    function SaveButton() {
      try {
        onSave()
      } catch (e) {
        console.log(e)
      }
    }

    async function onStep(step) {
      try {
        await onSave()
        updateStep(step)
      } catch (e) {
        console.log(e)
      }
    }

    return {
      ...toRefs(data),
      OrderConfirm,
      onStep,
      SaveButton,
    }
  },
})
</script>

<style scoped lang="scss">
.input-base-iframe {
  display: flex;
  align-items: center;
  flex-flow: column;
  .button {
    width: 128.65rem;
    height: 46.48rem;
    font-size: 18.3rem;
  }
}
.input-base {
  background: #e9dabf;
  box-sizing: border-box;
  padding: 33.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  ::v-deep(.van-cell) {
    padding: 0 16px;
    font-size: 14.11rem;
    background-color: #e9dabf;
    height: 56rem;
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
  // 自定义部分不要输入背景色
  .custom-field {
    ::v-deep(.van-field__body) {
      background: transparent !important;
    }
  }
  .custom-big {
    height: auto !important;
    ::v-deep(.van-field__body) {
      height: auto;
      padding: 0 !important;
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;
    /*border: #69b9ff 1px solid;*/
  }
}
.height-unit {
  font-size: 14rem;
  color: #1b334e;
  margin-right: 16rem;
}
.clothing {
  margin-top: 6rem;
  ::v-deep(.item) {
    width: 94rem;
    height: 124.5rem;
  }
}
</style>
