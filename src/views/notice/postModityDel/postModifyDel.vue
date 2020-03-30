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
                <span @click="getcategory(0)">전체</span>
              </li>
              <li>
                <span @click="getcategory(1)">공지사항</span>
              </li>
              <li>
                <span @click="getcategory(2)">이벤트</span>
              </li>
              <li>
                <span @click="getcategory(3)">보도자료</span>
              </li>
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
                  <!-- <th>사용자 이름</th> -->
                  <th>카테고리</th>
                  <th>제목</th>
                  <!-- <th>박수수</th>
                  <th>신고수</th> -->
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
                  <td>{{ data.title }}</td>
                  <td>
                    <button>삭제</button>
                  </td>
                  <td>
                    <button>수정</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <pagination @child="parents" :howManyLists="this.gotLists.length" />
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

export default {
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
      pageSize: 5,
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
    // this.clickCallback();
    // eslint-disable-next-line no-console
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
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      const bodyFormData = new FormData();
      bodyFormData.append("requestPage", this.pageNum);
      bodyFormData.append("noticeType", this.category);
      bodyFormData.append("pageSize", this.pageSize);
      const res = await listsPage.list(bodyFormData);
      this.gotLists = res.data.result;
      console.log("페이지 요청 사이즈", this.pageSize);
      console.log("실제로 들어오는 갯수", this.gotLists.length);
      // axios.post('', form )
      // API GET
    },

    getcategory(num) {
      this.category = num;
      // console.log("카테고리 분류", this.category);
    },
    parents(pageNum) {
      this.pageNum = pageNum - 1;
      // console.log(
      //   "넘어온 페이지 숫자",
      //   pageNum,
      //   "부모에 저장된 페이지 숫자",
      //   this.pageNum
      // );
    }
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
                position: relative;
                cursor: pointer;
                &:after {
                  content: "";
                  left: 0;
                  position: absolute;
                  bottom: -3px;
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
                background-color: wheat;
              }
            }
            th,
            td {
              border-bottom: 1px solid #444444;
              padding: 15px;
            }
            button {
              padding: 5px;
              border: none;
              cursor: pointer;
              background-color: transparent;
              &:hover {
                color: white;
              }
            }
          }

          // .pagination-container {
          //   width: 100%;
          //   padding: 20px 0;
          //   display: flex;
          //   align-items: center;
          //   justify-content: center;

          //   .pagination {
          //     display: flex;

          //     li.page-item {
          //       padding: 0 100px;
          //       width: 500px;
          //     }
          //   }
          // }
        }
      }
    }
  }
}
</style>
