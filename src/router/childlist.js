import { vue } from '@/router/vue'
import { js } from '@/router/js'
export const childrenList = [{
  path: '/vue',
  name: 'vue',
  redirect: '/vue/vue01',
  component: () => import('@/components/test/test.vue'),
  children:vue,
},{
  path: '/js',
  name: 'js',
  redirect: '/js/js05',
  component: () => import('@/components/test/test.vue'),
  children:js,
}]