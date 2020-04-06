<template>
  <div class="PostModifyDel">
    <div class="PMD-Header-wrapper">udition notice</div>
    <div class="PMD-container">
      <!-- 왼쪽 -->
      <div class="left-wrapper">
        <div class="catagory-wrapper">
          <div class="catagoty-container">
            <ul>
              <li>
                <span @click="category = 0" :class="{ active: category == 0 }"
                  >전체</span
                >
              </li>
              <li>
                <span @click="category = 1" :class="{ active: category == 1 }"
                  >공지사항</span
                >
              </li>
              <li>
                <span @click="category = 2" :class="{ active: category == 2 }"
                  >이벤트</span
                >
              </li>
              <li>
                <span @click="category = 3" :class="{ active: category == 3 }"
                  >보도자료</span
                >
              </li>
              <li class="write" @click="go"><button>작성하기</button></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 오른쪽 -->
      <div class="right-wrapper">
        <!-- <NoticeList /> -->
        <form class="list-container">
          <div class="list-box">
            <!-- 게시글 모음 -->
            <table>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>카테고리</th>
                  <th>제목</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="table-list-wrapper">
                <tr
                  v-for="data in gotLists"
                  :key="data.sortNo"
                  class="table-list"
                >
                  <td>{{ data.createDate.slice(0, 10) }}</td>
                  <td>
                    {{
                      data.noticeType === 0
                        ? "전체"
                        : data.noticeType === 1
                        ? "공지사항"
                        : data.noticeType === 2
                        ? "이벤트"
                        : data.noticeType === 3
                        ? "보도자료"
                        : ""
                    }}
                  </td>
                  <td>
                    <span
                      class="noticeTitle"
                      @click="goNoticePage(data.noticeNo)"
                      >{{ data.title }}</span
                    >
                  </td>
                  <td>
                    <button @click="delModi(true, data.noticeNo)">삭제</button>
                  </td>
                  <td>
                    <button @click="delModi(false, data.noticeNo)">수정</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="presentPage">현재 페이지 :{{ pageNum + 1 }}</p>
            <pagination
              @child="parents"
              :howManyLists="this.PAGESIZE"
              :totalNoticeCnt="this.totalNoticeCnt"
              :category="this.category"
            />
          </div>
        </form>
        <!-- pagination -->
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "./components/Pagination";
import { listsPage } from "../../../api/index";
import { del } from "../../../api/index";
import { modi } from "../../../api/index";

export default {
  name: "PostModifyDel",
  components: {
    // NoticeList
    Pagination
  },
  data() {
    return {
      category: 0,
      pageNum: 0,
      gotLists: [],
      //페이지 요청 사이즈
      PAGESIZE: 10,
      totalNoticeCnt: "",
      datas: [
        {
          id: 1,
          date: "2016-05-03",
          name: "Tom",
          category: "공지사항",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 3,
          date: "2016-05-04",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 4,
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 5,
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 6,
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 7,
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 8,
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 9,
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          id: 10,
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        }
      ]
    };
  },
  created() {
    console.log(
      "처음 페이지 넘버",
      this.pageNum,
      "처음 카테로리 넘버",
      this.category
    );
    this.fetchData();
  },
  watch: {
    pageNum() {
      this.fetchData();
    },
    category() {
      //카테고리 변할 때 페이지 넘버 초기화(1페이지로)
      this.pageNum = 0;
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      const bodyFormData = new FormData();
      // 검색요청 페이지
      bodyFormData.append("requestPage", this.pageNum);
      // 카테고리 종류
      bodyFormData.append("noticeType", this.category);
      // 페이징 요청 사이즈
      bodyFormData.append("pageSize", this.PAGESIZE);
      const res = await listsPage.list(bodyFormData);
      this.gotLists = res.data.result;
      // 마지막 offset
      this.totalNoticeCnt = res.data.result[0].noticeCnt;
      console.log("헤이헤이헤이", res.data.result[0].noticeCnt);
      console.log("전체 데이터", res);
      console.log("페이지 요청 사이즈", this.PAGESIZE);
      console.log("실제로 들어오는 갯수", this.gotLists.length);
      // axios.post('', form )
      // API GET
    },
    parents(pageNum) {
      this.pageNum = pageNum - 1;
      // console.log(
      //   "넘어온 페이지 숫자",
      //   pageNum,
      //   "부모에 저장된 페이지 숫자",
      //   this.pageNum
      // );
    },
    go() {
      console.log("hey");
      this.$router.push("/main");
    },
    async delModi(mode, noticeNo) {
      const bodyFormData = new FormData();
      // 검색요청 페이지
      bodyFormData.append("noticeNo", noticeNo);
      console.log("mode", mode);
      if (mode) {
        if (confirm("정말 삭제하시겠습니까??") == true) {
          await del.list(bodyFormData);
          console.log("지워");
          alert("게시물이 삭제되었습니다.");
          this.fetchData();
        } else {
          console.log("안지워");
          return false;
        }
      } else {
        const res = await modi.list(bodyFormData);
        console.log("modify", res);
      }
    }
    // ,
    // goNoticePage(pageNumer) {
    //   console.log("페이지 고유 번호", pageNumer);
    //   this.$router.push(`/notice-datail:id=${pageNumer}`;
    // }
  }
};
</script>

<style scoped lang="scss">
.PostModifyDel {
  padding: 20px;
  .PMD-Header-wrapper {
    width: 100vw;
    font-size: 30px;
    text-align: center;
    padding: 10px 0;
  }
  .PMD-container {
    display: flex;
    width: 100vw;
    .left-wrapper {
      width: 12vw;
      margin: 0 auto;
      // background-color: red;
      .catagory-wrapper {
        .catagoty-container {
          ul {
            padding-top: 30px;
            li {
              padding: 10px 0 10px 50px;
              span {
                &.active {
                  font-weight: bold;
                  border-bottom: 1px solid #1f2125;
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
              }
              button {
                font-size: 12px;
                font-weight: bold;
                border: 1px solid #1f2125;
                background-color: wheat;
                padding: 10px 20px;
                cursor: pointer;
                &:hover {
                  background-color: #1f2125;
                  color: wheat;
                }
              }
            }
          }
        }
      }
    }
    .presentPage {
      padding: 10px 0;
    }
    .right-wrapper {
      width: 85vw;
      margin: 0 auto;
      // background-color: green;
      .list-container {
        width: 100%;
        padding: 30px 100px 30px 40px;
        // background-color: grey;
        .list-box {
          table {
            width: 100%;
            border-top: 1px solid #444444;
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
              span.noticeTitle {
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
              }
            }
            button {
              position: relative;
              padding: 5px;
              border: none;
              cursor: pointer;
              background-color: transparent;
              font-size: 12px;
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
    }
  }
}
</style>
