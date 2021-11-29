<template>
  <div class="backdrop" @click.self="closeModel">
    <div class="modal">
      <p>modal content</p>
      <p>{{ header }} {{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // here you can acees the props
  props: ["header", "text"],
  methods: {
    closeModel() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0px;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>