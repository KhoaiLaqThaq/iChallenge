import { Module } from "vuex";

import ExamService from '@/services/ExamService'

export interface IExamState {
  id: Number,
  cid: String, // uuid
  accountId: String,
  title: String,
  description: String,
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

const module: Module<any, any> = {
  namespaced: false,
  state: {
    exam: null
  },
  mutations: {
    setExam(state, exam) {
      state.exam = exam;
    }
  },
  actions: {
    
  }
}

export default module;
