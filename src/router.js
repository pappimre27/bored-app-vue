import Vue from 'vue';
import Router from 'vue-router';
import Activity from "./components/activity/Activity";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'activity',
            component: Activity
        }
    ]
});
