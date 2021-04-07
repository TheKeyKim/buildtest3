<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view class="view" />
  </div>
</template>

<script>
export default{
  components : {
  }
}
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
  flex:direction;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view{
  min-height: 80vh;
}
</style>
