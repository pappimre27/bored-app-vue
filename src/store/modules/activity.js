import axios from 'axios';

const state = {
    current: null,
    activities: [],
    error: null
};

const getters = {
    current: (state) => state.current,
    activities: (state) => state.activities
};

const actions = {
    async fetchRandom({commit}) {
        try {
            const response = await axios.get('https://www.boredapi.com/api/activity');
            commit('setRandomActivity', response.data);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    },
    saveActivity({commit}, activity) {
        // eslint-disable-next-line no-console
        console.log(activity);
        commit('addActivity', activity);
    },
    deleteActivity({commit}, id) {
        commit('filterActivity', id);
        // eslint-disable-next-line no-console
        console.log(id);
    }
};

const mutations = {
    setRandomActivity: (state, activity) => (state.current = activity),
    addActivity: (state, activity) => state.activities.unshift(activity),
    filterActivity: (state, id) => state.activities = state.activities.filter(activity => activity.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}
