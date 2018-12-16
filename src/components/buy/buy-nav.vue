<template>
    <div class="position-nav">
        <ul>
            <li>
                <img src="https://img61.ddimg.cn/2018/8/25/20180825153505715.png" alt="">
            </li>
            <li>
                <img src="https://img61.ddimg.cn/2018/8/25/2018082515383576435.png" alt="">
            </li>
            <li>
                <img src="https://img61.ddimg.cn/2018/8/25/2018082515395286917.png" alt="">
            </li>
            <li>
                <img src="https://img63.ddimg.cn/2018/8/31/2018083116044590576.png" alt="">
            </li>
            <li>
                <img src="http://img63.ddimg.cn/upload_img/00660/h5/ddpp-1537350824.png" alt="">
            </li>
            </ul>
            <ul>
            <li>
                <img src="https://img62.ddimg.cn/2018/8/31/2018083116363087335.png" alt="">
            </li>
            <li>
                <img src="https://img62.ddimg.cn/2018/8/31/2018083116355544875.png" alt="">
            </li>
            <li>
                <img src="https://img61.ddimg.cn/2018/8/31/2018083116365438226.png" alt="">
            </li>
            <li>
                <img src="https://img62.ddimg.cn/2018/8/31/2018083116373380162.png" alt="">
            </li>
            <li>
                <img src="http://img60.ddimg.cn/upload_img/00782/h5/coupon-1537505152.png" alt="">
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
            url:'index.php?floor_pageid=147897_3&seq=3&action=index_floor&preview_time=0'
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


