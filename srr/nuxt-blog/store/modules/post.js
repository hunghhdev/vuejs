const state = () => ({
    posts: []
})
const getters = {};
const mutations = {
    SET_POST(state, payload){
        state.posts = payload
    }
};
const actions = {
    setPosts({commit}, payload){
        commit('SET_POST', payload)
    }
};

const postModule = {
    state,
    getters,
    actions,
    mutations
}

export default postModule
