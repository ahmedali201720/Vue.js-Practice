Vue.createApp({
    data() {
        return {
            goalA: 'learn vue',
            goalB: 'master vue',
            link: 'https://www.facebook.com'
        }
    },
    methods: {
        addGoal() {
            const number = Math.random();
            if (number < 0.5)
                return this.goalA;
            else
                return this.goalB;
        }
    }
}).mount("#user-goal");
