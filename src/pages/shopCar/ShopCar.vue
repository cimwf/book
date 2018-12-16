<template>
    <div class="shopCar">
        <ShopCarTop></ShopCarTop>
        <ShopCarList></ShopCarList>
        <ShopCarBottom></ShopCarBottom>
    </div>
</template>

<script>
import ShopCarTop from 'components/shopCar/ShopCar-top'
import ShopCarList from 'components/shopCar/ShopCar-list'
import ShopCarBottom from 'components/shopCar/ShopCar-bottom'

export default {
    components:{
        ShopCarTop,
        ShopCarList,
        ShopCarBottom
    }
}
</script>

<style lang="stylus" scoped>
    .shopCar 
        display flex
        flex-direction column
        height 100%

</style>
