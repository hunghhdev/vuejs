<template>
  <div class="demo-slot">
    <comp-tabs title="title by tabs">
      <ul class="tabs-header">
        <li
          v-for="(item, index) in tabsHeader"
          v-bind:key="index"
          v-on:click="setActiveTab(index)"
          v-bind:class="{active: tabActive==index}"
        >{{item.text}}</li>
      </ul>
      <div class="tab-content tab1" v-if="tabActive===0">
        <p>Tab1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur maxime incidunt dolore, illum odio. Error asperiores at officiis nam enim architecto sunt voluptas non voluptate eius est, commodi minima!</p>
      </div>
      <div class="tab-content tab2" v-else-if="tabActive===1">
        <p>Tab2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi magni quibusdam repellendus, tenetur expedita hic architecto? Blanditiis amet fugit quia repellendus facere, et, illum minima obcaecati impedit dicta quo aliquid.</p>
      </div>
      <div class="tab-content tab3" v-else-if="tabActive===2">
        <p>Tab3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deserunt earum quas excepturi cupiditate velit iusto nisi neque, minima optio. Eligendi tempore est odit debitis quis asperiores vel. Eveniet, illo.</p>
      </div>
    </comp-tabs>
  </div>
</template>

<script>
import CompTabs from "./CompTabs";
export default {
  name: "demo-slot",
  components: {
    CompTabs
  },
  data() {
    return {
      tabsHeader: [{ text: "tab1" }, { text: "tab2" }, { text: "tab3" }],
      tabActive: 0
    };
  },
  methods: {
    setActiveTab(i) {
      this.tabActive = i;
    }
  }
};
</script>

<style>
.demo-slot {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #000;
}
</style>