<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./views/notice/editor/Main";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style lang="scss">
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
}
</style>
