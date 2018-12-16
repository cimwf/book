<template>
    <div class="list-sort">
        <TabBar></TabBar>
        <ListList></ListList>
    </div>
</template>

<script>
import TabBar from 'components/list/list-tabbar'
import ListList from 'components/list/list-list'
export default {
    components:{
        TabBar,
        ListList
    }
}
</script>

<style lang="stylus" scoped>
    .list-sort
        overflow hidden
        flex 1
</style>



