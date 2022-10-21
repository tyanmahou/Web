<template>
  <div class="music">
    <div class="pickup">
      <mysound :id="pickup.id" :width="pickup.width" :height="pickup.height" />
    </div>
    <ul class="sub">
      <li v-for="id in sub.list">
        <mysound :id="id" :width="sub.width" :height="sub.height" />
      </li>
    </ul>
  </div>
</template>

<script>
import mysound from "@/components/widgets/SoundCloud/MySound.vue";

export default {
  name: "WorkMusic",
  props: {
  },
  components: {
    mysound,
  },
  data() {
    return {
      pickup: {
        id: 1356820102,
        width: "100%",
        height: "170",
      },
      sub: {
        width: "100%",
        height: "100",
        list: [685584331, 720784921, 1290148249, 439877295],
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.music {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 820px;
  // .pickup {
  //   float: right;
  // }

  ul.sub {
    list-style: none;
    // &>li {
    //   display: inline-block;
    // }
  }
}
</style>
