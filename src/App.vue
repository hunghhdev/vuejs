<template>
  <div id="app">
    <div class="container">
      <CompHeader v-bind:title="msg" v-on:changeTitleEvent="handleChangeTitle" />
      <list-user v-bind:listUser="listUser" v-on:deleteUserEvent="handleDeleteUser" />
      <button v-on:click="msg='hehe'">Change title</button>
      <comp-footer v-bind:msg="msg" />
      <demo-ref />
      <demo-slot />
    </div>
  </div>
</template>

<script>
import ListUser from "./components/ListUser";
import CompHeader from "./components/CompHeader";
import CompFooter from "./components/CompFooter";
import DemoRef from "./components/DemoRef";
import DemoSlot from "./components/DemoSlot";
export default {
  name: "app",
  components: {
    CompHeader,
    CompFooter,
    ListUser,
    DemoRef,
    DemoSlot
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      listUser: [
        { id: 1, email: "test@gmail.com", active: true },
        { id: 2, email: "test1@gmail.com", active: true },
        { id: 3, email: "test2@gmail.com", active: false },
        { id: 4, email: "test3@gmail.com", active: true }
      ]
    };
  },
  methods: {
    handleChangeTitle(e) {
      this.msg = e.xxxxxx;
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((u, idx) => {
        if (u.id === data.id) {
          indexDelete = idx;
        }
        if (indexDelete != -1) {
          this.listUser.splice(indexDelete, 1);
        }
      });
    }
  }
};
/*
Props Down -> Truyền dữ liệu từ thằng cha vào con -> Thằng con chỉ được dùng thôi. Không được thay đổi trực tiếp
Event Up -> Truyền thông điệp thông báo cho Component cha biết là nó muốn thay đổi dữ liệu -> Nhiệm vụ của Component cha là nhận được thông điệp và tiến hành thay đổi data -> Custom Event trong vuejs

	click -> Sự kiện có sẵn trong vuejs
	v-on:click="changeTitle"
	    'click' -> Tên của sự kiện
	    'changeTitle' -> Hàm xử lí khi sự kiện được kích hoạt
*/
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}
</style>
