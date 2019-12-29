<template>
    <div class="flex-container" v-if="activity">
        <h3 class="datas">
            {{activity.activityDesc}}
        </h3>
        <ul>
            <li>Type: <span class="desc">{{activity.type}}</span></li>
            <li>Participants: <span class="desc">{{activity.participants}}</span></li>
            <li>Budget:
                <span class="desc" v-if="activity.price <= 0.5">Cheap</span>
                <span class="desc" v-else>Expensive</span>
            </li>
        </ul>
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
            if (this.$store.getters.activities) {
                this.activity = this.$store.getters.activities
                    .find(activity => activity.id == this.$route.params.id);
            }

        },
    }
</script>

<style scoped>
    .datas {
        text-align: center;
    }

    ul {
        margin-top: 2rem;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul li {
        display: flex;
        width: 200px;
        justify-content: space-between;
        margin-bottom: 1rem;
    }


    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .desc {
        padding: 0 0.5rem;
        letter-spacing: 1px;
        background-color: var(--primary-color);
        color: #f4f4f4;
    }
</style>