
<template>
  <div class="detail-detail">
     <div>
         感动千万女性的爱情经典，精选沈从文*代表性的情感小说14篇，彰显生命中不可言状的真情与温爱，送给每一个在爱中感动、成长和珍惜的年轻人。独家赠送精美主题书签。
     </div>
  </div>
</template>



<script>

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
            if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>200){
                this.direction = 1
            }else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<-200){
                this.direction = 0
            }
        
        },
        handleTouchEnd(e){
           if(this.direction === 0){
               this.$router.push('/detail/review')
           }else if(this.direction === 1){
               this.$router.push('/detail/shop')
           }
        }
    }
}
</script>

<style lang="stylus" scoped>
.detail-detail
    background-color #fff
    flex 1
</style>


