export default {
  modelValue: String, // 手动绑定
  title: {
    type: String,
    default: '',
  },
  placeholder: String,
  tips: String,
  maxlength: [String, Number],
  type: {
    type: String,
    default: 'text',
  },
}
