<template>
  <div class="soundcloud-mysound">
    <iframe
      :width="width"
      :height="height"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=${color}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "MySound",
  props: {
    id: Number,
    width : {
        type: String,
        default: "100%" 
    }, 
    height: {
        type: String,
        default: "300" 
    }
  },
  data() {
    return {
        color: "00cc11"
    };
  }
};
</script>
