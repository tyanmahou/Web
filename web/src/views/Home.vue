<template>
  <div class="main">
    <myheader />
    <h2>コンテンツ</h2>
    <div id="text">aaaaa
    
    <p>
    aa<br>
    aa<br>
    aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>aa<br>
    </p>
    </div>
    <foot />
  </div>    
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