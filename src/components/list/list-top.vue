<template>
    <div class="list-top">
        <div @click="goback">
            <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2002" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M765.824 120.448L708.28800001 62.912 257.664 513.6 259.648 515.456 259.264 515.84 701.312 957.82400001 759.296 899.904 372.864 513.408Z" p-id="2003"></path></svg>
        </div>
        <div>
            <p>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1979" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="12"><path d="M998.489516 967.6393 832.118062 801.557841c162.125244-185.773921 154.532011-469.483533-22.392033-646.376362C720.120642 65.544877 601.172409 16.447138 474.310739 16.447138c-126.508238 0-245.423243 49.097739-335.059845 138.734341C49.646514 244.818081 0.580997 363.733086 0.580997 490.563541c0 126.508238 49.065517 245.48668 138.669897 335.059845 89.636602 89.636602 208.551607 138.733334 335.413276 138.733334 115.633432 0 224.671494-40.86108 311.026522-116.341301l166.018022 166.404682c6.595369 6.241938 15.185459 9.522504 23.423125 9.522504 8.557869 0 16.794528-3.280567 23.357675-9.522504C1011.360051 1001.550572 1011.360051 980.830038 998.489516 967.6393zM186.031695 778.842585c-77.08929-76.76808-119.558431-179.531984-119.558431-288.279045 0-109.070284 42.469141-211.511971 119.558431-288.601261 76.767074-77.08929 179.59542-119.622875 288.279045-119.622875 109.070284 0 211.512978 42.534591 288.632476 119.622875C922.39809 361.094938 922.39809 620.032143 763.265431 779.163795c-77.08929 77.08929-179.562191 119.300658-288.600254 119.300658C365.628122 898.464453 263.120985 855.931875 186.031695 778.842585z" p-id="1980"></path></svg>
            </p>
            <input type="text" @click="goto" v-model="inputValue" placeholder="搜索商品/店铺/种类">
        </div>
        <div v-if="bStop1">
            <div v-on:click="switch1" v-if="bStop">
                <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2734" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M500.092807 419.555541c-52.607148 0-95.252411 41.259706-95.252411 92.155886 0 50.897204 42.645263 92.155886 95.252411 92.155886 52.605102 0 95.250364-41.259706 95.250364-92.155886C595.344195 460.815247 552.697909 419.555541 500.092807 419.555541zM928.726098 419.555541c-52.607148 0-95.250364 41.259706-95.250364 92.155886 0 50.897204 42.643216 92.155886 95.250364 92.155886s95.252411-41.259706 95.252411-92.155886C1023.978509 460.815247 981.332223 419.555541 928.726098 419.555541zM95.271852 419.555541c-52.605102 0-95.250364 41.259706-95.250364 92.155886 0 50.897204 42.645263 92.155886 95.250364 92.155886 52.607148 0 95.252411-41.259706 95.252411-92.155886C190.524263 460.815247 147.879 419.555541 95.271852 419.555541z" p-id="2735"></path></svg>
            </div>
            <div v-else v-on:click="switch1" class="x">
                <svg t="1541517492412"  class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7261" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M773.461333 290.759111l-40.220444-40.220444L512 471.779556l-221.240889-221.240889-40.220444 40.220444L471.779556 512l-221.240889 221.240889 40.220444 40.220444L512 552.220444l221.240889 221.240889 40.220444-40.220444L552.220444 512z" fill="red" p-id="7262"></path></svg>
            </div>
        </div>
        <div v-else>
            搜索
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
            //搜索的开关
            bStop1:true,
            inputValue:''
        }
    },
    methods:{
        goto(){
            this.$router.replace('/home/list/search')
            this.bStop1 = false
        },
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
    },
    watch:{
        inputValue(){
            this.$store.commit('products/changeStop',this.inputValue)
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
                background-color #e8ecf0
                height 0.3rem
                border-radius 0.5rem
                margin-right 0.2rem
                justify-content space-around
                input 
                    width 2.3rem
                    border none 
                    background-color #e8ecf0
                
</style>


