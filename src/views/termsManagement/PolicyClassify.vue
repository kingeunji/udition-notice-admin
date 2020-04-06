ㅇ<template>
  <div>
    <header>
      <h2>약관 관리</h2>
    </header>
    <div class="policy-container">
      <div class="list">
        <ul class="select-list">
          <li @click="fetchData(1)">
            <span :class="{ active: selected == 1 }">약관 내용 관리</span>
          </li>
          <li @click="fetchData(2)">
            <span :class="{ active: selected == 2 }">약관 분리 관리</span>
          </li>
          <li @click="fetchData(3)">
            <span :class="{ active: selected == 3 }">약관 작성</span>
          </li>
        </ul>
      </div>
      <div class="content-container">
        <ManagementCtn v-if="this.selected == 1" />
        <classifyDetail v-else-if="this.selected == 2" />
      </div>
    </div>
  </div>
</template>
<script>
import classifyDetail from "@/components/classify/classifyDetail";
import ManagementCtn from "@/components/classify/ManagementCtn";
export default {
  name: "",
  props: {},
  components: {
    classifyDetail,
    ManagementCtn
  },
  // 초기화, 기본 값 설정
  data() {
    return {
      selected: 1
    };
  },
  methods: {
    fetchData(sel) {
      console.log("카테고리", sel);
      this.selected = sel;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
  h2 {
    //좁아서 70vw로 바꿈
    width: 70vw;
    margin: 0 auto;
    font-size: 20px;
  }
}
.policy-container {
  width: 70vw;
  margin: 50px auto;
  display: flex;
  // justify-content: space-between;
  color: #1f2125;

  .list {
    margin-right: 30px;
    .select-list {
      li {
        margin-bottom: 20px;
        padding-bottom: 5px;
        cursor: pointer;

        span {
          &.active {
            font-weight: bold;
            border-bottom: 1px solid #1f2125;
          }
        }
      }
    }
  }
  .content-container {
    margin: 0 auto;
  }
}
</style>
