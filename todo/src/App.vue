<template>
  <div class="#nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/todo">Todo</router-link>
    <router-view />
  </div>
</template>


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

#nav {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
  text-decoration: none;
}

a.router-link-exact-active {
  color: white;
  background: #42b983;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
}
</style>
