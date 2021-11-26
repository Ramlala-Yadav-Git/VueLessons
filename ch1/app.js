const app = Vue.createApp({

    data() {
        // this will manage all the initial data of your component
        return {
            title: "This is my first app",
            age: "24",
            name: "Ramlala Yadav",
            show: true
        }
    }, methods: {
        // You must write all the method inside this method object
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
        }
    }
})

app.mount("#app")// this will mount you vue component inside this app id element