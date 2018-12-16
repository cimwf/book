<template>
    <div class="position-nav">
        <ul>
            <li>
                <img src="http://img62.ddimg.cn/upload_img/00528/000/tushu-1541166075.png" alt="">
            </li>
            <li>
                <img src="http://img62.ddimg.cn/upload_img/00528/000/tongshu-1541166075.png" alt="">
            </li>
            <li>
                <img src="http://img62.ddimg.cn/upload_img/00528/000/xiaoshuobang-1541166075.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00528/000/wenxuebang-1541166075.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00528/000/lishibang-1541166075.png" alt="">
            </li>
            </ul>
            <ul>
            <li>
                <img src="http://img60.ddimg.cn/upload_img/00528/000/fuzhuang-1541166075.png" alt="">
            </li>
            <li>
                <img src="http://img60.ddimg.cn/upload_img/00528/000/chaoshi-1541166075.png" alt="">
            </li>
            <li>
                <img src="http://img61.ddimg.cn/upload_img/00528/000/pintuan-1541166075.png" alt="">
            </li>
            <li>
                <img src="http://img61.ddimg.cn/upload_img/00528/000/lingquanzhongxin-1541166075.png" alt="">
            </li>
            <li>
                <img src="http://img61.ddimg.cn/upload_img/00528/000/qiandao-1541166075.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import http from 'utils/http'
export default {
    data(){
            return {
                result:""
            }
        },
    async mounted(){
        
         this.result = await http({
            method:'get',
            url:'/haha/index.php?floor_pageid=147897_3&seq=3&action=index_floor&preview_time=0'
        })
    }
}
</script>

<style lang="stylus" scoped>
    ul
        display flex
        background-color #fff
        li
            width 0.75rem
            height 0.77rem
            img 
                width 100%
    // .position-page-data
    //     height 0.42rem
    //     background-color yellow
    //     img 
    //         width 5rem
    //     div
    //         height 100%
    //         background-color red
</style>


