const state = {
    items:[],
    arr:[],
    content:[],
    bStop:true //全选反选
}

const getters = {
    data(state){
        return (()=>{
            if(state.items.length==0){
                return state.items = JSON.parse(localStorage.getItem('info')) || []
            }else{
                return state.items
            }
        })()
    },
    totalPrice(state,getters){
        return getters.data.reduce((total,item)=>{
            getters.data.forEach((value,index)=>{
                if(value.stop){
                    total =  (total*1000 + (item.price*1000)*item.quantity)/1000
                }
            })
            return total
        },0)
    },
    bStop(state){
        return state.bStop
    }

}

const mutations = {
    push(state,item){
        if(!state.items){     //数据为空从localStorage中获取
            let str = localStorage.getItem('info')
            state.items = JSON.parse(str)
        }
        state.items.push(item)
        localStorage.setItem('info',JSON.stringify(state.items))
        console.log(state.items)
    },
    update(state,item){
        item.quantity++
        localStorage.setItem('info',JSON.stringify(state.items))
        console.log(state.items)
    },
    updatebStop(state,item){
        let str = JSON.parse(localStorage.getItem('info'))
        str.forEach((value,index)=>{
            if(value.product_id == item.product_id){
                if(value.bStop){
                    value.bStop = false
                }else{
                    value.bStop = true
                }
            }
        })
   
        localStorage.setItem('info',JSON.stringify(str))
        state.items = str
    },
    reduce(state,item){
        let str = JSON.parse(localStorage.getItem('info'))
        str.forEach((value,index)=>{
            if(value.product_id == item.product_id && value.quantity>0){
                value.quantity--
            }
        })
   
        localStorage.setItem('info',JSON.stringify(str))
        state.items = str
    },
    add(state,item){
        let str = JSON.parse(localStorage.getItem('info'))
        str.forEach((value,index)=>{
            if(value.product_id == item.product_id){
                value.quantity++
            }
        })
        localStorage.setItem('info',JSON.stringify(str))
        state.items = str
    },
    del(state,key){
        let str = JSON.parse(localStorage.getItem('info'))
        str.splice(key,1)
        localStorage.setItem('info',JSON.stringify(str))
        state.items = str
    },
    shopSvg(state,item){
        let str = JSON.parse(localStorage.getItem('info'))
        let stop = true
        str.forEach((value,index)=>{
            if(value.product_id == item.product_id){
                value.stop = !value.stop
            }
        })
        str.forEach((value)=>{
            if(value.stop == false){
                stop = false
            }
        })
        if(stop){
            state.bStop = true
        }else{
            state.bStop = false
        }
        localStorage.setItem('info',JSON.stringify(str))
        state.items = str
    },
    shopCarSvg(state){
        state.bStop = !state.bStop
        let str = JSON.parse(localStorage.getItem('info'))
        str.forEach((value)=>{
            value.stop = state.bStop
        })
        localStorage.setItem('info',JSON.stringify(str))
        state.items = str
    }
}

const actions = {
    addToCart({commit,state},data){
        let item = state.items.find( item => item.product_id == data.product_id)
        if(!!item){
            commit('update',item)
        }else{
            data.quantity = 1
            data.bStop = true //编辑
            data.stop = true //单选
            commit('push',data)
        }
    },

}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}