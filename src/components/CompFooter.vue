<template>
  <footer>
    <h1>{{text}}</h1>
    <h3>{{msg}}</h3>
  </footer>
</template>

<script>
export default {
  name: "comp-footer",
  props: {
    msg: String
  },
  data() {
    return {
      text: "Footer"
    };
  }
};
</script>

<style>
</style>