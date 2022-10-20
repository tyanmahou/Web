<template>
  <p>
    <span class="big2"
      ><ruby>創作活動<rt>モノづくり</rt></ruby></span
    >で
    <span class="big"
      ><ruby>世界<rt>せかい</rt></ruby></span
    >をつくる
  </p>
</template>

<script>
export default {
  name: "MyMission",
  props: {},
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
p {
  span.big {
    font-size: 2em;
  }
  span.big2 {
    padding: 0 0 0 0px;
    font-size: 2em;
  }

  rt {
    font-size: 0.3em;
  }
}
</style>
