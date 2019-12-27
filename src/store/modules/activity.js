import axios from 'axios';

const state = {
    current: null,
    activities: [],
    error: null
};

const getters = {
    current: (state) => state.current
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
    }
};

const mutations = {
    setRandomActivity: (state, activity) => (state.current = activity)
};

export default {
    state,
    getters,
    actions,
    mutations
}
