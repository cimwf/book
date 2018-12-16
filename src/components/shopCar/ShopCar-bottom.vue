<template>
    <div class="shopCar-bottom">
        <div class="bottom-left"> 
            <svg class="bottomSvg" viewBox="0 0 1024 1024" @click="shopCarSvg" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2249" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path v-if="bStop" fill="#ff4650" d="M512 0C229.205333 0 0 229.205333 0 512s229.205333 512 512 512 512-229.205333 512-512S794.794667 0 512 0z m6.314667 652.970667L457.898667 713.386667 246.784 502.101333l60.416-60.416 150.869333 150.869334 301.738667-301.738667 60.416 60.416-301.909333 301.738667z" p-id="2250"></path></svg>
            <span>全选</span>
        </div>
        <div class="bottom-right">
            <p>合计：<span>￥{{totalPrice}}</span></p>
            <button @click="total(totalPrice)">计算(<span>{{data.length}}</span>)</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Toast } from 'mint-ui';
import $ from 'jquery'
export default {
    data(){
        return {
            
        }
    },
    computed:{
        ...mapGetters('goods',['data','totalPrice','bStop'])
    },
    methods:{
        total(price){
            Toast({
                message: '您一共花费'+price+'元',
                position: 'middle',
                duration: 2000,
            });
        },
        shopCarSvg(){
            this.$store.commit('goods/shopCarSvg')
        },

    },
    watch:{
        bStop(){
            if(this.bStop){
                $('.bottomSvg').css('background','#fff')
            }else{
                $('.bottomSvg').css({
                    background:'#fafafa',
                    border:'1px solid #ccc'
                })
            }
        }
    }
}
</script>


<style lang="stylus" scoped>
    .shopCar-bottom
        position fixed
        bottom 0
        width 100%
        height 0.56rem
        background-color #fff
        display flex
        justify-content space-between
        align-items center
        >div
            display flex
            align-items center
        .bottom-left
            .bottomSvg 
                margin 0 0.1rem
                border-radius 50%
            span 
                color #787878
                font-size 0.14rem
        .bottom-right
            height 100%
            p 
                font-size 0.14rem
                span 
                    margin-right 0.05rem
                    color #ff2832
                    font-size 0.16rem
            button
                width 1rem
                height 100%
                font-size 0.14rem
                background-color #FB4741
                color #fff
                border 1px solid red
                margin-left 0.1rem
                
</style>



