import Vuex from 'vuex';
import Vue from 'vue';
import activity from './modules/activity';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        activity
    }
})