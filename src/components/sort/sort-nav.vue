<template>
    <div class="sort-nav">
        <ul>
            <li class="active">
                新书热卖榜
            </li>
            <li>
                图书畅销榜
            </li>
            <li>
                童书新书榜
            </li>
            <li>
                童书畅销榜
            </li>
            <li>
                五星图书榜
            </li>
            <li>
                图书飙升榜
            </li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    mounted(){
        new BScroll('.sort-nav',{
            probeType:1,
            scrollX:true,
        })
    }
}
</script>


<style lang="stylus" scoped>
.sort-nav
    width 100%
    ul
        width max-content
        height 0.44rem
        background-color #fff
        display flex
        align-items center
        li
            display flex
            align-items center
            padding 0.1rem
            margin 0.2rem 
            &.active
                color #ff463c
</style>

