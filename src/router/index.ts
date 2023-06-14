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
        path: '/question',
        name: 'question',
        component: () => import('@/views/question/Question.vue'),
        meta: { title: '问卷' }
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;