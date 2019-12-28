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
    async fetchByValue({commit}, values) {
        try {
            const {name, value} = values;
            const response = await axios.get(`https://www.boredapi.com/api/activity?${name}=${value}`);
            commit('setNewActivity', response.data);
            // eslint-disable-next-line no-console
            console.log(response.data);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
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
    },
    removeAllActivites({commit}) {
        commit('deleteAll');
    }

};

const mutations = {
    setRandomActivity: (state, activity) => (state.current = activity),
    addActivity: (state, activity) => state.activities.unshift(activity),
    filterActivity: (state, id) => state.activities = state.activities.filter(activity => activity.id !== id),
    deleteAll: (state) => state.activities = [],
    setNewActivity: (state, activity) => (state.current = activity)
};

export default {
    state,
    getters,
    actions,
    mutations
}
