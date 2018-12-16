
<template>
<div id="container">
 <swiper :options="swiperOption" ref="mySwiper">
  <swiper-slide class="swiper-slide games" v-for="(value,key) in result" :key="key">
    <img :src="value.bannerImg" alt="">
  </swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
 </swiper>   
 </div> 
 </template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import http from 'utils/http'

export default {
  components: {
    swiper,
    swiperSlide
  },
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
        pagination: {
          el: ".swiper-pagination", // type : 'progressbar', //分页器形状
          clickable: true //点击分页器的指示点分页器会控制Swiper切换
        }
      },
      result:''
    }
  },
  async beforeCreate(){
      let data = await http({
          method:"get",
          url:'/getIndexData?udid=43e2f063b5b66d8b2385d3adc80775ed&permanent_id=20181104165047701865021724226781270&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1541675640111&tc=74af99da1c217d3172819155a983a889'
      })
      this.result = data.data.result.bannerData
  }
}
</script>

<style lang="stylus" scoped>
  img 
    width 100%
</style>


