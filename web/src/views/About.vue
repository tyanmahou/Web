<template>
  <myheader />
  <div class="main">
    <div class="main-container">
      <h2>PROFILE</h2>
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";
export default {
  name: "about-view",
  data() {
    return {};
  },
  components: {
    myheader,
    foot,
  },
};
</script>

<style lang="scss"></style>
