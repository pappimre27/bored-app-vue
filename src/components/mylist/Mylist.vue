<template>
    <div class='flex-container' v-if="activities.length === 0">
        <h4>Please add an activity...</h4>
    </div>

    <div class='form-container' v-else>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Activity</th>
                <th>Participants</th>
                <th>Budget</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>

            <tr v-bind:key="index" v-for="(activity, index) in activities">
                <td>{{index + 1}}</td>
                <td>{{activity.activityDesc}}</td>
                <td>{{activity.participants}}</td>
                <td v-if="activity.price <= 0.5">{{'cheap'}}</td>
                <td v-else>{{'Expensive'}}</td>
                <td>
                    <i
                            class='fa fa-check-circle'
                            v-bind:style="{fontSize: '26px'}">
                    </i>
                </td>
            </tr>

            </tbody>
        </table>
        <button
                class='btn btn-primary btn-block'
                v-bind:style="{backgroundColor: '#dc3545'}">
            Clear all
        </button>
    </div>
</template>

<script>
    export default {
        name: "Mylist",
        data() {
            return {
                activities: []
            }
        }
    }
</script>

<style scoped>
    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    table {
        width: 100%;
        border-top: var(--border-style);
        border-bottom: var(--border-style);
        border-collapse: collapse;
    }

    tr {
        border-top: var(--border-style);
    }

    button {
        margin-top: 1rem;
    }

</style>