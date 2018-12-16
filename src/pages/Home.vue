<template>
    <div class="home-warp">
        <main>
            <router-view></router-view>
        </main>
        <TabBar></TabBar>
    </div>
</template>
<script>
import TabBar from 'components/layout/TabBar'
import Position from './position/Position'
 
export default {
    data(){
        return {
            route:this.$route.name
        }
    },
    components:{
        TabBar,
        Position
    },
   
}
</script>
<style lang="stylus" scoped>
    .home-warp
        display flex
        flex-direction column
        height 100%
        main
            flex 1
            overflow hidden
</style>


