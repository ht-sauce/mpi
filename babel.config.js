module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      require('@vue/babel-plugin-jsx'),
      { isCustomElement: (tag) => /^guiji-/.test(tag), optimize: true },
    ],
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
}
