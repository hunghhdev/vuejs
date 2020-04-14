<template>
  <header>
    <title>{{title}}</title>
    <h1>{{text}}</h1>
    <h2>
      {{title}}
      <br />
      <button v-on:click="changeTitleHeader">Thay doi title tu CompHeader</button>
    </h2>
  </header>
</template>

<script>
export default {
  name: "comp-header",
  props: {
    title: String
  },
  data() {
    return {
      text: "Header"
    };
  },
  methods: {
    changeTitleHeader(e) {
      // console.log(this);
      var data = {
        xxxxxx: "test -> data truyen thong qua bien event"
      };
      this.$emit("changeTitleEvent", data);
    }
  }
};
</script>

<style>
</style>