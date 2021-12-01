<template>
  <div class="todo">
    <input type="text" placeholder="Add your todo.." v-model="input" />
    <button @click="AddTodo">Add</button>
    <div class="todoList">
      <div v-if="edit">
        <input type="text" v-model="editData" />
        <button @click="() => hendleEditSubmit(editId)">Submit</button>
      </div>

      <ul>
        <li
          v-for="todo in todoList"
          :key="todo.id"
          :class="todo.status ? 'done' : 'not'"
        >
          <h3>
            {{ todo.title }}
          </h3>
          <p>
            {{ todo.id }}
          </p>
          <p>
            {{ todo.status }}
          </p>
          <button @click="() => handleDelete(todo.id)" class="delete">
            Delete
          </button>
          <button @click="() => handleToggle(todo.id)" class="toggle">
            Toggle
          </button>
          <button @click="() => handleEdit(todo.id)" class="edit">Edit</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",

  data() {
    return {
      todoList: [],
      input: "",
      id: 0,
      edit: false,
      editData: "",
      editId: "",
    };
  },
  methods: {
    AddTodo() {
      let payload = {
        title: this.input,
        id: this.id,
        status: false,
      };
      this.todoList = [payload, ...this.todoList];
      this.input = "";
      this.id = this.id + 1;
    },
    handleDelete(id) {
      let data = this.todoList.filter((el) => el.id !== id);
      this.todoList = data;
    },
    handleToggle(id) {
      let data = this.todoList.map((el) =>
        el.id === id ? { ...el, status: !el.status } : el
      );
      this.todoList = data;
    },
    handleEdit(id) {
      this.edit = !this.edit;
      this.editId = id;
    },
    hendleEditSubmit(id) {
      let data = this.todoList.map((el) =>
        el.id === id ? { ...el, title: this.editData } : el
      );
      this.todoList = data;
      this.edit = false;
      this.editData = "";
    },
  },
};
</script>


<style>
.todo {
  padding: 10px;
  margin-top: 20px;
  /* transform: all 0.3s ease; */
  transition: all 0.5s ease;
}
ul {
  list-style: none;
}
li {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;
}
.done {
  background: rgba(3, 3, 133, 0.849);
  color: white;
  margin: 2px;
  border-radius: 10px;
}
.not {
  background: gray;
  margin: 2px;
  border-radius: 10px;
}
.delete {
  background: red;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
.toggle {
  background: rgb(4, 129, 77);
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
.edit {
  background: rgb(110, 204, 3);
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
</style>