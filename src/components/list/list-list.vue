<template>
    <div id="list-list">
        <ListGlideLeft></ListGlideLeft>
    </div>
</template>

<script>
import ListGlideLeft from './list-glide-left'
export default {
    components:{
        ListGlideLeft
    }
}
</script>


<style lang="stylus" scoped>
    div
        width 100%
        background-color #eff4fa
        height 100%
        display flex
        justify-content space-between
</style>

