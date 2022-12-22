import { Module } from "vuex";

export interface IAccountState {
    id: number;
    cid: string;
    name: string;
    username: string;
    fullname: string;
    email: string;
    verify_email: boolean;
    phone: string;
    verify_phone: boolean;
    createdDate: string;
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
        cid: '65f9af5d-f23f-4065-ac85-da725569fdcd',
        name: 'Challenge Me',
        username: 'challenge_me',
        fullname: 'HenryNguyen',
        email: '',
        verify_email: false,
        phone: '',
        verify_phone: false,
        createdDate: '2022-10-13 15:10:11',
        ranking: {
            name: 'Iron',
            exp: 0,
            expToUp: 200
        }
    },
    mutations: {
        setAccount(state, value) {
            state.id = value.id;
            state.cid = value.cid;
            state.username = value.username;
            state.fullname = value.fullname;
            state.email = value.email;
            state.verify_email  = value.verify_email;
            state.phone = value.phone;
            state.verify_phone = value.verify_phone;
            state.createdDate = value.createdDate;
            state.ranking = value.ranking;
        },
        cid(state, value) {
            state.cid = value.cid;
        }
    },
    actions: {
        setAccountLogin({ commit }, payload) {
            commit('setAccount', payload);
        },
        setCid({ commit}, payload) {
            commit('cid', payload);
        }
    }
}

export default module;
