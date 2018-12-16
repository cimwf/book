<template>
    <div class="detail">
        <DetailTop></DetailTop>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
         <div class="review-bigImg" @click="shrink" v-if="stop">
            <img :src="img" alt="">
        </div>
    </div> 
</template>
<script>

import DetailTop from 'components/detail/detail-top'
import DetailShop from 'pages/detail/Detail-shop'
import DetailDetail from 'pages/detail/Detail-detail'
import DetailReview from 'pages/detail/Detail-review'
import DetailRecommend from 'pages/detail/Detail-recommend'
import $ from 'jquery'
import { mapState, mapGetters } from 'vuex'
export default {
    data(){
        return {
            transitionName:'',
            route:'detailShop',
        }
    },
    components:{
        DetailTop,
        DetailShop,
        DetailDetail,
        DetailReview,
        DetailRecommend
    },
    computed:{
        ...mapGetters('products',['stop','img'])
    },
    methods:{
        shrink(){
            this.$store.commit('products/changeBstop')
            $('.review-bigImg').css('display','none')
           
        }
    },
    watch: {
        $route (to, from) {
        if ( to.meta > from.meta ) {
            this.transitionName = 'slide-left'
        } else {
            this.transitionName = 'slide-right'
        }
        }
  }
}
</script>

<style lang="stylus" scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 300ms;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}


.detail
    display flex
    flex-direction column
    height 100%
    // .page-tab-container
    //     flex 1
    //     .page-tabbar-tab-container
    //         height 100%
    //         >>>.mint-tab-container-wrap
    //             height 100%
            

    .review-bigImg
        position absolute
        width 100%
        height 100%
        top 0
        left 0
        display flex
        align-items center
        background-color #4d525d
        img 
            width 100%
</style>


