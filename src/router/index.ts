import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/exam',
    name: 'Exam',
    children: [
      {
        path: '',
        name: 'ExamCommon',
        component: () => import('@/views/Exam/index.vue')
      },
      {
        path: ":cid",
        name: 'ExamPersonal',
        component: () => import('@/views/Exam/index.vue')
      }
    ]
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import('@/views/Source/Question.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('@/views/Report/index.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile/index.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    children: [
      {
        path: '/',
        name: 'FriendList',
        component: () => import('@/views/Friends/index.vue')
      },
      {
        path: '/solo',
        name: 'Solo',
        component: () => import('@/views/Solo/index.vue')
      }
    ]
  },
  {
    path: '/recents',
    name: 'Recents',
    component: () => import('@/views/Recents/index.vue')
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: () => import('@/views/Lesson/index.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('@/views/Setting/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
