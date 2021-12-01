<template>
  <div class="home">
    <!-- <h1>here, are your todos list</h1> -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <h3>title : {{ todo.title }}</h3>
        <p>status : {{ todo.completed }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        return (res = res.json());
      })
      .then((res) => {
        console.log(res[0]);
        this.todos = res;
      });
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}
li {
  border: 1px solid gray;
  background: #04047cee;
  color: white;
  border-radius: 5px;
}
</style>
