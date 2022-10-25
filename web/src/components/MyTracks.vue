<template>
    <soundcloudEmbed
    :url="url"
    :width="width"
    :height="height"
    :color="color"
    sharing="true"
    showUser="false"
    hideRelated="true"
    />
  </template>
  
  <script>
  import soundcloudEmbed from "@/components/widgets/SoundCloud/Embed.vue";
  
  export default {
    name: "MyTracks",
    props: {
      width : {
          type: String,
          default: "100%" 
      }, 
      height: {
          type: String,
          default: "300" 
      }
    },
    components: {
      soundcloudEmbed
    },
    data() {
      return {
          url: "https%3A//api.soundcloud.com/users/152681006",
          color: "00cc11",
      };
    }
  };
  </script>
  