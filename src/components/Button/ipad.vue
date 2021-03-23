<script lang="jsx">
import { withScopeId, defineComponent, getCurrentInstance } from 'vue'
import Props from './porps'
export default defineComponent({
  name: 'GjButton',
  props: Props,
  setup(props, ctx) {
    // jsx使用scoped
    const instance = getCurrentInstance()
    const scopeId = instance.type.__scopeId
    const withId = withScopeId(scopeId)

    const glStyle = () => {
      return {
        'pointer-events': props.disabled ? 'none' : 'auto',
        opacity: props.disabled ? 0.5 : 1,
      }
    }

    const finButton = () => (
      <>
        <span class={{ disabled: props.disabled }} />
        <span class="button" class={{ 'button-vertical': props.vertical }}>
          {ctx.slots.default && ctx.slots.default()}
        </span>
      </>
    )

    const oneButton = () => {
      return (
        <div
          class="gj-button gj-button-one"
          class={{
            'gj-button-one-check-v': props.select && props.vertical,
            'gj-button-one-check': props.select && !props.vertical,
            'gj-button-one-rl': props.vertical,
          }}
          style={glStyle()}
        >
          {finButton()}
        </div>
      )
    }
    // 二类小按钮
    const twoButton = () => {
      return (
        <div
          class="gj-button gj-button-two"
          style={glStyle()}
          class={{
            'gj-button-two-check-v': props.select && props.vertical,
            'gj-button-two-check': props.select && !props.vertical,
            'gj-button-two-rl': props.vertical,
          }}
        >
          {finButton()}
        </div>
      )
    }
    // 三类小按钮
    const threeButton = () => {
      return (
        <div
          class="gj-button gj-button-three"
          style={glStyle()}
          class={{
            'gj-button-three-check-v': props.select && props.vertical,
            'gj-button-three-check': props.select && !props.vertical,
            'gj-button-three-rl': props.vertical,
          }}
        >
          {finButton()}
        </div>
      )
    }
    // 四类按钮
    const fourButton = () => {
      return (
        <div
          class="gj-button gj-button-four"
          style={glStyle()}
          class={{
            'gj-button-four-check-v': props.select && props.vertical,
            'gj-button-four-check': props.select && !props.vertical,
            'gj-button-four-rl': props.vertical,
            'gi-button-four-error': props.error,
            'gi-button-four-error-l': props.erro && !props.verticalr,
          }}
        >
          {finButton()}
        </div>
      )
    }

    // 五类按钮
    const fiveButton = () => {
      return (
        <div class="gj-button gj-button-five" style={glStyle()}>
          {finButton()}
        </div>
      )
    }

    return withId(() => {
      if (props.type === 'one') return oneButton()
      if (props.type === 'two') return twoButton()
      if (props.type === 'three') return threeButton()
      if (props.type === 'four') return fourButton()
      if (props.type === 'five') return fiveButton()
    })
  },
})
</script>

<style scoped lang="scss">
.gj-button {
  background: #c1ad88;
  font-size: 12.45rem;
  display: inline-block;
  margin: 0 4.15rem;
  cursor: pointer;
  position: relative;
  .disabled {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: not-allowed;
  }
  .button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-vertical {
    writing-mode: vertical-rl;
  }
}
/*一类按钮*/
.gj-button-one {
  color: #eee6d7;
  width: 117.7023rem;
  height: 36.686rem;
  font-size: 16.6rem;
  background: url('~@/assets/images/but-one.png');
  background-size: 100% 100%;
}
.gj-button-one-rl {
  width: 36.686rem;
  height: 117.7023rem;
  background: url('~@/assets/images/but-one-l.png');
  background-size: 100% 100%;
}
.gj-button-one-check {
  //background: linear-gradient(#2a5e98, #1b334e);
  background: url('~@/assets/images/but-one-check.png');
  background-size: 100% 100%;
  color: #eee6d7;
}
.gj-button-one-check-v {
  //background: linear-gradient(to left, #2a5e98, #1b334e);
  background: url('~@/assets/images/but-one-check-l.png');
  background-size: 100% 100%;
  color: #eee6d7;
}
/*二类按钮*/
.gj-button-two {
  color: #162340;
  width: 74.2269rem;
  height: 23.6218rem;
  font-size: 12.45rem;
  background: url('~@/assets/images/two-but.png');
  background-size: 100% 100%;
}

.gj-button-two-rl {
  width: 23.6218rem;
  height: 74.2269rem;
  background: url('~@/assets/images/two-but-l.png');
  background-size: 100% 100%;
}
.gj-button-two-check-v {
  background: url('~@/assets/images/two-but-check-l.png');
  background-size: 100% 100%;
  color: #eee6d7;
}
.gj-button-two-check {
  background: #1b334e;
  color: #fee4ae;
  background: url('~@/assets/images/two-but-check.png');
  background-size: 100% 100%;
}
/*三类按钮*/
.gj-button-three {
  color: #fee4ae;
  width: 74.2269rem;
  height: 23.6218rem;
  font-size: 12.45rem;
  background: url('~@/assets/images/but-three.png');
  background-size: 100% 100%;
}

.gj-button-three-rl {
  width: 23.6218rem;
  height: 74.2269rem;
  background: url('~@/assets/images/but-three-l.png');
  background-size: 100% 100%;
}
.gj-button-three-check-v {
  background: url('~@/assets/images/but-three-check-l.png');
  background-size: 100% 100%;
  color: #eee6d7;
}
.gj-button-three-check {
  background: #1b334e;
  color: #fee4ae;
  background: url('~@/assets/images/but-three-check.png');
  background-size: 100% 100%;
}
/*四类按钮*/
.gj-button-four {
  color: #1b334e;
  width: 74.2269rem;
  height: 23.6218rem;
  font-size: 12.45rem;
  background: url('~@/assets/images/but-four.png');
  background-size: 100% 100%;
}

.gj-button-four-rl {
  width: 23.6218rem;
  height: 74.2269rem;
  background: url('~@/assets/images/but-four-l.png');
  background-size: 100% 100%;
}
.gj-button-four-check-v {
  background: url('~@/assets/images/but-four-check-l.png');
  background-size: 100% 100%;
  color: #fee4ae;
}
.gj-button-four-check {
  background: #1b334e;
  color: #fee4ae;
  background: url('~@/assets/images/but-four-check.png');
  background-size: 100% 100%;
}
.gi-button-four-error {
  color: #fee4ae;
  background: url('~@/assets/images/four-error-but.png');
  background-size: 100% 100%;
}
.gi-button-four-error-l {
  color: #fee4ae;
  background: url('~@/assets/images/four-error-but-l.png');
  background-size: 100% 100%;
}
/*5类按钮*/
.gj-button-five {
  color: #1b334e;
  width: 215.5rem;
  height: 46.5rem;
  font-size: 23.5rem;
  background: url('~@/assets/images/but-five.png');
  background-size: 100% 100%;
}
</style>
