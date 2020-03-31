<template>
  <div class="pagination-container">
    <paginate
      v-model="page"
      :page-count="Math.ceil(this.howManyLists / 2)"
      :page-range="21"
      :margin-pages="10"
      :click-handler="clickCallback"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'"
      :page-class="checked?'page-item-checked':'page-item'"
      @click="getCheckedPage()"
    ></paginate>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";
// import { listsPage } from "../../../../api/index";

export default {
  props: { howManyLists: Number, pageSize: Number },
  data() {
    return {
      // 처음 요청하는 페이지 넘버코
      page: 1,
      pageLists: [],
      howManyPages: "",
      checked: false
    };
  },
  methods: {
    clickCallback(pageNum) {
      this.page = pageNum;
      // console.log("state", this.page, "clicked", pageNum);
      // 자식 컴포넌트에서 부모 컴포넌트로 보내는 것이 $emit()
      this.$emit("child", this.page);
      console.log(
        "부모한테서 내려온 전달받은 실제 들어오는 갯수",
        this.howManyLists,
        "부모한테서 내려온 전달받은 요청갯수",
        this.pageSize
      );
      console.log("계산 확인용", Math.ceil(this.howManyLists / this.pageSize));
      this.howManyPages =
        this.howManyPages === Math.ceil(this.howManyLists / 2)
          ? this.this.howManyPages
          : Math.ceil(this.howManyLists / 2);
    },
    getCheckedPage() {
      this.checked = !this.checked;
      console.log(this.checked);
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

<style>
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
.page-item-checked {
  padding: 0 30px;
  width: 30px;
  border-bottom: 1px solid black;
}
</style>
