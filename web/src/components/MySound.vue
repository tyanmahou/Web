<template>
  <soundcloudEmbed
  :url="url"
  :width="width"
  :height="height"
  :color="color"
  showUser="false"
  hideRelated="true"
  :visual="visual"
  />
</template>

<script>
import soundcloudEmbed from "@/components/widgets/SoundCloud/Embed.vue";

export default {
  name: "MySound",
  props: {
    url: String,
    width : {
        type: String,
        default: "100%" 
    }, 
    height: {
        type: String,
        default: "300" 
    },
    visual: {
      type: Boolean,
      default: false
    }
  },
  components: {
    soundcloudEmbed
  },
  data() {
    return {
        color: "00cc11"
    };
  }
};
</script>
