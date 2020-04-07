<template>
  <div class="pagination-container">
    <paginate
      v-model="page"
      :page-count="10"
      :page-range="20"
      :margin-pages="10"
      :click-handler="clickCallback"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";
// import { listsPage } from "../../../../api/index";

export default {
  props: ["howManyLists"],
  data() {
    return {
      page: 1,
      pageLists: [],
      howManyPages: ""
    };
  },
  methods: {
    clickCallback(pageNum) {
      this.page = pageNum;
      // console.log("state", this.page, "clicked", pageNum);
      // 자식 컴포넌트에서 부모 컴포넌트로 보내는 것이 $emit()
      this.$emit("child", this.page);
      console.log("계산 확인용", Math.ceil(this.howManyLists / 3));
      this.howManyPages = Math.ceil(this.howManyLists / 10);
    }
  },

  // created() {
  //   this.fetchData();
  // },
  // methods: {
  //   async clickCallback(pageNum) {
  //     console.log("페이지넘버", pageNum);
  //     const res = await listsPage.list(pageNum);
  //     this.items = await res.data.object;
  //     console.log("items", this.items);
  //   }
  // },
  components: {
    // NoticeList
    Paginate
  }
};
</script>

<style scoped>
.pagination-container {
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
}
.page-item {
  padding: 0 30px;
  width: 30px;
}
</style>
