<template>
    <div class="list">
        <ListTop></ListTop>
        <router-view></router-view>
    </div>
</template>

<script>
import ListTop from 'components/list/list-top'

export default {
    components:{
        ListTop
    }
}
</script>

<style lang="stylus" scoped>
.list
    display flex
    flex-direction column
    height 100%
    
</style>
