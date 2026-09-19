import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
const modules = import.meta.glob('@/components/**/*.vue')
import {childrenList} from '@/router/childlist'

// const childrenList =[]
// for(let i=1; i<=2;i++){
//   const num = '0' + i
//   const filepath = `/src/components/test${num}/test${num}.vue`
//   const component = modules[filepath]
//   if (!component) {
//     console.error(`找不到组件: ${filepath}`)
//     continue
//   }

//   childrenList.push({
//     path: `test${num}`,
//     name: `test${num}`,
//     component: component,
//   })
// }
// console.log(childrenList);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/test',
      name: 'test',
      redirect:'/vue01',
      component: () => import('@/views/test.vue'),
      children:childrenList,
    },
  ],
})
export default router
