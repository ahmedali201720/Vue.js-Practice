Vue.createApp({
    data() {
        return {
            goal: 'Finishing vue course',
            link: 'https://www.facebook.com'
        }
    },
    methods: {
        addGoal() {
            const number = Math.random();
            if (number < 0.5)
                return "Learn Vue";
            else
                return "Master Vue"
        }
    }
}).mount("#user-goal");
