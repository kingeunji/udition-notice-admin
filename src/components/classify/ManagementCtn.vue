<template>
  <div class="ctn-wrapper">
    <div class="ctnHeader-wrapper">
      <div class="ctnHeader-container">
        <ul>
          <li @click="getCatagory(0)" :class="{ active: this.category == 0 }">
            <span>전체</span>
          </li>
          <li @click="getCatagory(1)" :class="{ active: this.category == 1 }">
            <span>서비스 이용약관</span>
          </li>
          <li @click="getCatagory(2)" :class="{ active: this.category == 2 }">
            <span>유료 서비스 이용약관</span>
          </li>
          <li @click="getCatagory(3)" :class="{ active: this.category == 3 }">
            <span>개인정보 처리방침</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ctnMain-wrapper">
      <div class="ctnTable-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>분류</th>
              <th>버전</th>
              <th>최초작성일</th>
              <th>최종수정일</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in gotLists" :key="data.termsNo" class="table-list">
              <!-- 번호(역순) -->
              <td>{{ data.termsNo }}</td>
              <!-- 분류 -->
              <td>{{ data.categoryName }}</td>
              <!-- 버전 -->
              <td>
                {{ data.version }}
              </td>
              <!-- 최종 작성일 -->
              <td>
                {{ data.createDate.slice(0, 10) }}
              </td>
              <!-- 최종수정일 -->
              <td>
                {{ data.modifiedDate ? data.modifiedDate.slice(0, 10) : "-" }}
              </td>
              <!-- 게시, 수정, 게시중단 -->
              <td>
                <div v-if="data.isDelete == 1" class="buttonBox">
                  <button @click="postTerms(data.termsNo)">게시</button>
                  <button @click="modiTerms(data.termsNo)">수정</button>
                </div>
                <div v-else>
                  <button @click="postStop(data.termsNo)">
                    게시중단
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        @child="parents"
        :howManyLists="this.PAGESIZE"
        :totalNoticeCnt="this.totalNoticeCnt"
        :category="this.category"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "@/views/notice/PostModifyDel/components/Pagination";
import { getTerms, stopPost, postTerms } from "@/api/index.js";

export default {
  name: "ManagementCtn",
  components: {
    Pagination
  },
  data() {
    return {
      category: 0,
      pageNum: 0,
      PAGESIZE: 10,
      gotLists: [],
      totalNoticeCnt: 0
    };
  },
  created() {
    this.category = 0;
    this.fetchData();
  },
  methods: {
    //게시물 불러오는 API통신
    async fetchData() {
      const bodyFormData = new FormData();
      bodyFormData.append("requestPage", this.pageNum);
      bodyFormData.append("pageSize", this.PAGESIZE);
      bodyFormData.append("categoryNo", this.category);
      const res = await getTerms.list(bodyFormData);
      this.gotLists = res.data.result;
      // 마지막 offset
      this.totalNoticeCnt = res.data.result[0].termsCnt;
      console.log("바보야");
    },
    //게시중단 API 통신
    //게시중단
    async postStop(stopNum) {
      console.log(stopNum);
      const bodyFormData = new FormData();
      bodyFormData.append("termsNo", stopNum);
      await stopPost.list(bodyFormData);
      this.fetchData();
    },
    //게시
    async postTerms(postNum) {
      console.log(postNum);
      const bodyFormData = new FormData();
      bodyFormData.append("termsNo", postNum);
      await postTerms.list(bodyFormData);
      this.fetchData();
    },
    //수정
    //여기는 페이지 전환, 해당 termsNum에 해당하는 자료를 수정페이지로 넘겨줘야한다.
    async modiTerms(updtNum) {
      console.log(updtNum);
      for (let i in this.gotLists) {
        if (this.gotLists[i].termsNo === updtNum) {
          //해당 데이터 부모로 올리기
          this.$emit("modifiedData", this.gotLists[i].termsNo);
          //수정페이지로 화면전환(일단 주석)
          // this.$router.push("/writingNotice");
          this.$emit("componentChange", 3);
        }
      }
    },

    //카테고리 넘버 저장
    getCatagory(catNum) {
      this.category = catNum;
      console.log(catNum);
    },
    parents(pageNum) {
      //페이지네이션에서 넘어온 페이제 넘버 -1
      this.pageNum = pageNum - 1;
    }
  },
  watch: {
    pageNum() {
      this.fetchData();
    },
    category() {
      this.fetchData();
    }
  }
};
</script>

<style scoped lang="scss">
.ctn-wrapper {
  width: 55vw;
  .ctnHeader-wrapper {
    .ctnHeader-container {
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #1f2125;
        li {
          padding: 10px 15px 0 15px;
          &.active {
            margin-bottom: -1px;
            font-weight: bold;
            border-bottom: 1px solid wheat;
          }
          position: relative;
          cursor: pointer;
          &:after {
            content: "";
            left: 0;
            position: absolute;
            bottom: -1px;
            background: wheat;
            height: 1px;
            width: 0;
            -webkit-transition: width 0.3s;
            transition: width 0.3s;
          }
          &:hover:after {
            width: 100%;
          }
          // }
        }
      }
    }
  }
  .ctnMain-wrapper {
    margin-top: 20px;
    table {
      width: 100%;
      // border-top: 1px solid #444444;
      border-collapse: collapse;
      .table-list {
        text-align: center;
        padding: 10px 0;
        &:hover {
          background-color: #1f2125;
          color: aliceblue;
          button {
            color: aliceblue;
          }
        }
      }
      th,
      td {
        border-bottom: 1px solid #444444;
        padding: 15px;
        // span.noticeTitle {
        //   position: relative;
        //   cursor: pointer;
        //   &:after {
        //     content: "";
        //     left: 0;
        //     position: absolute;
        //     bottom: -1px;
        //     background: wheat;
        //     height: 1px;
        //     width: 0;
        //     -webkit-transition: width 0.3s;
        //     transition: width 0.3s;
        //   }
        //   &:hover:after {
        //     width: 100%;
        //   }
        // }
      }
      button {
        position: relative;
        padding: 5px;
        border: none;
        cursor: pointer;
        background-color: transparent;
        font-size: 16px;
        &:after {
          content: "";
          left: 0;
          position: absolute;
          bottom: -1px;
          background: wheat;
          height: 1px;
          width: 0;
          -webkit-transition: width 0.3s;
          transition: width 0.3s;
        }
        &:hover:after {
          width: 100%;
        }
      }
    }
  }
}
</style>
