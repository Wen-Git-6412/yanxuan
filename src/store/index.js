import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        loading:false,
        
    },
    mutations:{
        loading(state,str){
            state.loading = str
        },
        
    },
    getters:{

    },
    actions:{
        
    }
})

export default store;