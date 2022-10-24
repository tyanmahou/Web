<template>
  <h2>TRACKS</h2>
  <div class="contents-wrap">
    <div class="text">
      <tracks width="100%" height="500" />
    </div>
  </div>
</template>
  
<script>
import tracks from "@/components/widgets/SoundCloud/Tracks.vue";

export default {
  name: "Music",
  data() {
    return {
    };
  },
  components: {
    tracks,
  },
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common.scss";

@media only screen and (max-width: $layout-mobile) {
  .text {
    all: initial;
  }
}
</style>
  