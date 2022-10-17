<template>
<a :href="$props.url" target="_blank"><img :src="imgsrc()" :width="$props.width" /></a>
</template>

<script>
export default {
  name: "ServiceIcon",
  props: {
    url: String,
    icon: String,
    width: {
        type: Number,
        default: 20
    }
  },
  methods: {
    imgsrc(){
      return require(`@/assets/commons/icon/${this.$props.icon}`);
    },
  }  
};
</script>
