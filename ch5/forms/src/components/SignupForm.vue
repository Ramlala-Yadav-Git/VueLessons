<template>
  <div>
    <form>
      <label for="email">Email:</label>
      <input type="text" required v-model="email" />

      <label for="password">Password:</label>
      <input type="password" required v-model="password" />

      Role:<select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <label for="checkbox">checkbox</label>
      <input type="radio" value="male" name="gender" id="" v-model="gender" />
      <input type="radio" value="female" name="gender" id="" v-model="gender" />
    </form>
    <p>Email :{{ email }}</p>
    <p>Password :{{ password }}</p>
    <p>Role :{{ role }}</p>
    <p>gender :{{ gender }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      gender: "",
    };
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  column-rule: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.5em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>