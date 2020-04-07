<template>
  <div class="editor-wrapper">
    <quill-editor
      ref="myQuillEditor"
      @change="onEditorChange()"
      v-model="content"
      :config="editorOption"
    ></quill-editor>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editorOption: {
        modules: {}
      }
    };
  },
  methods: {
    onEditorChange() {
      console.log(this.content);
      this.$emit("update-content", this.content);
    }
  }
};
</script>

<style>
.quill-editor {
  height: 500px;
}
</style>
