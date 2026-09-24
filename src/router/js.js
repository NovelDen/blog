export const js = [{
      path: '/js/js05',
      name: 'js类型',
      component: () => import('@/components/test/js/js05/js05.vue'),
      meta: { type: 'js', index: '1' }
},
{
      path: '/js/js01',
      name: '事件循环',
      component: () => import('@/components/test/js/js01/js01.vue'),
      meta: { type: 'js', index: '2' },
}, {
      path: '/js/js02',
      name: '作用域',
      component: () => import('@/components/test/js/js02/js02.vue'),
      meta: { type: 'js', index: '3' }
}, {
      path: '/js/js03',
      name: '闭包',
      component: () => import('@/components/test/js/js03/js03.vue'),
      meta: { type: 'js', index: '4' }
}, {
      path: '/js/js04',
      name: '深拷贝与浅拷贝',
      component: () => import('@/components/test/js/js04/js04.vue'),
      meta: { type: 'js', index: '5' }
}]