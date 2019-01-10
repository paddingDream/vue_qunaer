import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    //当处理异步操作或者批量的同步操作时,需要先调用dispatch经过action操作
    //action第一个参数ctx上有mutations方法,在此调用
    mutations
})

