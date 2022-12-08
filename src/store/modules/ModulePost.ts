import { Module } from "vuex";
import { IPost } from "@/models/IPost";

export interface IPostState {
    posts: IPost[]
}

const module: Module<IPostState, any> = {
    namespaced: false,
    state: {
        posts: [],
    },
    mutations: {
        // commit
        setPosts( state, value ) {
            state.posts = value;
        }
    },
    actions: {
        // dispatch
        loadPosts({ commit }, payload) {
            commit('setPosts', payload)
        }
    }
}

export default module;
