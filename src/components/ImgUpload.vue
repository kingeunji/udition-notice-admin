<template>
  <div class="thumbnail-wrapper">
    <div class="thumbnail">썸네일</div>
    <input class="input-thumbnail" type="file" @change="onFileSelected" />
  </div>
</template>

<script>
import { submitWImg } from "@/api/index";

export default {
  props: {
    thumnailImg: {
      required: false
    }
  },
  data() {
    return {
      selectedFile: null,
      forModiImg: this.props.thumnailImg
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
    },
    async goToSave() {
      var bFDWI = new FormData();
      bFDWI.append("downloadFile", this.forModiImg);
      console.log("이미지 이름: ", this.forModiImg);
      console.log("이미지야 들어와라");
      const res = await submitWImg.list(bFDWI);
      console.log("이미지 정보: ", res.data.result.image);
    }
  },
  watch: {
    forModiImg() {
      this.goToSave();
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
