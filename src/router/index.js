import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from 'pages/Home'
import Position from 'pages/position/Position'
import List from 'pages/list/List'
import Buy from 'pages/buy/Buy'
import ShopCar from 'pages/shopCar/ShopCar'
import MyHome from 'pages/myHome/MyHome'
import ListHot from 'components/list/list-hot'
import ListSort from 'components/list/list-sort'
import Sort from 'pages/sort/Sort'
import Detail from 'pages/detail/Detail'
import DetailShop from 'pages/detail/Detail-shop'
import DetailDetail from 'pages/detail/Detail-detail'
import DetailReview from 'pages/detail/Detail-review'
import DetailRecommend from 'pages/detail/Detail-recommend'


const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        name:'home',
        path:'/home',
        component:Home,
        children:[
            {
                path:'',
                redirect:'position'
            },
            {
                name:"position",
                path:'position',
                component:Position
            },
            {
                name:"list",
                path:'list',
                component:List,
                children:[
                    {
                        path:'',
                        redirect:'sort'
                    },
                    {
                        name:'list-search',
                        path:'search',
                        component:ListHot
                    },
                    {
                        name:'list-sort',
                        path:'sort',
                        component:ListSort
                    }
                ]
            },
            {
                name:"buy",
                path:'buy',
                component:Buy
            },
            {
                name:"shopCar",
                path:'shopCar',
                component:ShopCar
            },
            {
                name:"myHome",
                path:'myHome',
                component:MyHome
            },
            {
                name:'sort',
                path:'sort',
                component:Sort
            }
            
        ]
    },
    {
        name:'detail',
        path:'/detail',
        component:Detail,
        children:[
            {
                path:'',
                redirect:'shop'
            },
            {
                name:'detailShop',
                path:'shop',
                component:DetailShop, 
                meta:1
            },
            {
                name:'detailDetail',
                path:'detail',
                component:DetailDetail,
                meta:2
            },
            {
                name:'detailReview',
                path:'review',
                component:DetailReview,
                meta:3
            },
            {
                name:'detailRecommend',
                path:'recommend',
                component:DetailRecommend,
                meta:4
            },
        ]
    }
]
// const routes = [
//     {
//         path:'/',
//         redirect:'/position'
//     },
//     {
//         name:"position",
//         path:'/position',
//         component:Position
//     },
//     {
//         name:"list",
//         path:'/list',
//         component:List,
//         children:[
//             {
//                 path:'',
//                 redirect:'sort'
//             },
//             {
//                 name:'list-search',
//                 path:'search',
//                 component:ListHot
//             },
//             {
//                 name:'list-sort',
//                 path:'sort',
//                 component:ListSort
//             }
//         ]
//     },
//     {
//         name:"buy",
//         path:'/buy',
//         component:Buy
//     },
//     {
//         name:"shopCar",
//         path:'/shopCar',
//         component:ShopCar
//     },
//     {
//         name:"myHome",
//         path:'/myHome',
//         component:MyHome
//     },
//     {
//         name:'sort',
//         path:'/sort',
//         component:Sort
//     }
// ]

const router = new VueRouter({
    // mode:'history',
    routes
})

export default router