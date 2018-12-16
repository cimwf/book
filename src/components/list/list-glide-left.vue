<template>
    <div>

    <div class="list-glide-left">
        <ul>
        <li pageId='712231' @click="tabClick($event)" class="active">图书</li>
        <li pageId='712675' @click="tabClick($event)" >童书</li>
        <li pageId='712239' @click="tabClick($event)" >电子书</li>
        <li pageId='712636' @click="tabClick($event)" >听书</li>
        <li pageId='712648' @click="tabClick($event)" >网络文学</li>
        <li pageId='712655' @click="tabClick($event)" >创意文具</li>
        <li pageId='712652' @click="tabClick($event)" >艺术品</li>
        <li pageId='713046' @click="tabClick($event)" >女装</li>
        <li pageId='713109' @click="tabClick($event)" >男装</li>
        <li pageId='713178' @click="tabClick($event)" >男女鞋</li>
        <li pageId='712821' @click="tabClick($event)" >童装童鞋</li>
        <li pageId='713213' @click="tabClick($event)" >内衣配饰</li>
        <li pageId='712954' @click="tabClick($event)" >母婴玩具</li>
        <li pageId='713260' @click="tabClick($event)" >食品生鲜</li>
        <li pageId='713244' @click="tabClick($event)" >美妆个护</li>
        <li pageId='713343' @click="tabClick($event)" >手机数码</li>
        <li pageId='713359' @click="tabClick($event)" >电脑办公</li>
        <li pageId='713362' @click="tabClick($event)" >家用电器</li>
        <li pageId='713189' @click="tabClick($event)" >珠宝饰品</li>
        <li pageId='713233' @click="tabClick($event)" >箱包皮具</li>
        <li pageId='713209' @click="tabClick($event)" >当当优品</li>
        <li pageId='713466' @click="tabClick($event)" >家居家纺</li>
        <li pageId='713319' @click="tabClick($event)" >厨房用品</li>
        <li pageId='713338' @click="tabClick($event)" >营养保健</li>
        <li pageId='713340' @click="tabClick($event)" >手表眼镜</li>
        <li pageId='713222' @click="tabClick($event)" >汽车用品</li>
        <li pageId='713464' @click="tabClick($event)" >家具家装</li>
        <li pageId='713463' @click="tabClick($event)" >当当礼品卡</li>
        <li pageId='713467' @click="tabClick($event)" >猜您喜欢</li>
    </ul>
    </div>
        <ListGlideRight :content="content"></ListGlideRight>
    </div>
</template>

<script>
import ListGlideRight from './list-glide-right'
import BScroll from 'better-scroll'
import http from 'utils/http'
import $ from 'jquery'
export default {
    data(){
        return {
            content:null
        }
    },
    components:{
        ListGlideRight
    },
    async beforeCreate(){
        let result = await http({
            method:'get',
            url:'/ddcategory.php',
            params:{
                action: "get_content",
                title: "图书",
                pageid: 712231,
            }
        })
        this.content = result.data.content
    },
    mounted(){
        this.bScroll = new BScroll('.list-glide-left',{
            probeType:1,
            click:true
        })
    },
    methods:{
        async tabClick(e){
            let pageid = $(e.srcElement).attr('pageid')
            let title = $(e.srcElement).text()
            $('li').removeClass('active')
            $(e.srcElement).addClass('active')
            this.bScroll.scrollToElement(e.srcElement,1000)
            let result = await http({
            method:'get',
            url:'/ddcategory.php',
            params:{
                action: "get_content",
                title,
                pageid
            }
        })
        this.content = result.data.content
        }
    }
}
</script>


<style lang="stylus" scoped>
.list-glide-left 
    width: 0.8rem;
    background-color: #fff;
    height 100%
    overflow hidden
    ul 
        width: 100%;
        height: max-content;

        li 
            width: 100%;
            height: 0.45rem;
            text-align: center;
            line-height: 0.45rem;
            font-size: 0.14rem;
            &.active
                background-color #eff4fa
                color #e53e30
        
    

</style>

