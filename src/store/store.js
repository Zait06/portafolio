import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        showModal: false,
        information: {}
    },
    mutations:{
        trueShowModal(state, info){
            state.showModal = true;
            state.information = info;
        },
        falseShowModal(state){
            state.showModal = false;
        }
    },
    actions:{
        trueShowModalAction(context, info){
            context.commit("trueShowModal", info);
        },
        falseShowModalAction(context){
            context.commit("falseShowModal");
        }
    },
    getters:{
        show(state){
            return state.showModal;
        },
        getInfo(state){
            return state.information;
        }
    }
})