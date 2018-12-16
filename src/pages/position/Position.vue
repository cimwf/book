<template>
    <div>
        <div class="position-scroll">
            <PositionTop></PositionTop>
            <PositionSwiper></PositionSwiper>
            <PositionNav></PositionNav>
            <PositionList :position_list_data='position_list_data'></PositionList>
        </div>
    </div>
</template>

<script>
import PositionTop from 'components/common/Position-top'
import PositionSwiper from 'components/common/Position-swiper'
import PositionNav from 'components/common/Position-nav'
import PositionList from 'components/common/Position-list'
import http from 'utils/http'
import { Indicator } from 'mint-ui';
import Bscroll from 'better-scroll'

export default {
    data(){
        return {
            position_list_data:null
        }
    },
    components:{
        PositionTop,
        PositionSwiper,
        PositionNav,
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
}
</script>

<style lang="stylus" scoped>

</style>


