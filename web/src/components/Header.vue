<template>
  <div class="header">
      <a href="#">
    <div class="logo">
        <img src="../assets/commons/web_logo.png" width="300" />
    </div>
      </a>
    <div class="navi">
      <ul class="core">
        <li class="current"><a href="#">Top</a></li>
        <li><a href="#">GAMES</a></li>
        <li><a href="#">GALLERY</a></li>
        <li><a href="https://mahou-ptr.hatenablog.com" target="_blank">BLOG</a></li>
        <li><a href="#">ABOUT</a></li>
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
export default {
  name: "Header",
  components: {
    serviceicon,
  },
};
</script>
