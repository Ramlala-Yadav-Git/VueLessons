<template>
  <div class="todo">
    <div class="add">
      <input type="text" placeholder="Add your todo.." v-model="input" />
      <button @click="AddTodo">Add</button>
    </div>
    <div class="todoList">
      <div v-if="edit" class="editBox">
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
.editBox {
  position: sticky;
  width: 500px;
  top: 150px;
  /* border: 1px solid black; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 10px;
  background: rgba(0, 255, 128, 0.336);
}
.editBox input {
  margin: 10px;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
.editBox button {
  background: rgb(3, 90, 24);
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
.add {
  width: 500px;
  top: 100px;
  /* border: 1px solid black; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 10px;
  background: rgba(76, 0, 255, 0.678);
}
.add input {
  margin: 10px;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
.add button {
  background: rgb(1, 61, 15);
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
</style>