<template>
    <div class="buy">
        <div>
            <BuyTop></BuyTop>
            <BuySwiper></BuySwiper>
            <BuyNav></BuyNav>
            <BuySales></BuySales>
            <BuyMain></BuyMain>
        </div>
    </div>
</template>

<script>
import BuyTop from 'components/buy/buy-top'
import BuySwiper from 'components/buy/buy-swiper'
import BuyNav from 'components/buy/buy-nav'
import BuySales from 'components/buy/buy-sales'
import BuyMain from 'components/buy/buy-main'
import BScroll from 'better-scroll'

export default {
    components:{
        BuyTop,
        BuySwiper,
        BuyNav,
        BuySales,
        BuyMain
    },
     mounted(){
        new BScroll('.buy',{
            probeType:1,
            click:true
        })
    }
}
</script>

<style lang="stylus" scoped>
    .buy
        height 100%
        >div
            height max-content
</style>
