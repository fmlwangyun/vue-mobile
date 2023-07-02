import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Home.vue'),
        meta: { title: '首页' }
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: () => import('@/views/privacy/Privacy.vue'),
        meta: { title: '隐私声明' }
    },
    {
        path: '/share',
        name: 'share',
        component: () => import('@/views/share/Share.vue'),
        meta: { title: '拍照分享' }
    },
    {
        path: '/exchange',
        name: 'exchange',
        component: () => import('@/views/exchange/Exchange.vue'),
        meta: { title: '奖品兑换' }
    },
    {
        path: '/question',
        name: 'question',
        component: () => import('@/views/question/Question.vue'),
        meta: { title: '问卷' }
    },
    {
        path: '/poster',
        name: 'poster',
        component: () => import('@/views/poster/Poster.vue'),
        meta: { title: '问卷' }
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;