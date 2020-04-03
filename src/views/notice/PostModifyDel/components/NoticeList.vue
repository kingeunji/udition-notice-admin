<template>
  <tbody class="table-list-wrapper">
    <tr v-for="data in datas" :key="data.id" class="table-list">
      <td>{{data.date}}</td>
      <td>{{data.name}}</td>
      <td>{{data.categry}}</td>
      <td>{{data.content}}</td>
      <td>{{data.claps}}</td>
      <td>{{data.singo}}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "NoticeList",
  data() {
    return {
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
  }
};
</script>

<style scoped lang="scss">
.table-list-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 25px 10px;
}
</style>