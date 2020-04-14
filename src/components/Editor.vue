<template>
  <div class="editor-wrapper">
    <quill-editor
      ref="myQuillEditor"
      @change="onEditorChange()"
      v-model="content"
      :options="editorOption"
    ></quill-editor>
  </div>
</template>

<script>
var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
  ["link", "image", "video", "table"]
  // remove formatting button
];

import Quill from "quill";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

export default {
  props: {},
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: toolbarOptions,
          imageDrop: true,
          imageResize: true
        }
      },
      content: ""
    };
  },
  created() {
    this.$refs.myQuillEditor.innerHTML = this.content;
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
.ql-editor strong em u {
  font-style: italic;
  font-weight: bold;
  border-bottom: 1px solid black;
}
.ql-editor strong em {
  font-style: italic;
  font-weight: bold;
}
.ql-editor strong u {
  font-weight: bold;
  border-bottom: 1px solid black;
}
.ql-editor em u {
  font-style: italic;
  border-bottom: 1px solid black;
}
.ql-editor strong {
  font-weight: bold;
}
.ql-editor em {
  font-style: italic;
}
.ql-editor u {
  border-bottom: 1px solid black;
}
.quill-editor {
  height: 500px;
}
</style>
