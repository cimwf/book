<template>
    <div class="buy-main">
        <!-- 最外层循环 -->
        <div v-for="(value,key) in content" :key="key">
            <!-- 样式1 -->
            <div class="main-col" v-if="value.navType==1" v-for="(val,k) in value.infos" :key="k" @click="buySkip">
                <div class="col-top">
                    <div class="col-top-left">
                        畅销榜第{{val.num}}名
                    </div>
                    <div class="col-top-right">
                        <span>更多</span>
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2499" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M258.176 903.552 315.712 961.088 766.336 510.4 764.352 508.544 764.736 508.16 322.688 66.176 264.704 124.096 651.136 510.592Z" p-id="2500"></path></svg>
                    </div>
                </div>
                <div class="col-main">
                    <div class="col-main-left">
                        <img :src="val.productImageUrl" alt="">
                    </div>
                    <div class="col-main-right">
                        <div class="right-title">{{val.productName}}</div>
                        <div class="right-price">
                            <p>¥ {{val.salePrice}}</p>
                            <p>¥ {{val.originPrice}}</p>
                        </div>
                        <div class="right-review">
                            <p>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3982" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M707.642842 908.85861a28.151154 28.151154 0 0 1-13.462616-3.426029L438.963567 766.06237h-84.658122c-157.39882 0-290.36518-138.757251-290.36518-303.007105v-52.240805c0-157.476591 130.259716-285.594527 290.36518-285.594527h314.853921c160.104441 0 290.36518 128.115889 290.36518 285.594527v52.240805c0 136.090515-89.01843 245.417479-223.897349 278.519387v139.4224a27.813462 27.813462 0 0 1-13.731746 23.971971 27.969005 27.969005 0 0 1-14.252609 3.889587z m-353.337397-727.912491c-129.248689 0-234.392378 103.126752-234.392378 229.867317v52.240805c0 131.735323 109.530602 247.282966 234.392378 247.282966h91.833545a28.222785 28.222785 0 0 1 13.458523 3.425006L679.653371 833.93827V718.976982c0-13.536294 9.770528-25.116027 23.162536-27.442003 121.940237-21.251 200.732767-110.932532 200.732767-228.480738v-52.240805c0-126.741589-105.140619-229.867318-234.390331-229.867317H354.305445z" p-id="3983"></path><path d="M357.804129 447.073268z m-41.981137 0c0 23.184025 18.795065 41.980113 41.980113 41.980114s41.980113-18.796088 41.980114-41.980114c0-23.185049-18.795065-41.980113-41.980114-41.980113-23.185049-0.001023-41.980113 18.794042-41.980113 41.980113M525.725606 447.073268z m-41.980113 0c0 23.184025 18.795065 41.980113 41.980113 41.980114s41.980113-18.796088 41.980114-41.980114c0-23.185049-18.795065-41.980113-41.980114-41.980113-23.185049-0.001023-41.980113 18.794042-41.980113 41.980113M693.648107 447.073268z m-41.979091 0c0 23.184025 18.795065 41.980113 41.979091 41.980114 23.185049 0 41.980113-18.796088 41.980113-41.980114 0-23.185049-18.795065-41.980113-41.980113-41.980113-23.184025-0.001023-41.97909 18.794042-41.979091 41.980113" p-id="3984"></path></svg>
                                <span>{{val.commentCount}}</span>
                            </p>
                            <p>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4702" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M511.232009 66.412572 616.888374 407.136697 958.801581 407.136697 682.188612 617.71674 787.844977 958.441888 511.232009 747.860822 234.618017 958.441888 340.275405 617.71674 63.662437 407.136697 405.57462 407.136697Z" p-id="4703"></path></svg>
                                <span>{{val.averageScore}}</span>
                            </p>
                            <p class="right-car">
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8633" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M263 865.66666667a1.96875 1.96875 0 1 0 126 0 1.96875 1.96875 0 1 0-126 0Z" p-id="8634"></path><path d="M704 865.66666667a1.96875001 1.96875001 0 1 0 126 0 1.96875001 1.96875001 0 1 0-126 0Z" p-id="8635"></path><path d="M857.9375 734.1875l-472.5 0c-25.3125 0-50.625-22.5-56.25-47.8125l-84.375-497.8125c-8.4375-47.8125-53.4375-84.375-101.25-84.375l-19.6875 0c-11.25 0-22.5 11.25-22.5 22.5 0 11.25 11.25 22.5 22.5 22.5l19.6875 0c25.3125 0 50.625 22.5 56.25 47.8125l84.375 497.8125c8.4375 47.8125 53.4375 84.375 101.25 84.375l472.5 0c11.25 0 22.5-11.25 22.5-22.5C880.4375 745.4375 872 734.1875 857.9375 734.1875z" p-id="8636"></path><path d="M835.4375 219.5l-503.4375 0c-11.25 0-22.5 11.25-22.5 22.5 0 11.25 11.25 22.5 22.5 22.5l503.4375 0c22.5 0 33.75 14.0625 28.125 36.5625l-61.875 247.5c-5.625 28.125-36.5625 50.625-64.6875 53.4375l-348.75 25.3125c-11.25 0-22.5 11.25-19.6875 25.3125 0 11.25 11.25 22.5 25.3125 19.6875l348.75-25.3125c47.8125-2.8125 92.8125-42.1875 104.0625-87.1875l61.875-247.5C919.8125 264.5 886.0625 219.5 835.4375 219.5z" p-id="8637"></path></svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 横向滚动样式 -->
            <div class="main-row" v-if="value.navType!=1">
                <!-- 背景图 -->
                <div class="row-bgc">
                    <!-- 头部 -->
                     <div class="buy-head">
                        <h3>{{value.navName}}</h3>
                        <p>
                            <span>更多</span>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2499" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M258.176 903.552 315.712 961.088 766.336 510.4 764.352 508.544 764.736 508.16 322.688 66.176 264.704 124.096 651.136 510.592Z" p-id="2500"></path></svg>
                        </p>
                    </div>
                    <!-- 滚动 -->
                    <div class="buy-scroll">
                        <ul>
                            <li v-for="(val,i) in value.infos" :key="i" @click="buySkip">
                                <img :src="val.productImageUrl" alt="">
                                <p>{{val.productName}}</p>
                                <span>¥{{val.salePrice}}</span>
                                <del>¥{{val.originPrice}}</del>
                            </li>
                            <li class="scroll-more">
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2613" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M0 512c0 281.6 230.4 512 512 512s512-230.4 512-512-230.4-512-512-512-512 230.4-512 512z m938.666667 0c0 234.66666699-192 426.666667-426.666667 426.666667s-426.666667-192-426.666667-426.666667 192-426.666667 426.666667-426.666667 426.666667 192 426.666667 426.666667z" fill="#2c2c2c" p-id="2614"></path><path d="M396.8 230.4c-17.066667 17.066667-17.066667 42.666667 0 59.733333l221.866667 221.866667-221.866667 221.866667c-17.066667 17.066667-17.066667 42.666667 0 59.733333 17.066667 17.066667 42.666667 17.066667 59.733333 0l251.733334-251.733333c17.066667-17.066667 17.066667-42.666667 0-59.733334l-251.733334-251.733333c-12.8-17.066667-42.666667-17.066667-59.733333 0z" fill="#2c2c2c" p-id="2615"></path></svg>
                                <div>查看更多</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import http from 'utils/http'
