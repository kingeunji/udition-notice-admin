<template>
  <div class="bg-color">
    <div class="wrapper">
      <div class="category">
        <div class="left-text">구분</div>
        <el-select v-model="value" placeholder="::필수선택::">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="title-wrapper">
        <div class="title">제목</div>
        <input class="input-title" type="text" maxlength="50" />
      </div>
      <!-- 에디터 컴포넌트 가져오기 -->
      <Editor />
      <!-- 하단 버튼 등장 -->
      <div id="app" class="button-wrapper">
        <button class="left-btn" @click="handle_cancle">취소</button>
        <button class="right-btn" @click="handle_save">저장</button>
      </div>
      <!-- 취소 모달 등장-->
      <div class="cover-bg" v-if="cancle_modal">
        <div class="bg-white">
          <div class="text-wrapper">
            <h3>취소하시겠어요?</h3>
            <p>기존에 작성한 글이 모두 사라집니다.</p>
            <div class="button-wrapper">
              <button class="left-btn" @click="handle_cancle">보류</button>
              <button class="right-btn">삭제</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 저장 모달 등장 -->
      <div class="cover-bg" v-if="save_modal">
        <div class="bg-white">
          <div class="text-wrapper">
            <h3>저장하시겠어요?</h3>
            <p>기존에 작성한 글이 모두 저장됩니다.</p>
            <div class="button-wrapper">
              <button class="left-btn" @click="handle_save">보류</button>
              <button class="right-btn" @click="goToSave">저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "../../../components/Editor";
import { submitWoImg, submitWImg } from "../../../api/index";

export default {
  components: {
    Editor
  },
  data() {
    return {
      cancle_modal: false,
      save_modal: false,
      options: [
        {
          id: 1,
          value: "notice",
          label: "공지사항"
        },
        {
          id: 2,
          value: "event",
          label: "이벤트"
        },
        {
          id: 3,
          value: "press-release",
          label: "보도자료"
        }
      ],
      value: ""
    };
  },
  methods: {
    handle_cancle() {
      if (this.cancle_modal == false) {
        this.cancle_modal = true;
      } else {
        this.cancle_modal = false;
      }
      // eslint-disable-next-line no-console
      console.log("hello");
    },
    handle_save() {
      if (this.save_modal == false) {
        this.save_modal = true;
      } else {
        this.save_modal = false;
      }
    },
    async goToSave() {
      if (!this.list.img) {
        const res = await submitWoImg.list("ccc", 1, "dddddd");
        // eslint-disable-next-line no-console
        console.log(res);
      } else {
        const res = await submitWImg.list("ccc", 1, "dddddd", "adafsdf");
        // eslint-disable-next-line no-console
        console.log(res);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.bg-color {
  position: relative;
  background-color: #ebebeb;
  padding: 5%;
  width: 100vw;
  height: 100vh;
  .wrapper {
    width: 80%;
    margin: 0 auto;
    .category {
      background-color: white;
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 10px;
      .left-text {
        font-size: 14px;
        font-weight: 400;
        margin: 0 100px 0 20px;
      }
      .el-select {
        width: 300px;
        ::placeholder {
          color: black;
        }
      }
    }
  }
  .button-wrapper {
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    margin-top: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left-btn,
  .right-btn {
    font-size: 14px;
    font-weight: 400;
    margin: 0 20px 0 20px;
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
  .cover-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .bg-white {
      background-color: white;
      padding: round($number: 4);
      width: 20%;
      border-radius: 5px;
      .text-wrapper {
        text-align: center;
        font-size: 18px;
        padding: 15px;
      }
    }
  }
}
.title-wrapper {
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 0px;
  .title {
    font-size: 14px;
    font-weight: 400;
    margin: 0 100px 0 20px;
  }
  .input-title {
    width: 600px;
    height: 40px;
    padding-left: 10px;
    border-radius: 5px;
    box-shadow: none !important;
  }
}

.editor-wrapper {
  height: 542px;
  background-color: #ffffff;
}
</style>
