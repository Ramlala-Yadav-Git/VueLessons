<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">SignUp</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
body {
  translate: all 0.5s;
  transform: all 0.5s;
}

#nav a.router-link-exact-active {
  color: #2906f1;
  background: #a2afbb4f;
  padding: 5px;
  border-radius: 5px;
}
</style>
