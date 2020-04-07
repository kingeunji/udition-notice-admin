<template>
  <div>
    <div class="datail-container">
      <div class="section">
        <div class="board-container">
          <div class="col-3">
            <h3>활성화된 분류</h3>
            <draggable
              class="list-group"
              :list="list1"
              group="people"
              @change="log"
            >
              <div
                class="list-group-item"
                v-for="(element, index) in list1"
                :key="element.name"
              >
                {{ element.name }} {{ index }}
              </div>
            </draggable>
          </div>
          <div class="col-3">
            <h3>비활성화 분류</h3>
            <draggable
              class="list-group"
              :list="list2"
              group="people"
              @change="log"
            >
              <div
                class="list-group-item delete"
                v-for="(element, index) in list2"
                :key="element.name"
                :class="{ refresh: element.delete == true }"
                @click="handle_delete(index)"
              >
                {{ element.name }} {{ index }}
              </div>
            </draggable>
          </div>
        </div>
      </div>
      <div class="button-container">
        <div>
          <button @click="visible = true" class="add btn-style">
            분류 추가
          </button>
          <app-my-modal v-bind:visible="visible" @change="changeModal" />
        </div>
        <div>
          <button @click="visible_save = true" class="save btn-style">
            저장
          </button>
          <saveModal v-bind:visible="visible_save" @change="changeSaveModal" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import myModal from "@/components/classify/my-modal";
import saveModal from "@/components/classify/saveModal";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  data() {
    return {
      visible: false,
      visible_save: false,
      newTitle: "",
      delete: false,
      list1: [
        { name: "John", id: 1, delete: false },
        { name: "Joao", id: 2, delete: false },
        { name: "Jean", id: 3, delete: false },
        { name: "Gerard", id: 4, delete: false }
      ],
      list2: [
        { name: "Juan", id: 5, delete: false },
        { name: "Edgard", id: 6, delete: false },
        { name: "Johnson", id: 7, delete: false }
      ],
      click: ""
    };
  },
  components: {
    appMyModal: myModal,
    saveModal,
    draggable
  },
  created() {
    window.addEventListener("beforeunload", this.handleBrowser);
  },
  methods: {
    handleBrowser: function handleBrowser(e) {
      e.preventDefault();
      e.returnValue = "";
    },
    handle_delete(i) {
      console.log("선택 인덱스", i);
      console.log("상태", this.delete);
      this.click = i;
      if (this.list2[i].delete == false) {
        this.list2[i].delete = true;
      } else {
        this.list2[i].delete = false;
      }
    },
    changeModal(val) {
      this.visible = val;
    },
    changeSaveModal(val) {
      this.visible_save = val;
    }
  }
};
</script>

<style scoped lang="scss">
.datail-container {
  width: 500px;
  margin: 0 auto;

  .section {
    .board-container {
      h3 {
        margin-bottom: 20px;
      }

      .col-3:nth-child(2) {
        h3 {
          margin-top: 20px;
        }
      }
      .list-group-item {
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #333;
        cursor: pointer;
        background-size: 15px 15px;

        &.delete {
          background: url("../../assets/close_r.png") no-repeat 96% center;
        }

        &.refresh {
          background: url("../../assets/refresh.png") no-repeat 96% center;
          text-decoration: line-through;
        }
      }
    }
  }

  .button-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .btn-style {
      width: 100px;
      padding: 10px 0;
      border: 0;
      border: 1px solid #333;
      background: none;
      font-size: 13px;
      cursor: pointer;

      &:hover {
        background: #e5e5e5;
        font-weight: 700;
      }
    }
  }
}
</style>
