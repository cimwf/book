<template>
    <div class="list-search" ref="list">
        <ul>
            <li v-for="(value,key) in content" :key="key">
                <p>{{value.key}}</p>
                <p>约{{value.count}}个结果</p>
            </li>
        </ul>
        <div></div>
    </div>
</template>

<script>
import http from 'utils/http'
import { mapGetters } from 'vuex'
export default {

    data(){
        return {
            content:''
        }
    },
    computed:{
        ...mapGetters('products',['bool','input'])
    },

    watch:{
        bool(){
            if(this.bool){
                this.$refs.list.style.display = 'block'
            }else{
                this.$refs.list.style.display = 'none'
            }
        },
        async input(){
            let result = await http({
                method:'get',
                url:'/search_ajax.php?keyword='+this.input+'&act=suggest'
            })
            this.content = result.data.word
        }
    }
}
</script>


<style lang="stylus" scoped>
@import "~styles/border"
.list-search
    width 100%
    background-color #fff
    position absolute
    top 0.44rem
    display none
    ul
        width 100%
        height max-content
        li 
            width 100%
            height 0.44rem
            border 0 0 1px 0,#cccccc
            display flex
            justify-content space-between
            align-items center
            padding 0.1rem
    >div
        width 100%
        height 0.32rem
        
</style>

