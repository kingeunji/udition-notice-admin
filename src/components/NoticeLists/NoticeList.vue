<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="Date"
      width="150"
      text-align="center"
    >
    </el-table-column>
    <el-table-column prop="name" label="사용자 이름" width="120">
    </el-table-column>
    <el-table-column prop="category" label="카테고리" width="120">
    </el-table-column>
    <el-table-column prop="content" label="내용" width="120"> </el-table-column>
    <el-table-column prop="claps" label="박수수" width="300"> </el-table-column>
    <el-table-column prop="singo" label="신고수" width="120"> </el-table-column>
    <el-table-column label="삭제/수정" width="120">
      <!-- <template slot-scope="scope"> -->
      <el-button type="text" size="small">Edit</el-button>
      <el-button @click="handleClick" type="text" size="small"
        >Delete</el-button
      >
      <!-- </template> -->
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "NoticeList",
  methods: {
    handleClick() {
      alert("hi");
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          category: "공지사항",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          category: "California",
          content: "어쩌고 저쩌고 이러쿵 저러쿵",
          claps: "5",
          singo: "6"
        }
      ]
    };
  }
};
</script>
