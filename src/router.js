import Vue from 'vue';
import Router from 'vue-router';
import Activity from "./components/activity/Activity";
import Mylist from "./components/mylist/Mylist";
import ActivityItem from "./components/activity/ActivityItem";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'activity',
            component: Activity
        },
        {
            path: '/mylist',
            name: 'mylist',
            component: Mylist
        },
        {
            path: '/activity/:id',
            name: 'activityItem',
            component: ActivityItem
        }
    ]
});
