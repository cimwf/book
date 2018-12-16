<template>
    <div class="buy-sales">
        <div>
            <h3>促销专场</h3>
            <p>
                <span>更多</span>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2499" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M258.176 903.552 315.712 961.088 766.336 510.4 764.352 508.544 764.736 508.16 322.688 66.176 264.704 124.096 651.136 510.592Z" p-id="2500"></path></svg>
            </p>
        </div>
        <ul>
            <li>
                <span>百万图书</span>
                <p>5折封顶</p>
                <div>
                    <img src="http://img3m0.ddimg.cn/7/27/25137790-1_b_2.jpg" alt="">
                </div>
            </li>
            <li>
                <span>教辅图书</span>
                <p>每满100减40</p>
                <div>
                    <img src="http://img3m1.ddimg.cn/8/17/25094231-1_b_3.jpg" alt="">
                </div>
            </li>
            <li>
                <span>外语考试</span>
                <p>每满100减30</p>
                <div>
                    <img src="http://img3m7.ddimg.cn/87/9/25295577-1_b_2.jpg" alt="">
                </div>
            </li>
            <li>
                <span>11.6笛莎</span>
                <p>限时3件3折</p>
                <div>
                    <img src="http://img3m9.ddimg.cn/1/15/1204801489-1_b_1.jpg" alt="">
                </div>
            </li>
            <li>
                <span>教辅</span>
                <p>每满59减10</p>
                <div>
                    <img src="http://img3m9.ddimg.cn/58/6/1168939489-1_b_1.jp" alt="">
                </div>
            </li>
            <li>
                <span>超品满额</span>
                <p>减199减120</p>
                <img src="http://img3m2.ddimg.cn/21/24/1033772772-1_b_35.jpg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import http from 'utils/http'
export default {
    data(){
        return {
            result:''
        }
    },
   async beforeCreate(){
       let data = await http({
           method:'get',
           url:"/index.php?c=promotion&a=hot-promotion&imageSize=b&udid=43e2f063b5b66d8b2385d3adc80775ed&permanent_id=20181104165047701865021724226781270&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&timestamp=1541679156164&time_code=51a9ac31d2d8a3083fc8bc2e3fb5d6de"
       })
       this.result = data.data.data
   }
}
</script>

<style lang="stylus" scoped>
    .buy-sales
        background url('http://z.dangdang.com/static/img/%E4%B9%9D%E5%AE%AB%E6%A0%BC.5e5e35d.png')
        width 100%
        height 3.4rem
        padding 0 0.13rem 0.13rem
        >div
            width 100%
            height 0.4rem
            display flex
            align-items center
            position relative
            justify-content space-between
            h3
                margin-left 1.3rem
                font-size 0.16rem
                color #ffffff
                font-weight bold
            p
                width 0.5rem
                font-size 0.12rem
                color #ffffff
                path 
                    fill #ffffff
        ul
            display flex
            flex-wrap wrap
            li
                width 1.1rem
                height 1.38rem
                background-color #fff
                border-radius 0.1rem
                padding 0.1rem 0.1rem 0.05rem
                display flex
                flex-direction column
                justify-content space-around
                align-items center
                margin-right 0.08rem
                margin-bottom 0.08rem
                &:nth-child(3n)
                    margin-right 0
                img     
                    width 0.74rem
                p 
                    color #943dff

                    

</style>

