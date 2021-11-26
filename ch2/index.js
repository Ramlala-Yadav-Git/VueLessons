const app = Vue.createApp({

    data() {
        return {
            title: "Hey, welcome to mouse events class.",
            x: 0,
            y: 0,
            students: [
                {

                    name: "Ramlala",
                    age: 24,
                    smart: false,

                },
                {

                    name: "Somesh",
                    age: 23,
                    smart: true,

                },
                {

                    name: "Mahesh",
                    age: 24,
                    smart: true

                },
            ],
            url: "www.google.com",
            imgUrl: "https://picsum.photos/100/100",
            alt: "pic"

        }
    },
    methods: {
        handleOver(e, data) {
            this.x = e.offsetX,
                this.y = e.offsetY
        }
    }
    ,
    // !! handling computed properties !!

    computed: {
        filterStudents() {
            return this.students.filter((st) => st.smart)
        }
    }

})

app.mount("#app")
