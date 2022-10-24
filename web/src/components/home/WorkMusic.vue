<template>
  <div class="music">
    <div class="pickup">
      <mysound :id="pickup.id" :width="pickup.width" :height="pickup.height" :visual="this.visual"/>
    </div>
    <ul class="sub">
      <li v-for="id in sub.list">
        <mysound :id="id" :width="sub.width" :height="sub.height" :visual="this.visual"/>
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
      visual: false,
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
  mounted() {
    this.visual = window.matchMedia('(max-width: 420px)').matches;
    window.addEventListener('resize', ()=>{
      this.visual = window.matchMedia('(max-width: 420px)').matches;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";
.music {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 820px;

  ul.sub {
    list-style: none;
  }


  @media only screen and (max-width: $layout-mobile) {
      :deep(iframe) {
      height: 120px;
    }
  }  
}
</style>
