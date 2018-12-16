<template>
    <div class="detail-recommend" id='container'>
        <ul>
            <li v-for="(value,key) in content" :key="key">
                <div>
                    <img  v-lazy.container="value.image_url"  alt="">
                </div>
                <p>{{value.name}}</p>
                <span :class="'span'+(val.type+1)" v-for="(val,key1) in value.productTags" :key="key1">
                    {{val.name}}
                </span>
                <b>￥{{value.price}}</b>
            </li>
        </ul>
    </div>
</template>

<script>
import { Lazyload } from 'mint-ui';
import Vue from 'vue'
Vue.use(Lazyload);
import { Indicator } from 'mint-ui';
import http from 'utils/http'
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            content:'',
            item:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542034693453&di=589c4b9c63bfac01808d82164af1954f&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1679877519%2C1930520815%26fm%3D214%26gp%3D0.jpg"
        }
    },
    async mounted(){
        let result = await http({
            method:'get',
            url:'/h5ajax.php?action=home&img_size=h&perm_id=20181104165023265397952807879651932'
        })
        this.content = result.data.reco_list
        new BScroll('.detail-recommend',{})
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
.detail-recommend
    flex 1
    overflow hidden
    ul
        display flex
        flex-wrap wrap
        justify-content space-between
        margin-top 0.2rem
        li
            width 1.85rem
            height 2.7rem
            background-color #fff
            margin-bottom 0.05rem
            background #fff url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542036226591&di=099b05f723e2c661b5f842a7df0af5c8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D596554798%2C2725760931%26fm%3D214%26gp%3D0.jpg') no-repeat
            background-size contain
            img 
                width 100%
            p
                width 100%
                height 0.36rem
                font-size 0.13rem
                ellipsis null,2
                color #000
                font-weight 400
            .span1 
                border 1px solid #f2303c
                color #f2303c
                margin-right 0.05rem
                font-weight normal
                border-radius 0.03rem
                text-align center
            .span2
                border 2px solid #f2303c
                background-color #f2303c
                color #fff
                font-size 0.12rem
                font-weight 100
                margin-right 0.05rem
                text-align center
            b
                display block
                color #e53e30
</style>

