<template>
    <div>
        <ul>
            <li v-for="(value,key) in position_list_data" :key="key">
                <div>
                    <img :src="value.image_url" alt="">
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
import { Indicator } from 'mint-ui';
export default {
    props:{
        position_list_data:Array
    },
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
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

