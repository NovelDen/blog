export const vue = [{
      path: '/vue01',
      name: '插槽',
      component: () => import('@/components/test/vue/vue01/vue01.vue'),
}, {
      path: '/vue02',
      name: '组件传值',
      component: () => import('@/components/test/vue/vue02/vue02.vue'),
}, {
      path: '/vue03',
      name: 'nexttick',
      component: () => import('@/components/test/vue/vue03/vue03.vue'),
}, {
      path: '/vue04',
      name: '自定义指令',
      component: () => import('@/components/test/vue/vue04/vue04.vue'),
}]