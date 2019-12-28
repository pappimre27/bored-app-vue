<template>
    <div class="text-center">
        <div class="card bg-light">
            <h3>{{activity.activityDesc}}</h3>
            <hr>
            <p>Type: {{activity.type}}</p>
            <p>Participants: {{activity.participants}}</p>
            <p>Budget:
                <span v-if="activity.price <= 0.5">Cheap</span>
                <span v-else>Expensive</span>
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "ActivityItem",
        data() {
            return {
                id: this.$route.params.id,
                activity: {}
            }
        },
        computed: {
            ...mapGetters['activities', 'activityById']
        },
        created() {
            // this.activity = this.activities.find(activity => activity.id === this.id);
            //  eslint-disable-next-line no-console
            // eslint-disable-next-line no-console
            console.log(this.activities);
            this.activity = this.$store.getters.activities
                .find(activity => activity.id == this.$route.params.id);
        },
    }
</script>

<style scoped>

</style>