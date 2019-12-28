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
    // eslint-disable-next-line no-unused-vars
    activityById: (state) => id => state.activities.find(activity => activity.id == id)
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
            if (response.data.hasOwnProperty('error')) {
                const {error} = response.data;
                // eslint-disable-next-line no-console
                console.log(error);
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
