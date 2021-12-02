<template>
  <div>
    <!-- <button @click="getData">Get Data</button> -->
    <ul v-if="loading">
      <li>Loading data ....</li>
    </ul>
    <ul v-if="!loading">
      <li v-for="el in data" :key="el.id">
        <img :src="el.url" :alt="el.title" />
        <h3>{{ el.title }}</h3>
        <button @click="() => handleDelete(el.id)">Delete</button>
        <button>Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      title: "Hi, this is about page",
      data: [],
      loading: false,
    };
  },
  methods: {
    handleDelete(id) {
      this.loading = true;
      axios
        .delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((res) => {
          this.loading = false;
          // this.data = res.data.slice(0, 100);
          alert(id + " deleted");
          this.data = res.data.slice(0, 100);
        });
    },
  },
  created() {
    this.loading = true;
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      this.loading = false;
      this.data = res.data.slice(0, 100);
      // console.log(this.data);
    });

    // console.log("Yes");
  },
};
</script>



<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
li {
  list-style: none;
  background: skyblue;
  color: aliceblue;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
}
button {
  background: navy;
  color: aliceblue;
  font-size: 17px;
  border-radius: 5px;
  padding: 5px;
  border: none;
  margin: 5px;
  width: 100px;
  cursor: pointer;
}
img {
  width: 100%;
  border-radius: 10px;
}
</style>
