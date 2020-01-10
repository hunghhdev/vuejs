<template>
  <div class="comp-tabs">
    <div class="tabs-title">
      <span>{{title}}</span>
      <i class="icon ion-md-heart"></i>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp-tabs",
  props: {
    title: String
  },
  data() {
    return {};
  }
};
</script>

<style>
.tabs-title {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  border: 2px solid #000;
}
.tabs-content {
  border: 2px solid blue;
  margin-top: 2px;
  padding: 2px;
}
.tabs-header {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.tabs-header li {
  padding: 8px 15px;
  background-color: #ccc;
  transition: all 0.3s ease;
}
.tabs-header li:hover {
  color: #fff;
  background-color: #333;
}
.tab-content {
  padding: 15px;
  border: 2px solid green;
  text-align: left;
}
</style>