import $ from 'jquery'
import { Indicator } from 'mint-ui';

export default {
    data(){
        return {
            content:'',
        }
    },
    async mounted(){
         Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        let result = await http({
            method:'get',
            url:'/api/touch/optimization/feed?page=0&udid=43e2f063b5b66d8b2385d3adc80775ed&permanent_id=20181104165047701865021724226781270&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1541759856387&tc=ef8fd83d0025f634b21ff5db1ef59241'
        })
        this.content = result.data.result.columns

        this.$nextTick(function(){
            $(".buy-scroll").each(function(){
                new BScroll(this,{
                    scrollX:true,
                    probeType:1
                })
            })
        })
        Indicator.close();
        
    },
    methods:{
        buySkip(){
            this.$router.push('/home/sort')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.buy-main
    width 100%
    height max-content
    >div
        width 100%
        height 100%
        .main-row
            .row-bgc
                width 100%
                height 2.34rem
                background #fff url(http://z.dangdang.com/static/img/9.9-background.d4afbba.png) no-repeat
                background-size contain
                padding 0 0.13rem 0.13rem
                .buy-head
                    width 100%
                    height 0.4rem
                    display flex
                    align-items center
                    position relative
                    justify-content space-between
                    h3
                        margin-left 1.3rem
                        font-size 0.18rem
                        color #ffffff
                        font-weight bold
                    p
                        font-size 0.12rem
                        color #ffffff
                        path 
                            fill #ffffff
                .buy-scroll
                    width 100%
                    ul
                        display flex
                        width max-content
                        li
                            width 1rem
                            height 1.66rem
                            background-color #fff
                            border-radius 0.05rem
                            display flex
                            flex-direction column
                            align-items center
                            justify-content space-around
                            box-shadow 0.02rem 0.02rem 0.02rem #ccc
                            margin-right 0.1rem
                            img 
                                width 100%
                                padding 0.03rem 0
                            p
                                width 100%
                                height 0.2rem
                                font-size 0.12rem
                                ellipsis null,1
                            span 
                                font-size 0.16rem
                                color red
                                display inline-block
                            del
                                font-size 0.14rem
                                text-decoration line-through
                                color #aeaeae
                            &.scroll-more
                                background-color transparent
                                box-shadow none
                                justify-content center
                                color #ffffff
                                path 
                                    fill #fff

.main-col
    width 100%
    height 1.74rem
    background-color #fff
    margin-top 0.1rem
    padding 0.08rem 0
    .col-top
        width 100%
        height 0.25rem
        padding-right 0.1rem
        display flex
        justify-content space-between
        align-items center
        .col-top-left
            width 1rem
            height 0.22rem
            padding 0.02rem 0.1rem
            font-size 0.14rem
            color #fff
            background-image: linear-gradient(133deg,#f296bd,#ee3b31);
            border-bottom-right-radius 0.1rem
        .col-top-right
            font-size 0.12rem
            color #a1a1a1
            path 
                fill #a1a1a1
    .col-main
        padding 0.09rem 0.06rem
        width 100%  
        height 1.10rem
        display flex
        .col-main-left  
            width 1.10rem
            height 1.10rem
            margin-right 0.1rem
            img 
                width 100%
        .col-main-right
            width 2.44rem
            .right-title
                width 100%
                font-weight normal
                height 0.2rem
                ellipsis null,1
                color: #383838
            .right-price
                display flex
                margin-top 0.3rem
                p
                    margin-right 0.1rem
                    &:nth-child(1)
                        font-size 0.14rem
                        color #f23440
                    &:nth-child(2)
                        font-size 0.12rem
                        color #777
                        text-decoration line-through
            .right-review
                display flex
                justify-content flex-end
                margin-top 0.1rem
                p
                    display flex
                    align-items center
                    span
                        font-size 0.14rem
                        color #98a6aa
                        margin-right 0.1rem
                        margin-left 0.02rem
                    path 
                        fill #98a6aa
                    &.right-car
                        border 1px solid #ccc
                        padding 0.02rem
                        border-radius 0.05rem
                        path
                            fill #f22b2b
</style>

