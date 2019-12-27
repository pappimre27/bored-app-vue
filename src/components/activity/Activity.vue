<template>
    <form class='grid-2'>
        <div class='flex-container'>
            <h3>You should</h3>
            {{activityDesc}}
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
                    value='Save for later'
            />
        </div>
        <div>
            <h3>Activity details</h3>
            <div v-bind:style="{minHeight: '300px'}">
                <div class='form-group'>
                    <label>Type</label>
                    <select name='type' v-model="type">
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
                    value='Hit me with a new one!'
            />
        </div>
    </form>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Activity",
        data() {
            return {
                activityDesc: "",
                type: "Test",
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
            ...mapActions(['fetchRandom'])
        },
        computed: {
            ...mapGetters(['current'])
        },
        async created() {
            await this.fetchRandom();
            // eslint-disable-next-line no-console
            this.activityDesc = this.current.activity;
            this.type = this.current.type;
            this.participants = this.current.participants;
            this.price = this.current.price;
        },
        beforeMount() {
            this.activityTypes.filter(activity => activity !== this.type);
        }
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