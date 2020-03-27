<template>
  <div class="editor-wrapper">
    <quill-editor
      ref="myTextEditor"
      @change="onEditorChange()"
      v-model="content"
      :config="editorOption"
    ></quill-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      editorOption: {
        // some quill options
        modules: {}
      }
    };
  },
  methods: {
    onEditorChange() {
      // eslint-disable-next-line no-console
      console.log(this.content);
    }
  }
};
</script>

<style>
.quill-editor {
  height: 500px;
}
</style>
