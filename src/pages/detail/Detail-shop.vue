
<template>
  <div class="detail-shop">
        <div class="detail-shop-1">
         <DetailShopList></DetailShopList>
        </div>
     <DetailShopBottom></DetailShopBottom>
  </div>
</template>



<script>
import DetailShopBottom from 'components/detail/detail-shop-bottom'
import DetailShopList from 'components/detail/detail-shop-list'
import BScroll from 'better-scroll'
import $ from 'jquery'
export default {
    data(){
        return {
            //三个点的开关
            bStop:true,
            startX:'',
            startY:'',
            direction:''
        }
    },
    components:{
        DetailShopBottom,
        DetailShopList
    },
    updated(){

    },  
    mounted(){
        new BScroll('.detail-shop-1',{
            probeType:1
        })
    },
    methods:{
        goback(){
            this.$router.go(-1)
            this.bStop1 = true
        },
        switch1(){
            this.bStop = !this.bStop
            if(!this.bStop){
                $('#list-list').animate({
                    marginTop:'0.44rem'
                })
            }else{
                $('#list-list').animate({
                    marginTop:'0'
                })
            }
        },

        handleTouchStart(e){
            this.startX = e.changedTouches[0].pageX;
            this.startY = e.changedTouches[0].pageY;
        },
        handleTouchMove(e){
            //获取滑动屏幕时的X,Y
            let endX = e.changedTouches[0].pageX;
            let endY = e.changedTouches[0].pageY;
            //获取滑动距离
            let distanceX = endX-this.startX;
            let distanceY = endY-this.startY;
            //判断滑动方向
            
            console.log(distanceX)
            // console.log(Math.abs(distanceX)-Math.abs(distanceY))
            if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>200){
                this.direction = 1
            }else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<-200){
                this.direction = 0
            }
        
        },
        handleTouchEnd(e){
            console.log(this.direction)
           if(this.direction === 0){
               this.$router.push('/detail/detail')
           }
        }
    }
}
</script>

<style lang="stylus" scoped>
.detail-shop
    display flex
    height 100%
    flex-direction column
    .detail-shop-1
        flex 1
        overflow-y hidden
</style>


