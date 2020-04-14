<template>
  <div class="writingNoticeWrapper">
    <!-- 카테고리 선택란 등장 -->
    <div class="categoryWrapper">
      <div class="left-text">분류</div>
      <select
        class="selectOption"
        v-model="value"
        @change="changeCategory(value)"
      >
        <option v-for="item in options" :key="item.value" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>
    <!-- 버전 작성란 등장 -->
    <div class="versionWrapper">
      <div class="left-text">버전</div>
      <input class="versionInput" type="text" v-model="newVersion" />
    </div>
    <!-- 에디터 등장 -->
    <Editor @update-content="onEditorChange" />
    <!-- 버튼 등장 -->
    <div class="button-wrapper">
      <button class="left-btn" @click="onPreview">미리보기</button>
      <button class="right-btn" @click="goToSave">저장</button>
    </div>
  </div>
</template>

<script>
import Editor from "../Editor";
import { writingNotice, detailTerm, updatTerm } from "../../api/index";

export default {
  props: {
    forModi: Number,
    reset: Number
  },
  components: {
    Editor
  },
  data() {
    return {
      categoryNum: "",
      newVersion: "",
      content: "",
      firstName: "Dasol",
      lastName: "Jong",
      fullName: "",
      upDatedVersion: this.forModi.version,
      options: [
        {
          id: 1,
          name: "num",
          value: 1,
          label: "서비스 이용약관"
        },
        {
          id: 2,
          name: "num",
          value: 2,
          label: "유료 서비스 이용약관"
        },
        {
          id: 3,
          name: "num",
          value: 3,
          label: "개인정보 처리방침"
        }
      ],
      value: "",
      dbLoad: false
    };
  },
  created() {
    if (this.forModi) {
      // 수정인 경우
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      let formData = new FormData();
      formData.append("termsNo", this.forModi);
      const response = await detailTerm.list(formData);
      console.log(response);
      this.value = response.data.result[0].categoryNo;
      // this.categoryNum = response.data.result[0].categoryNum;
      this.newVersion = response.data.result[0].version;
      this.content = response.data.result[0].contents;
      this.dbLoad = true;
    },
    changeCategory(value) {
      console.log("카테고리 번호: ", value);
      this.categoryNum = value;
    },
    onEditorChange(content) {
      this.content = content;
    },

    async goToSave() {
      var bodyFormData = new FormData();
      bodyFormData.append("categoryNo", this.categoryNum);
      bodyFormData.append("version", this.newVersion);
      bodyFormData.append("contents", this.content);
      console.log(this.categoryNum, this.newVersion, this.content);

      if (this.forModi === null) {
        // console.log("저장완료: ", res);
        // const res =
        await writingNotice.list(bodyFormData);
        this.$router.push("/terms");
      } else {
        // console.log("수정완료: ", res);
        // const res =
        await updatTerm.list(bodyFormData);
      }
      window.location.reload();
      console.log(this.forModi.version);
    }
  },
  watch: {
    upDatedVersion() {
      console.log("hey");
      this.newVersion = this.upDatedVersion;
    },
    dbLoad(val) {
      console.log(`watch DBLOAD ${val} `);
    }
  }
};
</script>

<style scoped lang="scss">
.writingNoticeWrapper {
  max-width: 900px;
  min-width: 900px;
  width: 100%;
  font-size: 14px;
  .categoryWrapper {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 5px;
    height: 50px;
    border: 1px solid #cccccc;
    margin-bottom: 10px;
  }
  .versionWrapper {
    display: flex;
    padding: 5px;
    height: 50px;
    align-items: center;
    border: 1px solid #cccccc;
    margin-bottom: 10px;
    .versionInput {
      font-size: 14px;
      width: 300px;
      height: 40px;
      border-radius: 5px;
    }
  }
}
.left-text {
  font-weight: 400;
  margin: 0 50px 0 5px;
}
.selectOption {
  width: 160px;
  height: 40px;
  background-color: white;
  font-size: 14px;
}
.button-wrapper {
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  margin-top: 70px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  .left-btn,
  .right-btn {
    font-size: 14px;
    font-weight: 400;
    margin: 0 0 0 20px;
    width: 30px;
    width: 60px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.4s;
    &:hover {
      background-color: black;
      color: white;
    }
  }
}
</style>
