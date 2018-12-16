<template>
    <div class="list-top">
        <div @click="goback">
            <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2002" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M765.824 120.448L708.28800001 62.912 257.664 513.6 259.648 515.456 259.264 515.84 701.312 957.82400001 759.296 899.904 372.864 513.408Z" p-id="2003"></path></svg>
        </div>
        <div>
            新书热卖榜
        </div>
        <div>
            <div v-on:click="switch1" v-if="bStop">
                <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2734" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M500.092807 419.555541c-52.607148 0-95.252411 41.259706-95.252411 92.155886 0 50.897204 42.645263 92.155886 95.252411 92.155886 52.605102 0 95.250364-41.259706 95.250364-92.155886C595.344195 460.815247 552.697909 419.555541 500.092807 419.555541zM928.726098 419.555541c-52.607148 0-95.250364 41.259706-95.250364 92.155886 0 50.897204 42.643216 92.155886 95.250364 92.155886s95.252411-41.259706 95.252411-92.155886C1023.978509 460.815247 981.332223 419.555541 928.726098 419.555541zM95.271852 419.555541c-52.605102 0-95.250364 41.259706-95.250364 92.155886 0 50.897204 42.645263 92.155886 95.250364 92.155886 52.607148 0 95.252411-41.259706 95.252411-92.155886C190.524263 460.815247 147.879 419.555541 95.271852 419.555541z" p-id="2735"></path></svg>
            </div>
            <div v-else v-on:click="switch1" class="x">
                <svg t="1541517492412"  class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7261" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M773.461333 290.759111l-40.220444-40.220444L512 471.779556l-221.240889-221.240889-40.220444 40.220444L471.779556 512l-221.240889 221.240889 40.220444 40.220444L512 552.220444l221.240889 221.240889 40.220444-40.220444L552.220444 512z" fill="red" p-id="7262"></path></svg>
            </div>
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
        }
    }
}
</script>

<style lang="stylus" scoped>
    .list-top   
        display flex
        height 0.44rem
        background-color #fff
        align-items center
        border-bottom 0.01rem solid #ccc
        div
            display flex
            justify-content center
            align-items center
            height 100%
            &:nth-child(1),&:nth-child(3)
                width 0.4rem
                .x 
                    fill red
            &:nth-child(2)
                flex 1
                height 0.3rem
                border-radius 0.5rem
                margin-right 0.2rem
                justify-content space-around
</style>


