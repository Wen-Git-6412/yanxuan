import Vue from "vue"
import Vuex from "vuex"
import { Toast } from 'vant'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        Loading:false,
        cart:[],
        flag:false,
        chkk:false
    },
    mutations:{
        Loading(state,str){
            state.Loading = str
        },
        addCart(state,obj){
            if(obj.size == undefined){
                Toast.fail('请选择型号');
                return false
            }else{
                Toast.success('加入购物车');
                let index = state.cart.findIndex((item,index)=>{
                    return item.size == obj.size && item.name == obj.name
                })
                if(index == -1){
                    state.cart.push(obj)
                }else{
                    state.cart[index].num += obj.num
                }
            }
        },
        flag(state){
            state.flag = !state.flag
            if(state.flag){
                state.chkk = false
                for(let i=0;i<state.cart.length;i++){
                    state.cart[i].checked = false
                }
            }else{
                if(state.cart.length<=0){
                    state.chkk = false
                }else{
                    state.chkk = true
                    for(let i=0;i<state.cart.length;i++){
                        state.cart[i].checked = true
                    }
                }
            }
        },
        checked(state,index){
            state.cart[index].checked = !state.cart[index].checked
            let num = 0;
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].checked){
                    num++
                }
            }
            if(num == state.cart.length){
                state.chkk = true
            }else{
                state.chkk = false
            }
        },
        checkAll(state){
            state.chkk = !state.chkk
            for(let i=0;i<state.cart.length;i++){
                state.cart[i].checked = state.chkk
            }
        },
        dt(state){
            if(state.flag){
                for(let i=state.cart.length-1;i>=0;i--){
                    if(state.cart[i].checked){
                        state.cart.splice(i,1)
                    }
                }
                if(state.cart.length <= 0){
                    state.chkk = false
                    state.flag = false
                }
            }else{
                    var arr=[]
                    for(let i=0;i<state.cart.length;i++){
                        if(state.cart[i].checked){
                            let obj={
                                name:state.cart[i].name,
                                img:state.cart[i].img,
                                size:state.cart[i].size,
                                num:state.cart[i].num,
                            }
                            arr.push(obj)
                        }
                    }
                    console.log("结算的商品")
                    console.log(arr)
            }
        },
        ff(state,bool){
            state.flag = bool
        }
    },
    getters:{
        sum(state){
            let sum = 0;
            state.cart.forEach((item,index)=>{
                sum+=item.num
            })
            return sum
        },
        sum1(state){
            let sum = 0;
            state.cart.forEach((item,index)=>{
                if(item.checked){
                    sum += Number(item.price) * Number(item.num)
                }
            })
            return sum
        }
    },
    actions:{

    },
    plugins:[createPersistedState()]
})
export default store