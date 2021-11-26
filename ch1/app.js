const app = Vue.createApp({

    data() {
        return {
            title: "This is my first app",
            age: "24",
            name: "Ramlala Yadav",
            show: true
        }
    }, methods: {
        changeName() {
            if (this.name == "Ramlala Yadav") {
                this.name = "Somesh Kumar Yadav"
            }
            else {
                this.name = "Ramlala Yadav"
            }
        },
        changeShow() {
            this.show = !this.show
            console.log("hi");
        }
    }
})

app.mount("#app")