import { Module } from "vuex";

export interface IExamState {
    id: Number,
    cid: String, // uuid
    accountId: String,
    title: String,
    createdDate: any,
    eSetup?: IESetupState
}

export interface IESetupState {
    id: Number,
    maxMemberJoin: Number,
    minToStart: Number,
    timeToStart: String,
    timeUp: String,
    scope: String,
}

const module: Module<IExamState, any> = {
    namespaced: false,
    state: {
        id: 0,
        cid: "",
        accountId: "",
        title: "",
        createdDate: new Date()
    },
    mutations: {

    },
    actions: {

    }
}

export default module;
