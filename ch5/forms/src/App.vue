<template>
  <div>
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from "./components/SignupForm.vue";
export default {
  name: "App",

  components: {
    SignupForm,
  },
};
</script>

<style>
body * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>