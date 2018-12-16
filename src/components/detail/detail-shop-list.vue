<template>
    <div class="detail-shop-list">
        <div class="detail-img">
            <img :src="content.image_url" alt="">
            <img src="http://img63.ddimg.cn/2018/11/7/2018110718102832812.jpg" alt="">
        </div>
        <div class="list-detail">
            <h3>{{content.name}}</h3>
            <p>{{content.subtitle}}</p>
            <div class="detail-price">
                <span>￥{{content.price}}</span>
                <span>(4.50折)</span>
            </div>
            <div class="detail-del">定价<del>￥45.00</del></div>
            <span class="detail-limit">限时抢</span>
        </div>
    </div>
</template>
<script>
import http from 'utils/http'
export default {
    data(){
        return {
            content:''
        }
    },
    async beforeCreate(){
        let result = await http({
            method:'get',
            url:'/cart.php?action=cart_recommend&productIds=24198400&img_size=h'
        })
        let id = location.href.split('?')[1].split('=')[1]
        console.log(result.data.data)
        for(var i=0;i<83;i++){
            if(result.data.data[i].product_id == id){
                this.content = result.data.data[i]
            }
        }
    },

}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
    .detail-shop-list
        background-color #fff
        height max-content
       
       .detail-img
            width 100%
            height max-content
            img     
                width 100% 
        .list-detail
            width 100%
            padding 0.05rem
            h3
                font-size 0.16rem
                height 0.26rem
                ellipsis null,1
                color #4d525d
            p
                text-indent 2em
                color rgb(150,150,150)
            .detail-price
                margin-top 0.1rem
                span 
                    &:nth-child(1)
                       color #ff463c
                       font-size 0.14rem
                       margin-right 0.05rem
                    &:nth-child(2)
                        font-size 0.12rem
                        color #969696 
            .detail-del
                font-size 0.12rem
                color #969696 
                del 
                    text-decoration line-through
            .detail-limit
                color #f2303c
                border 1px solid #f2303c
                display inline-block
                margin 0.05rem 0
                border-radius 0.05rem
</style>

