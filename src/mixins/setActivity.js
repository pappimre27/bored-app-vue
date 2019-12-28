export default {
    methods: {
        setCurrent() {
            const {activity, type, participants, price} = this.current;
            this.activityDesc = activity;
            this.type = type;
            this.participants = participants;
            this.price = price;
        }
    }
}