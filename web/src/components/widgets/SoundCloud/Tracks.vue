<template>
  <div class="soundcloud-tracks">
    <iframe
      :width="width"
      :height="height"
      scrolling="no"
      frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/152681006&amp;color=00cc11&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Tracks",
  props: ["width", "height"],
};
</script>
