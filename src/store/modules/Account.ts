import { Module } from "vuex";

export interface IAccountState {
    id: number;
    cid: string;
    username: string;
    fullname: string;
    ranking: {
        name: string;
        exp: number;
        expToUp: number;
    };

}

const module: Module<IAccountState, any> = {
    namespaced: false,
    state: {
        id: 0,
        cid: '',
        username: 'Unknown username',
        fullname: 'Unknown fullname',
        ranking: {
            name: 'Iron',
            exp: 0,
            expToUp: 200
        },
    },
    mutations: {
        setAccount(state, value) {
            
        }
    },
    actions: {
        setAccountLogin({ commit }, payload) {
            commit('setAccount', payload);
        }
    }
}

export default module;
