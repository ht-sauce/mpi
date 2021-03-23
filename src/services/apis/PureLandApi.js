export default (request, services) => {
  return {
    // 主题信息
    Theme: {
      list: (opt) =>
        request({
          ...opt,
          url: `/queryThemeByPage`,
          method: 'post',
        }),
    },
    // 主题分类
    Classes: {
      list: (opt) =>
        request({
          ...opt,
          url: `/queryAllThemeGroup`,
          method: 'post',
        }),
    },
  }
}
