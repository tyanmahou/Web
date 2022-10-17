<template>
  <div class="header">
      <a href="#">
    <div class="logo">
        <img src="../assets/commons/web_logo.png" width="300" />
    </div>
      </a>
    <div class="navi">
      <ul class="core">
        <li v-bind:class="current == 0 ? 'current' : ''"><mylink url="/">Top</mylink></li>
        <li v-bind:class="current == 1 ? 'current' : ''"><mylink url="/game">GAME</mylink></li>
        <li v-bind:class="current == 2 ? 'current' : ''"><mylink url="/gallery">GALLERY</mylink></li>
        <li><a href="https://mahou-ptr.hatenablog.com" target="_blank">BLOG <img src="@/assets/commons/icon/external_link.png" width="15" /></a></li>
        <li v-bind:class="current == 4 ? 'current' : ''"><mylink url="/about">ABOUT</mylink></li>
      </ul>
      <ul class="service">
        <li><serviceicon url="https://twitter.com/tyanmahou" icon="twitter.png" /></li>
        <li><serviceicon url="https://github.com/tyanmahou" icon="github.png" /></li>
        <li>
          <serviceicon url="https://soundcloud.com/tyanmahou" icon="soundcloud.png" />
        </li>
        <li>
          <serviceicon url="https://www.youtube.com/user/tyanmahou" icon="youtube.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import serviceicon from "@/components/ServiceIcon.vue";
import mylink from "@/components/Link.vue";
export default {
  name: "Header",
  props: {
    current: Number
  },
  components: {
    serviceicon,
    mylink,
  },
};
</script>
