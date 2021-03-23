export default {
  select: Boolean, // 是否选中
  // 是否为横，默认true
  vertical: Boolean,
  // 默认二类按钮，值：one,two,three
  type: {
    type: String,
    default: 'two',
  },
  disabled: Boolean,
  error: Boolean,
}
