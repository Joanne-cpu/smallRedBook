import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/index',
        name:'index',
        component:()=>import('../view/index/index.vue')
    },
    {
        path:'/find',
        name:'Find',
        component:()=>import('../view/find/index.vue')
    },
    {
        path:'/notice',
        name:'Notice',
        component:()=>import('../view/notice/index.vue')
    },
    {
        path:'/my',
        name:'My',
        component:()=>import('../view/my/index.vue')
    }
]


const router =createRouter(
    {
        history:createWebHashHistory(),
        routes,
        linkActiveClass:'active'
    }
)

export default router