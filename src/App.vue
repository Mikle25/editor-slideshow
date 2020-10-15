<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss">
body {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
::-webkit-scrollbar {
    width: 10px;
    height: 10px;

    &-track {
      background: #f1f1f1;
    }

    &-thumb {
      background: #888;
      &:hover {
        background: #555;
      }
    }
  }
</style>
