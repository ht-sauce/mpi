import { Toast } from 'vant'
import axios from 'axios'
import { Loading } from '@/Tool'
// axios函数封装
const ajax = ({
  url = '',
  loading = false, //加载拦截
  baseURL = '',
  data = {},
  headers = { 'Content-Type': 'application/json;charset=UTF-8' }, //头部信息处理
  method = 'get',
  timeout = 30 * 1000,
}) => {
  //接口全局加载提示
  let loadingInstance = null
  if (loading) {
    loadingInstance = new Loading()
    loadingInstance.start()
  }
  const posts = ['put', 'post', 'patch'] // 使用data作为发送数据主体

  return new Promise((suc, err) => {
    // 预处理数据部分
    method = method.toLocaleLowerCase() //转化为小写

    //console.log(method, posts.includes(method))
    axios({
      url: url,
      baseURL: baseURL,
      headers: headers,
      method: method,
      [posts.includes(method) ? 'data' : 'params']: data,
      timeout: timeout,
    })
      .then((response) => {
        loadingInstance && loadingInstance.stop()
        suc(response)
      })
      .catch((e) => {
        loadingInstance && loadingInstance.stop()
        err(e)
      })
  })
}

export { ajax }
