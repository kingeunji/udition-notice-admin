<template>
  <div class="thumbnail-wrapper">
    <div class="thumbnail">썸네일</div>
    <input class="input-thumbnail" type="file" @change="onFileSelected" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(event);
      this.$emit(
        "update-thumbnailImg",
        this.selectedFile,
        this.selectedFile.name
      );
    }
  }
};
</script>

<style scoped lang="scss">
.thumbnail-wrapper {
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 50px;
  padding: 5px;
  margin-bottom: 10px;
  .thumbnail {
    font-size: 14px;
    font-weight: 400;
    margin: 0 78px 0 20px;
  }
  .input-thumbnail {
    width: 300px;
    padding-left: 10px;
    border-radius: 5px;
    box-shadow: none !important;
  }
}
</style>
