<template>
<div class="list-glide-right-scroll">
    <div>

    <div class="list-glide-right" v-if="content">
        <div v-if="content.banner.length>0">
            <img :src="content.banner[0].img" alt="">
        </div>


        <div class="list-glide-nav">
            <div class="right-nav" v-for="(value,key) in content.mini_banner.content" :key="key" :len="content.mini_banner.content.length">
                <div>
                    <h3>{{value.promo_title}}</h3>
                    <p>{{value.promo_text}}</p>
                </div>
                <div>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2952" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M258.176 903.552L315.71199999 961.088 766.336 510.4 764.352 508.544 764.736 508.16 322.688 66.17599999 264.704 124.096 651.136 510.592Z" p-id="2953"></path></svg>
                </div>
            </div>
        </div>

        <div v-for="(value,key) in content_main" :key="key" class="list-glide-right-main">
            <div v-if="value.style_type == 2" class="style2">
                <h4>{{value.group_name}}</h4>
                <ul>
                    <li v-for="(val,k) in value.detail" :key="k" @click="listSkip">
                        <div>
                            <img :src="val.icon" alt="">
                        </div>
                        <p>{{val.title}}</p>
                    </li>
                </ul>
            </div>
            <!-- class="list-glide-right-main" -->
            <!-- v-if="value.detail.length==0 ? false : true" -->
            <!-- 循环h4部分 -->
            <div v-if="value.style_type == 1" class="style1" >
                <div>
                    <h4>
                        <span>{{value.group_name}}</span>
                        <span>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2952" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="12"><path d="M258.176 903.552L315.71199999 961.088 766.336 510.4 764.352 508.544 764.736 508.16 322.688 66.17599999 264.704 124.096 651.136 510.592Z" p-id="2953"></path></svg>
                        </span>
                    </h4>
                    <div>
                        <span>{{value.more}}</span>
                        <span>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2001" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M767.54821 447.784466" p-id="2002"></path><path d="M703.58748 639.666658" p-id="2003"></path><path d="M839.760882 387.753231 507.21809 84.47495l-1.050935 0.855484c-12.841469-13.075807-31.488155-21.309328-52.250014-21.309328-38.733163 0-70.13229 28.636201-70.13229 63.960731 0 16.33606 6.725168 31.233352 17.774829 42.537815l-0.230244 0.187265 331.152119 302.009382c23.537066 21.465894 23.537066 56.591903 0 78.057797L403.084405 851.184049l0.160659 0.13303c-12.046361 11.484565-19.460214 27.04496-19.460214 44.192501 0 35.32453 31.399127 63.960731 70.13229 63.960731 21.286816 0 40.34487-8.661264 53.206806-22.317285l0.039909 0.032746 332.597027-303.3274C913.971048 566.17997 913.971048 455.432657 839.760882 387.753231z" p-id="2004"></path></svg>
                        </span>
                    </div>
                </div>
                <!-- 循环ul部分 -->
                <div>
                    <ul>
                        <li v-for="(val,k) in value.detail" :key="k"  v-if="(bStop[key] ? (k<5) : true ) " >
                            <a href="javascript:;">
                                {{val.title}}
                            <svg v-if="val.hot==1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10305" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><path d="M273.963 702.432c-105.006 0-190.431-85.424-190.431-190.431 0-105.006 85.424-190.431 190.431-190.431h476.076c105.007 0 190.431 85.424 190.431 190.431s-85.424 190.431-190.431 190.431H273.963z" fill="#EA3600" p-id="10306"></path><path d="M750.038 340.612c94.655 0 171.388 76.732 171.388 171.388 0 94.654-76.732 171.388-171.388 171.388H273.962c-94.655 0-171.388-76.733-171.388-171.388s76.733-171.388 171.388-171.388h476.076m0-38.086H273.962c-115.504 0-209.474 93.969-209.474 209.474 0 115.504 93.97 209.474 209.474 209.474h476.076c115.505 0 209.474-93.97 209.474-209.474 0-115.504-93.969-209.474-209.474-209.474z" fill="#FFFFFF" p-id="10307"></path><path d="M225.678 401.338h25.095v93.73h106.731v-93.73h24.793v221.324h-24.793V516.837H250.773v105.825h-25.095V401.338zM430.965 511.093c0-70.449 38.701-113.686 93.428-113.686 55.028 0 93.729 43.236 93.729 113.686 0 70.752-38.701 115.5-93.729 115.5-54.727 0-93.428-44.748-93.428-115.5z m161.457 0c0-56.541-26.909-91.613-68.029-91.613-40.818 0-67.728 35.073-67.728 91.613 0 56.843 26.91 93.428 67.728 93.428 41.12 0 68.029-36.585 68.029-93.428zM705.197 422.503h-67.425v-21.166h160.55v21.166h-67.728v200.159h-25.397V422.503z" fill="#FFFFFF" p-id="10308"></path></svg>
                            </a>
                        </li>

                        <li class="spread" @click="shrink(key)" v-if="bStop[key] && value.detail.length>=6" >
                            <a href="javascript:;" >
                                展开
                            <span>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9578" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M1.269 512c0-281.619 229.089-510.73 510.73-510.73 281.6 0 510.71 229.11 510.71 510.73s-229.11 510.73-510.71 510.73c-281.641 0-510.73-229.11-510.73-510.73zM967.249 512c0-251.023-204.247-455.25-455.25-455.25-250.982 0-455.229 204.227-455.229 455.25 0 251.003 204.247 455.209 455.229 455.209 251.003 0 455.25-204.206 455.25-455.209z" fill="" p-id="9579"></path><path d="M232.488 399.114c0.025-15.306 12.44-27.704 27.75-27.704 7.641 0 14.561 3.089 19.58 8.085l232.181 232.16 232.202-232.161c5.052-5.21 12.114-8.443 19.932-8.443 15.326 0 27.75 12.424 27.75 27.75 0 7.829-3.242 14.899-8.456 19.945l-251.809 251.768c-5.018 5.019-11.951 8.123-19.61 8.123s-14.591-3.103-19.61-8.123l-251.802-251.761c-5.010-4.983-8.111-11.881-8.11-19.503 0-0.048 0-0.096 0-0.146z" fill="" p-id="9580"></path></svg>
                            </span>
                            </a>
                        </li>
                        <li class="spread" v-if="!bStop[key] && value.detail.length>=6" @click="shrink(key)">
                            <a href="javascript:;">
                                收起
                            <span>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4539" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M990.81 512c0 264.018-214.771 478.809-478.809 478.809-264 0-478.791-214.791-478.79-478.809s214.791-478.809 478.79-478.809c264.038 0 478.809 214.791 478.809 478.809zM85.204 512c0 235.334 191.482 426.797 426.797 426.797 235.295 0 426.777-191.463 426.777-426.797 0-235.315-191.482-426.758-426.776-426.758-235.315 0-426.797 191.444-426.798 426.758z" fill="" p-id="4540"></path><path d="M774.043 617.831c-0.023 14.349-11.663 25.972-26.016 25.972-7.163 0-13.651-2.896-18.356-7.58l-217.67-217.65-217.689 217.651c-4.735 4.884-11.357 7.915-18.686 7.915-14.368 0-26.016-11.647-26.016-26.016 0-7.34 3.039-13.968 7.927-18.698l236.071-236.032c4.704-4.705 11.204-7.615 18.384-7.615s13.679 2.908 18.384 7.615l236.064 236.026c4.697 4.672 7.604 11.138 7.603 18.284 0 0.045 0 0.091 0 0.137z" fill="" p-id="4541"></path></svg>
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div v-if="value.style_type == 3" class="style3">
                <div>
                    <h4>
                        <span>{{value.group_name}}</span>
                        <span>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2952" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="12"><path d="M258.176 903.552L315.71199999 961.088 766.336 510.4 764.352 508.544 764.736 508.16 322.688 66.17599999 264.704 124.096 651.136 510.592Z" p-id="2953"></path></svg>
                        </span>
                    </h4>
                    <div>
                        <span>{{value.more}}</span>
                        <span>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2001" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M767.54821 447.784466" p-id="2002"></path><path d="M703.58748 639.666658" p-id="2003"></path><path d="M839.760882 387.753231 507.21809 84.47495l-1.050935 0.855484c-12.841469-13.075807-31.488155-21.309328-52.250014-21.309328-38.733163 0-70.13229 28.636201-70.13229 63.960731 0 16.33606 6.725168 31.233352 17.774829 42.537815l-0.230244 0.187265 331.152119 302.009382c23.537066 21.465894 23.537066 56.591903 0 78.057797L403.084405 851.184049l0.160659 0.13303c-12.046361 11.484565-19.460214 27.04496-19.460214 44.192501 0 35.32453 31.399127 63.960731 70.13229 63.960731 21.286816 0 40.34487-8.661264 53.206806-22.317285l0.039909 0.032746 332.597027-303.3274C913.971048 566.17997 913.971048 455.432657 839.760882 387.753231z" p-id="2004"></path></svg>
                        </span>
                    </div>
                </div>

                <div>
                    <ul>
                        <li v-for="(val,k) in value.detail" :key="k" v-if="bStop ? (k<5) : true">
                            {{val.title}}
                        </li>
                        <li class="spread" @click="shrink()" v-if="bStop && value.detail.length>=6" >
                            <a href="javascript:;" >
                                展开
                            <span>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9578" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M1.269 512c0-281.619 229.089-510.73 510.73-510.73 281.6 0 510.71 229.11 510.71 510.73s-229.11 510.73-510.71 510.73c-281.641 0-510.73-229.11-510.73-510.73zM967.249 512c0-251.023-204.247-455.25-455.25-455.25-250.982 0-455.229 204.227-455.229 455.25 0 251.003 204.247 455.209 455.229 455.209 251.003 0 455.25-204.206 455.25-455.209z" fill="" p-id="9579"></path><path d="M232.488 399.114c0.025-15.306 12.44-27.704 27.75-27.704 7.641 0 14.561 3.089 19.58 8.085l232.181 232.16 232.202-232.161c5.052-5.21 12.114-8.443 19.932-8.443 15.326 0 27.75 12.424 27.75 27.75 0 7.829-3.242 14.899-8.456 19.945l-251.809 251.768c-5.018 5.019-11.951 8.123-19.61 8.123s-14.591-3.103-19.61-8.123l-251.802-251.761c-5.010-4.983-8.111-11.881-8.11-19.503 0-0.048 0-0.096 0-0.146z" fill="" p-id="9580"></path></svg>
                            </span>
                            </a>
                        </li>
                        <li class="spread" v-if="!bStop && value.detail.length>=6" @click="shrink">
                            <a href="javascript:;">
                                收起
                            <span>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4539" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M990.81 512c0 264.018-214.771 478.809-478.809 478.809-264 0-478.791-214.791-478.79-478.809s214.791-478.809 478.79-478.809c264.038 0 478.809 214.791 478.809 478.809zM85.204 512c0 235.334 191.482 426.797 426.797 426.797 235.295 0 426.777-191.463 426.777-426.797 0-235.315-191.482-426.758-426.776-426.758-235.315 0-426.797 191.444-426.798 426.758z" fill="" p-id="4540"></path><path d="M774.043 617.831c-0.023 14.349-11.663 25.972-26.016 25.972-7.163 0-13.651-2.896-18.356-7.58l-217.67-217.65-217.689 217.651c-4.735 4.884-11.357 7.915-18.686 7.915-14.368 0-26.016-11.647-26.016-26.016 0-7.34 3.039-13.968 7.927-18.698l236.071-236.032c4.704-4.705 11.204-7.615 18.384-7.615s13.679 2.908 18.384 7.615l236.064 236.026c4.697 4.672 7.604 11.138 7.603 18.284 0 0.045 0 0.091 0 0.137z" fill="" p-id="4541"></path></svg>
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import $ from 'jquery'
import Vue from 'vue'
export default {
    props:['content'],
    data(){
        return {
            content_main:'',
            //展开收缩
            bStop:[],
        }
    },
    methods:{
        shrink (key) {
            this.bStop[key] = !this.bStop[key]
            Vue.set(this.bStop,key,this.bStop[key])
        },
        listSkip(){
            this.$router.push('/home/sort')
        }
    },
    computed:{

    },
    updated(){
        let len = $('.right-nav').attr('len')
        if(len == 1){
            $('.right-nav').css({
                width:100+"%"
            })
        }else{
            $('.right-nav').css({
                width:1.4+"rem"
            })
        }
    },
    watch:{
        async content(){
            this.content_main = await this.content.pile[0].group;
            for(var i=0;i<this.content_main.length;i++){
                this.content_main[i].bStop = true
                this.bStop[i] = true
            }
            
            let bscroll = new BScroll('.list-glide-right-scroll',{
                probeType:1,
                click:true
            })
            this.$nextTick(()=>{
                bscroll.refresh()
            })
        }

    }
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/border'
.list-glide-right-scroll
    flex 1
    overflow hidden
    .list-glide-right
        margin-left 0.1rem
        height 100%
        >div
            width 100%
            margin-top 0.1rem
            &:nth-child(1)
                img 
                    width 100%
            &.list-glide-nav
                display flex
                justify-content space-between
                >.right-nav
                    width 1.4rem
                    height 0.6rem
                    background-color #fff
                    padding 0.13rem 0.06rem 0.13rem 0.13rem 
                    display flex
                    justify-content space-between
                    p
                        font-size 0.12rem
                        color #a6a6a6
                    div
                        &:nth-child(2)
                            display flex
                            justify-content flex-start
                            align-items center
                    &:nth-child(2)
                        margin-left 0.1rem
            h4
                padding-left 0.08rem
                font-size 0.12rem
            &.list-glide-right-main
                .style2
                    background-color #fff   
                    padding 0.06rem
                    margin-top 0.1rem
                    ul
                        display flex
                        flex-wrap wrap
                        padding-top 0.1rem
                        li
                            width 0.8rem
                            height 1.15rem
                            margin 0 0.05rem
                            div 
                                width 100%
                                padding 0 0.06rem 0.02rem
                                img 
                                    width 100%
                            p
                                width 100%
                                height 0.26rem
                                text-align center
                                margin-top 0.1rem
                                font-size 0.12rem
                                color: #4d525d
                .style1
                    background-color #fff
                    padding 0.06rem
                    margin-top 0.1rem
                    div
                        &:nth-child(1)
                            display flex
                            justify-content space-between
                            h4
                                display flex
                                span 
                                    &:nth-child(2)
                                        margin-top 0.03rem
                                        margin-left 0.03rem
                            >div
                                color #969696
                                span 
                                    &:nth-child(2)
                                        margin-right 0.1rem
                                        path 
                                            fill #969696
                                    &:nth-child(1)
                                        font-size 0.12rem
                                        margin-right 0.02rem
                        &:nth-child(2)
                            padding 0 0.14rem
                            ul
                                display flex
                                flex-wrap wrap
                                li
                                    width 0.8rem
                                    height 0.48rem
                                    padding 0.02rem
                                    display flex
                                    justify-content center
                                    align-items center
                                    font-size 0.12rem
                                    a
                                        display flex
                                        justify-content center
                                        align-items center
                                        width 100%
                                        height 0.14rem
                                        border-right 0.1px solid #ccc
                                        color #4d525d
                                        text-align center
                                        position relative
                                        >svg     
                                            position absolute 
                                            top -0.28rem
                                            right 0.03rem
                                    &:nth-child(3n)
                                        a
                                            border-right none
                                        span 
                                            margin 0.02rem
                                    &.spread
                                        a
                                            color #bababa
                                        path 
                                            color #bababa
                .style3
                    background-color #fff
                    padding 0.06rem
                    margin-top 0.1rem
                    div
                        &:nth-child(1)
                            display flex
                            justify-content space-between
                            h4
                                display flex
                                span 
                                    &:nth-child(2)
                                        margin-top 0.03rem
                                        margin-left 0.03rem
                            >div
                                color #969696
                                span 
                                    &:nth-child(2)
                                        margin-right 0.1rem
                                        path 
                                            fill #969696
                                    &:nth-child(1)
                                        font-size 0.12rem
                                        margin-right 0.02rem
                        &:nth-child(2)
                            padding 0 0.14rem
                            ul
                                li
                                    width 100%
                                    height 0.44rem
                                    line-height 0.44rem
                                    font-size 0.13rem
                                    color #4d525d
                                    border 0 0 1px 0,#ccc
                                    &:last-child
                                        border 0 0 0 0
                                        text-align center
                                        a
                                            color #bcbcbd
                                        path 
                                            fill #bcbcbd




</style>


