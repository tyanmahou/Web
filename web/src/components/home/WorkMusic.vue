<template>
  <ul class="music">
    <li v-for="id in list">
      <mysound :id="id" :width="width" :height="width" />
    </li>
  </ul>
</template>

<script>
import mysound from "@/components/widgets/SoundCloud/MySound.vue";

export default {
  name: "WorkMusic",
  props: {
    width : {
        type: String,
        default: "250" 
    }, 
  },
  components: {
    mysound,
  },
  data() {
    return {
      list: [685584331, 720784921, 1290148249],
    };
  },
};
</script>

<style lang="scss" scoped>
ul.music {
  list-style: none;
  & > li {
    display: inline-block;
    margin: 10px;
  }
}
</style>
