<template>
  <div class="music">
    <div class="pickup">
      <mysound :url="pickup.url" :width="pickup.width" :height="pickup.height" :visual="this.visual"/>
    </div>
    <ul class="sub">
      <li v-for="url in sub.list">
        <mysound :url="url" :width="sub.width" :height="sub.height" :visual="this.visual"/>
      </li>
    </ul>
  </div>
</template>

<script>
import mysound from "@/components/MySound.vue";

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
        url: "https://soundcloud.com/tyanmahou/flower-days",
        width: "100%",
        height: "170",
      },
      sub: {
        width: "100%",
        height: "100",
        list: [
          "https://soundcloud.com/tyanmahou/chip-seekers",
          "https://soundcloud.com/tyanmahou/wqtvlbqiqgzo",
          "https://soundcloud.com/tyanmahou/neo-the-city",
          "https://soundcloud.com/tyanmahou/code-of-eden",
        ],
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
      height: 150px;
    }
  }  
}
</style>
