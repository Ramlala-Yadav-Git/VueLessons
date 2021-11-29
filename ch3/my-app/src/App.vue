
<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" name="" id="" ref="name" />
    <button @click="handleClick">click me</button>
    <!-- <Modal header="Hey ramlala !!" text="how are you ?" /> -->
    <Modal
      v-if="showModel"
      :header="header"
      :text="text"
      @click.alt="handleClick"
    />
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
      header: "Hey ramlala !!",
      text: "how are you ?",
      showModel: false,
    };
  },
  methods: {
    handleClick() {
      this.$refs.name.focus(); // by refering the elments of html you can get that element
      // console.log(this.$refs.name.value);
      this.showModel = !this.showModel;
    },
  },
};
</script>

<style>
/* scoped  ka use kerke hum usi component tak style ko limit ker skte hain  */
</style>
