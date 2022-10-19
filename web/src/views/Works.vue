<template>
  <myheader current="2" />
  <div class="main">
    <div class="main-container">
      <h1>WORKS</h1>
      <div class="contents-wrap">
      Comming Soon
      </div>
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";
export default {
  name: "WorksView",
  data() {
    return {};
  },
  components: {
    myheader,
    foot,
  },
};
</script>

<style lang="scss">
</style>
