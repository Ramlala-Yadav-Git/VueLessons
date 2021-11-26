
<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" name="" id="" ref="name" />
    <button @click="handleClick">click me</button>
    <Modal />
  </div>
</template>
<script >
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My first App :)",
    };
  },
  methods: {
    handleClick() {
      this.$refs.name.focus(); // by refering the elments of html you can get that element
      // console.log(this.$refs.name.value);
    },
  },
};
</script>

<style>
</style>
