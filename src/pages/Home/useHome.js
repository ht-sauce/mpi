import { reactive, watch, computed } from 'vue'
import Apis from '@/services/index'
export default function (props, ctx) {
  const data = reactive({
    RefreshLoading: false,
    classify: [], // 分类列表信息
    swiperList: [{ url: '' }, { url: '' }, { url: '' }, { url: '' }],
    sceneList: [
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
      { img: '', name: '芳菲草长' },
    ],
  })
  // 当前选中分类
  let classify = {
    id: '',
    isActive: true,
    name: '全部',
  }
  let currentPage = 1
  // listFun(1)
  // queryAllThemeGroup()

  async function onRefresh() {
    try {
      await listFun(1)
      data.RefreshLoading = false
    } catch (e) {
      data.RefreshLoading = false
    }
  }
  // 页面下拉监听
  watch(
    () => props.reach.reachBottom,
    () => {
      listFun(currentPage + 1)
    },
    {
      deep: true,
    },
  )
  // 分页列表信息
  async function listFun(page = 1) {
    try {
      const res = await Apis.PureLandApi.Theme.list({
        data: { groupId: classify.id, pageNumber: page, pageSize: 20 },
      })
      const object = res.object ?? []
      currentPage = page
      const newList = []
      object.forEach((item) => {
        console.log(item)
      })
      // if (page <= 1) {
      // } else {
      // }
      //console.log(2, object)

      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async function queryAllThemeGroup() {
    try {
      const res = await Apis.PureLandApi.Classes.list()
      const list = res.object ?? []
      list.forEach((item) => {
        item.isActive = false
        return item
      })
      list.unshift({
        id: '',
        isActive: true,
        name: '全部',
      })
      data.classify = list
    } catch (e) {
      return Promise.reject(e)
    }
  }
  // 选中的分类
  function onselectClass(item, index) {
    classify = item
    data.classify.forEach((li) => {
      li.isActive = false
    })
    item.isActive = true
  }

  return {
    data,
    onRefresh,
    onselectClass,
  }
}
