import {v4 as uuid} from 'uuid';

const state = () => ({
    issues: []
});

const getters = {
    getIssues: (state) => {
        return state.issues.filter((issue) => issue.deleted === false && issue.done === false)
    },

    getDeletedIssues: (state) => {
        return state.issues.filter((issue) => issue.deleted === true)
    },

    getDoneIssues: (state) => {
        return state.issues.filter((issue) => issue.done === true && issue.deleted === false)
    }

};

const mutations = {
    addIssue(state, issue) {
        state.issues = [...state.issues, issue]
    },

    deleteIssue(state, id) {
        state.issues = state.issues.map((issue) => {
            if (issue.id === id) {
                issue.deleted = true

            }

            return issue
        })
    },

    markAsDone(state, id) {
        state.issues = state.issues.map((issue) => {
            if (issue.id === id) {
                issue.done = true
            }

            return issue

        })
    },

    markAsNotDone(state, id) {
        state.issues = state.issues.map((issue) => {
            if (issue.id === id) {
                issue.done = false
            }

            return issue

        })
    },

    restore(state, id) {
        state.issues = state.issues.map((issue) => {
            if (issue.id === id) {
                issue.deleted = false
            }

            return issue

        })
    },

    editDescription(state, {id, description}){
        state.issues = state.issues.map((issue) => {
            if (issue.id === id) {
                issue.description = description
            }

            return issue

        })
    }
};

const actions = {
    addIssue({commit}, {subject, description}) {
        commit('addIssue', {id: uuid(), subject, description, done: false, deleted: false})
    },

    deleteIssue({commit}, id) {
        commit('deleteIssue', id)
    },

    markAsDone({commit}, id){
        commit('markAsDone', id)
    },

    editDescription({commit}, {id, description}){
        commit('editDescription', {id, description})
    },

    markAsNotDone({commit}, id){
        commit('markAsNotDone', id)
    },

    restore({commit}, id){
        commit('restore', id)
    },


};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};