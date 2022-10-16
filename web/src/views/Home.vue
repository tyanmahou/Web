<template>
  <myheader />
  <div class="main">
    <h2>コンテンツ</h2>
    <div id="text">
      aaaaa

      <p>
        aa<br />
        aa<br />
        aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa123<br />aaaaa<br />
      </p>
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";
export default {
  name: "home-view",
  data() {
    return {};
  },
  components: {
    myheader,
    foot,
  },
};
</script>
