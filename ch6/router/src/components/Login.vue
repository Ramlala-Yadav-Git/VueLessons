<template>
  <div>
    <h1>Hi, this is login</h1>
    <h1>Ref</h1>
    <p>{{ name.name }} - {{ name.age }}</p>
    <button @click="updateName">Update</button>

    <h1>Reactive</h1>
    <p>{{ name2.name }}- {{ name2.age }}</p>
    <button @click="updateName2">Update</button>
    <button @click="update">Add 1 to age</button>
  </div>
</template>

<script>
// document.title = "Login";
import { reactive, ref } from "vue";

export default {
  name: "Login",
  setup() {
    const name = ref({
      name: "ref",
      age: 24,
    });
    const name2 = reactive({
      name: "reactive",
      age: 21,
    });
    const updateName = () => {
      name.value.age = 30;
    };
    const updateName2 = () => {
      name2.age = 30; // value nhi likhna padta hai reactive use karne par
    };
    const update = () => {
      name.value.age = name.value.age + 1;
      name2.age = name2.age + 1;
    };

    return {
      name,
      name2,
      updateName,
      updateName2,
      update,
    };
  },
};
</script>

<style>
</style>