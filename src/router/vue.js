export const vue = [{
      path: '/vue/vue01',
      name: '插槽',
      component: () => import('@/components/test/vue/vue01/vue01.vue'),
      meta: { type: 'vue', index: '1' },
}, {
      path: '/vue/vue02',
      name: '组件传值',
      component: () => import('@/components/test/vue/vue02/vue02.vue'),
      meta: { type: 'vue', index: '2' },
}, {
      path: '/vue/vue03',
      name: 'nexttick',
      component: () => import('@/components/test/vue/vue03/vue03.vue'),
      meta: { type: 'vue', index: '3' },
}, {
      path: '/vue/vue04',
      name: '自定义指令',
      component: () => import('@/components/test/vue/vue04/vue04.vue'),
      meta: { type: 'vue', index: '4' },
}, {
      path: '/vue/vue05',
      name: '查询路由',
      redirect:"/vue/vue05/AAA",
      component: () => import('@/components/test/vue/vue05/vue05.vue'),
      meta: { type: 'vue', index: '5' },
      children:[{
            path: '/vue/vue05/AAA',
            name: '查询路由AAA',
            component: () => import('@/components/test/vue/vue05/AAA.vue'),
            meta:{type: 'vue', index: '5',name:"AAA"}
      },{
            path: '/vue/vue05/BBB',
            name: '查询路由BBB',
            component: () => import('@/components/test/vue/vue05/BBB.vue'),
            meta:{type: 'vue', index: '5',name:"BBB"}
      }]
}]