Vue.createApp({
    data() {
        return {
            goalA: 'learn vue',
            goalB: '<h1>master vue<h1>',
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
