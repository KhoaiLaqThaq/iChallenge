import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {
  LayoutEnum
} from '@/constant/LayoutEnum'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: { layout: LayoutEnum.UserLayout }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { layout: LayoutEnum.UserLayout }
  },
  {
    path: '/exam',
    name: 'Exam',
    children: [
      {
        path: '',
        name: 'ExamCommon',
        component: () => import('@/views/Exam/index.vue'),
        meta: { layout: LayoutEnum.UserLayout }
      },
      {
        path: ":cid",
        name: 'ExamPersonal',
        component: () => import('@/views/Exam/index.vue'),
        meta: { layout: LayoutEnum.UserLayout }
      },
      {
        path: ":cid/personal",
        name: 'ExamPersonalMore',
        component: () => import('@/views/Exam/Personal/index.vue'),
        meta: { layout: LayoutEnum.UserLayout }
      },
      {
        path: ':cid/recents',
        name: 'ExamRecents',
        component: () => import('@/views/Recents/index.vue'),
        meta: { layout: LayoutEnum.UserLayout }
      },
    ]
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import('@/views/Source/Question.vue'),
    meta: { layout: LayoutEnum.UserLayout }
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('@/views/Report/index.vue'),
    meta: { layout: LayoutEnum.UserLayout }
  },
  {
    path: '/profile',
    // name: 'Profile',
    children: [
      {
        path: '',
        name: 'ProfileInformations',
        component: () => import('@/views/Profile/Info/index.vue'),
        meta: { layout: LayoutEnum.SettingLayout }
      },
      {
        path: ':username',
        name: 'ProfileEdit',
        component: () => import('@/views/Profile/index.vue'),
        meta: { layout: LayoutEnum.SettingLayout }
      }
    ]
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
    children: [
      {
        path: '',
        name: 'Setting',
        component: () => import('@/views/Setting/index.vue'),
        meta: { layout: LayoutEnum.SettingLayout }
      },
      {
        path: 'courses',
        name: 'SettingCourse',
        component: () => import('@/views/Setting/Courses/index.vue'),
        meta: { layout: LayoutEnum.SettingLayout }
      },
      {
        path: 'password',
        name: 'SettingPassword',
        component: () => import('@/views/Setting/Password/index.vue'),
        meta: { layout: LayoutEnum.SettingLayout }
      },
      {
        path: 'notifications',
        name: 'SettingNotifications',
        component: () => import('@/views/Setting/Notification/index.vue'),
        meta: { layout: LayoutEnum.SettingLayout }
      },
      {
        path: 'privacy',
        name: 'SettingPrivacy',
        component: () => import('@/views/Setting/Privacy/index.vue'),
        meta: { layout: LayoutEnum.SettingLayout }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
