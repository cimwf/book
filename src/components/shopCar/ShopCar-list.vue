<template>
    <div class="shopCar-list">
        <div>
            <div class="shopEmpty" v-if='data.length==0'>
                <p>您还没有购买任何商品</p>
                <div>
                    <div @click="goSort">逛一逛</div>
                    <div>我的收藏</div>
                </div>
            </div>
            <div class="shop" v-for="(value,key) in data" :key='key'>
                <div class="shop-top">
                    <div class="shop-top-left">
                        <!-- <input type="checkbox" v-model="value.reason"> -->
                        <svg :class="'svg'+key" viewBox="0 0 1024 1024" @click="shopSvg(value,key)" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2249" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path v-if="value.stop" fill="#ff4650" d="M512 0C229.205333 0 0 229.205333 0 512s229.205333 512 512 512 512-229.205333 512-512S794.794667 0 512 0z m6.314667 652.970667L457.898667 713.386667 246.784 502.101333l60.416-60.416 150.869333 150.869334 301.738667-301.738667 60.416 60.416-301.909333 301.738667z" p-id="2250"></path></svg>
                        <span>巴拉巴拉旗舰店</span>
                    </div>
                    <div class="shop-top-right" @click="shopDel(value)">
                        {{value.bStop ? '编辑' : '完成'}}
                    </div>
                </div>
                <div class="shop-bottom" v-if="value.bStop">
                    <!-- <input type="checkbox" v-model='value.reason'> -->
                    <svg :class="'svg'+key" viewBox="0 0 1024 1024" version="1.1" @click="shopSvg(value,key)" xmlns="http://www.w3.org/2000/svg" p-id="2249" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path v-if="value.stop" fill="#ff4650" d="M512 0C229.205333 0 0 229.205333 0 512s229.205333 512 512 512 512-229.205333 512-512S794.794667 0 512 0z m6.314667 652.970667L457.898667 713.386667 246.784 502.101333l60.416-60.416 150.869333 150.869334 301.738667-301.738667 60.416 60.416-301.909333 301.738667z" p-id="2250"></path></svg>
                    <div class="bottom-img">
                        <img :src="value.image_url" alt="">
                    </div>
                    <div class="bottom-detail">
                        <p>{{value.name}}</p>
                        <span>￥{{value.price}}</span>
                        <del>尾品汇</del>
                        <h3>x{{value.quantity}} 深咖</h3>
                    </div>
                </div>
                <div class="shop-redact" v-else>
                    <div>
                        <img :src="value.image_url" alt="">
                    </div>
                    <div>
                        <button @click="shopReduce(value)">-</button>
                        <input type="text" :value='value.quantity'>
                        <button @click="shopAdd(value)">+</button>
                    </div>
                    <div @click='del($event,key)'>
                        删除
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Checklist } from 'mint-ui';
import {mapGetters} from 'vuex'
import Vue from 'vue'
import BScroll from 'better-scroll'
import http from 'utils/http'
import $ from 'jquery'
import { MessageBox } from 'mint-ui';
Vue.component(Checklist.name, Checklist);
export default {
    data(){
        return {
            content:[],
            bStop:true
        }
    },

    computed:{
        ...mapGetters('goods',['data']),
    },
    mounted(){
        new BScroll('.shopCar-list',{
            probeType:1,
            click:true
        })
    },
    methods:{
        shopDel(value){
            this.$store.commit('goods/updatebStop',value)
        },
        shopReduce(item){
            this.$store.commit('goods/reduce',item)
        },
        shopAdd(item){
            this.$store.commit('goods/add',item)
        },
        del(e,key){
            MessageBox({
                title: '提示',
                message: '确定执行此操作?',
                showCancelButton: true
            }).then(action => {
                 if (action == 'confirm') {     
                        this.$store.commit('goods/del',key)
                    }
            });
            
        },
        goSort(){
            this.$router.push('/home/sort')
        },
        shopSvg(value,key){
            this.$store.commit('goods/shopSvg',value)
        }
    },
    watch:{
        data(){
            this.data.forEach((value,key)=>{
                if(value.stop){
                    $('.svg'+key).css('background','#fff')
                }else{
                    $('.svg'+key).css({
                        background:'#fafafa',
                        border:'1px solid #ccc'
                    })
                }
            })
        }
    }
    
}
</script>


<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.shopCar-list
    flex 1
    overflow hidden
    >div
        height max-content
        .shopEmpty
            width 100%
            height 3rem
            padding 2rem 0 0.22rem
            display flex
            flex-direction column
            align-items center   
            color #777  
            background #f2f2f2 url('http://cart.m.dangdang.com./images/cart_null.gif') center 0.3rem no-repeat
            background-size 2rem
            >div
                margin-top 0.1rem
                display flex
                justify-content space-around
                align-items center
                width 100%
                >div
                    width 1.27rem
                    height 0.4rem
                    border 1px solid #777
                    border-radius 0.05rem
                    display flex
                    justify-content center
                    align-items center
                    font-size 0.16rem


        .shop
            width 100%
            background-color #fff
            margin-bottom 0.1rem
            .shop-top 
                display flex
                justify-content space-between
                padding 0 0.1rem 
                width 100%
                height 0.42rem
                align-items center
                border-bottom 1px solid #ccc
                .shop-top-left
                    display flex
                    align-items center
                    input  
                        margin-right 0.1rem
                    span    
                        color #787878
                        font-size 0.16rem
                        margin-left 0.1rem
                .shop-top-right
                    color #787878
            .shop-bottom
                width 100%
                height 1.32rem
                background-color #fff
                display flex
                padding 0 0.1rem
                align-items center
                input 
                    margin-right 0.1rem
                .bottom-img
                    width 1.08rem
                    height 1.08rem
                    margin-right 0.1rem
                    img 
                        width 100%
                .bottom-detail
        
                    flex 1
                    height 1.08rem
                    p
                        height 0.4rem
                        font-size 0.14rem
                        width 100%
                        ellipsis null,2
                    span 
                        color #ff2832
                        font-size 0.14rem
                        display block
                    del 
                        font-size 0.12rem
                        color #ffffff
                        background-color #ff5753
                        display inline-block
                    h3 
                        font-size 0.12rem
                        font-weight normal
                        color #646464


        .shop-redact
            width 100%
            height 1.32rem
            background-color #fff
            display flex
            padding 0 0.1rem
            justify-content space-between
            align-items center
            >div
                &:nth-child(1)
                    width 1.08rem
                    height 1.08rem
                    margin-right 0.1rem
                    img 
                        width 100%
                &:nth-child(2)
                    display flex
                    justify-content center
                    align-items center
                    margin-right 0.1rem
                    button 
                        width 0.43rem
                        height 0.43rem
                        border 1px solid #cccccc
                        background-color #fff
                    input 
                        width 0.65rem
                        height 0.43rem
                        border none 
                        border-top 1px solid #cccccc
                        border-bottom 1px solid #cccccc
                        text-align center
                &:nth-child(3)
                    width 0.46rem
                    height 1.08rem
                    background-color #ff4650
                    display flex
                    justify-content center
                    align-items center
                    font-size 0.16rem
                    color #fff


svg
    border-radius 50% 




</style>

