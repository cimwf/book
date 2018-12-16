const state = {
    bStop:false,  //图片缩放开关门
    bigImg:'',
    detailId:'',
    stop:false,  //搜索框开关门
    input:''
}

const getters = {
    stop(state) {
        return state.bStop
    },
    img(state){
        return state.bigImg
    },
    detail(state){
        return state.detailId
    },
    bool(state){
        return state.stop
    },
    input(state){
        return state.input
    }
}

const mutations = {
    getImg(state,img){
        state.bigImg = img
        state.bStop = true
    },
    changeBstop(){
        state.bStop = false
    },
    changeStop(state,bool){
        if(!!bool){
            state.stop = true
            state.input = bool
        }else{
            state.stop = false
    }
}
}

export default {
    namespaced:true,
    state,
    mutations,
    getters
}