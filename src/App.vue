<template>
  <div id="app">
    <!-- <Main /> -->
    <PostModifyDel />
  </div>
</template>

<script>
// import Main from "./views/notice/editor/Main";
import PostModifyDel from "../src/views/notice/postModityDel/PostModifyDel"

export default {
  name: "App",
  components: {
    // Main,
    PostModifyDel
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
