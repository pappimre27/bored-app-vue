<template>
    <section>
        <Alert v-bind:msg="this.error" v-if="error"/>
        <form class='grid-2' method="post">
            <div class='flex-container'>
                <h3>You should</h3>
                <textarea
                        class='l-input'
                        name='activityDesc'
                        type='text'
                        v-model="activityDesc"
                />
                <input
                        class='btn btn-block btn-primary'
                        type='submit'
                        v-bind:style="{backgroundColor: '#dc3545'}"
                        v-on:click.prevent="saveForLater"
                        value='Save for later'
                />
            </div>
            <div>
                <h3>Activity details</h3>
                <div v-bind:style="{minHeight: '300px'}">
                    <div class='form-group'>
                        <label>Type</label>
                        <select name='type' v-model="type" v-on:change="handleChange($event)"
                        >
                            <option v-bind:key="activity" v-for="activity in activityTypes">{{activity}}</option>
                        </select>
                    </div>
                    <div class='form-group'>
                        <label>Participants</label>
                        <input
                                name='participants'
                                required
                                type='number'
                                v-model="participants"
                                v-on:change="handleChange($event)"
                        />
                    </div>
                    <div class='form-group'>
                        <label>Budget</label>
                        <input
                                max=1
                                min=0
                                name='price'
                                step=0.1
                                type='range'
                                v-model="price"
                                v-on:change="handleChange($event)"
                        />
                    </div>
                    <ul class='price-categories'>
                        <li>Cheap</li>
                        <li>Expensive</li>
                    </ul>
                </div>
                <input
                        class='btn btn-block btn-primary'
                        type='submit'
                        v-bind:style="{marginTop: '1rem'}"
                        v-on:click.prevent="newActivity"
                        value='Hit me with a new one!'
                />
            </div>
        </form>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import uuid from 'uuid';
    import setActivity from "../../mixins/setActivity";
    import Alert from "../layout/Alert";

    export default {
        name: "Activity",
        components: {
            Alert
        },
        data() {
            return {
                activityDesc: "",
                type: "",
                participants: 0,
                price: 0,
                activityTypes: [
                    'education',
                    'recreational',
                    'social',
                    'diy',
                    'charity',
                    'cooking',
                    'relaxation',
                    'music',
                    'busywork'
                ]
            }
        },
        methods: {
            ...mapActions(['fetchRandom', 'saveActivity', 'fetchByValue']),
            saveForLater() {
                const {activityDesc, type, participants, price} = this.$data;
                // eslint-disable-next-line no-console
                // console.log(this.$data);
                const activity = {
                    id: uuid.v4(),
                    activityDesc,
                    type,
                    participants,
                    price
                }
                this.saveActivity(activity);
            },
            async handleChange(e) {
                const {name, value} = e.target;
                const parameters = {
                    name,
                    value
                }
                await this.fetchByValue(parameters);
                this.setCurrent();
            },
            async newActivity() {
                await this.fetchRandom();
                this.setCurrent();
            }
        },
        computed: {
            ...mapGetters(['current', 'error'])
        },
        async created() {
            await this.fetchRandom();
            this.setCurrent();
        },
        beforeMount() {
            this.activityTypes.filter(activity => activity !== this.type);
        },
        mixins: [setActivity]
    }
</script>

<style scoped>
    form {
        margin: auto;
        overflow: hidden;
        padding: 0 2rem;
    }

    .l-input {
        min-height: 300px;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    textarea {
        margin-bottom: 1rem;
    }

    .price-categories {
        display: flex;
        justify-content: space-between;
    }

</style>