<template>
  <div class="list-user">
    <user
      v-for="user in listUser"
      v-bind:key="user.id"
      v-bind:user="user"
      v-on:deleteUser="deleteUser"
    />
  </div>
</template>

<script>
import User from "./User";
export default {
  name: "list-user",
  props: {
    listUser: {
      type: Array,
      default: []
    }
  },
  components: {
    User
  },
  data() {
    return {};
  },
  methods: {
    deleteUser(data) {
      this.$emit("deleteUserEvent", data);
    }
  }
};
</script>

<style>
.list-user {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>