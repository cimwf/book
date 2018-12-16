
<template>
    <div class="sort">
        <div>
            <SortTop></SortTop>
            <SortNav></SortNav>
            <SortList></SortList>
        </div>
    </div>
</template>

<script>
import SortTop from 'components/sort/sort-top'
import SortNav from 'components/sort/sort-nav'
import SortList from 'components/sort/sort-list'
import BScroll from 'better-scroll'
export default {
    components:{
        SortTop,
        SortNav,
        SortList
    },
    mounted(){
        new BScroll('.sort',{
            probeType:1,
            click:true
        })
    }
}
</script>

<style lang="stylus" scoped>
    .sort
        height 100%
        >div
            height max-content
</style>

