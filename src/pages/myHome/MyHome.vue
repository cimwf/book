<template>
<div class="myHome">
    <div>
        <myHomeTop></myHomeTop>
        <myHomeLog></myHomeLog>
        <PositionList :position_list_data='position_list_data'></PositionList>
    </div>
</div>
</template>

<script>
import myHomeTop from 'components/myHome/myHome-top'
import myHomeLog from 'components/myHome/myHome-log'
import PositionList from 'components/common/Position-list'
import BScroll from 'better-scroll'
import http from 'utils/http'
import { Indicator } from 'mint-ui';
export default {
    data(){
        return {
            position_list_data:null
        }
    },
    components:{
        myHomeTop,
        myHomeLog,
        PositionList
    },
        mounted(){
        let bscroll = new Bscroll('main',{
            probeType: 1,
            pullUpLoad: {
                threshold: 50
            }
        })
    },
    async beforeCreate(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        let result = await http({
            method:'get',
            url:'/h5ajax.php?action=home&img_size=h&perm_id=20181104165023265397952807879651932'
        })
        this.position_list_data = result.data.reco_list
        Indicator.close();
    },
    mounted(){
        new BScroll('.myHome',{
            probeType:1
        })
    }
}
</script>

<style lang="stylus" scoped>
    .myHome
        height 100%
        >div
            height max-content
</style>
