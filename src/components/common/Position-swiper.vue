
<template>
<div id="container">
 <swiper :options="swiperOption" ref="mySwiper">
  <swiper-slide class="swiper-slide games">
    <img src="http://img55.ddimg.cn/215880054192055_y.jpg" alt="">
  </swiper-slide>
  <swiper-slide class="swiper-slide games">
    <img src="http://img61.ddimg.cn/upload_img/00702/TT/1242x366_dl_1105-1541419035.jpg" alt="">
  </swiper-slide>
  <swiper-slide class="swiper-slide games">
    <img src="http://img61.ddimg.cn/upload_img/00626/sxt01/1242-366-1541406151.jpg" alt="">
  </swiper-slide>
  <swiper-slide class="swiper-slide games">
    <img src="http://img52.ddimg.cn/173090049675232_y.jpg" alt="">
  </swiper-slide>
  <swiper-slide class="swiper-slide games">
    <img src="http://img58.ddimg.cn/214350042748908_y.jpg" alt="">
  </swiper-slide>
  <swiper-slide class="swiper-slide games">
    <img src="http://img63.ddimg.cn/upload_img/00678/zsts/1242x366_1101-1541146950.jpg" alt="">
  </swiper-slide>
  <!-- <div class="swiper-pagination" slot="pagination"></div> -->
 </swiper>   
 <img src="http://img62.ddimg.cn/upload_img/00601/123/1242524116xxzs-1541060429.jpg" alt="">
 </div> 
 </template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        autoplay : {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 3000 //自自动循环时间
        }, //可选选项，自动滑动
        loop: -1, //循环切换
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        scrollbar: ".swiper-scrollbar",
        // pagination: {
        //   el: ".swiper-pagination", // type : 'progressbar', //分页器形状
        //   clickable: true //点击分页器的指示点分页器会控制Swiper切换
        // }
      }
    
    }
  }
}
</script>

<style lang="stylus" scoped>
  img 
    width 100%
</style>


