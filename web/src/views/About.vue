<template>
  <myheader current="4" />
  <div class="main">
    <div class="main-container">
      <h1>ABOUT</h1>
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

<style lang="scss">
.main-container {
    h1 {
        text-align: initial;
        color: #2e8b57;
        font-size: 70px;
        text-decoration: underline;
        
        &::first-letter{
            font-size: 120px;
        }
    }
}
</style>
