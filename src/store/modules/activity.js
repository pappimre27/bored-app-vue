import axios from 'axios';

const state = {
    current: null,
    activities: [],
    error: null
};

const getters = {
    current: (state) => state.current,
    activities: (state) => state.activities,
    error: (state) => state.error,
};

const actions = {
    async fetchRandom({commit}) {
        try {
            const response = await axios.get('https://www.boredapi.com/api/activity');
            commit('setRandomActivity', response.data);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
        }
    },
    async fetchByValue({commit}, values) {
        try {
            const {name, value} = values;
            const response = await axios.get(`https://www.boredapi.com/api/activity?${name}=${value}`);
            if (response.data.hasOwnProperty('error')) {
                const {error} = response.data;
                commit('setError', error);
                setTimeout(() => commit('setError', null), 5000);
            } else {
                commit('setNewActivity', response.data);
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
        }
    },
    saveActivity({commit}, activity) {
        commit('addActivity', activity);
    },
    deleteActivity({commit}, id) {
        commit('filterActivity', id);
    },
    removeAllActivites({commit}) {
        commit('deleteAll');
    },


};

const mutations = {
    setRandomActivity: (state, activity) => (state.current = activity),
    addActivity: (state, activity) => state.activities.unshift(activity),
    filterActivity: (state, id) => state.activities = state.activities.filter(activity => activity.id !== id),
    deleteAll: (state) => state.activities = [],
    setNewActivity: (state, activity) => (state.current = activity),
    setError: (state, error) => (state.error = error)
};

export default {
    state,
    getters,
    actions,
    mutations
}
