<template>
  <myheader current="1" />
  <div class="main">
    <div class="main-container">
      <h1>GAME</h1>
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
  name: "game-view",
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
