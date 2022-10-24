<template>
  <a :href="'#'+id" class="image-modal">
    <img :src="src" :width="width" :height="height">
  </a>
  <section :id="id" style="display: none">
    <img :src="src" class="custom-class"/>
  </section>
</template>
<script>
export default {
    name: "ImageModal",
    props: {
        src: String,
        id: String,
        width: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: null
        }
    },
    mounted() {
        $(".image-modal").modaal({
            //type: "image",
            overlay_close: true,
            animation_speed: 200,
            custom_class: "image-modal-custom"      
        });
    },
};
</script>

<style lang="scss" scoped>
.image-modal {
    img {
      transition: all 0.3s;
      &:hover {
        transform: scale(0.95);
      }          
    }     
}
</style>
<style lang="scss">
.image-modal-custom {
    .modaal-container{
        all: initial;
        display: inline-block;
        margin: 0;
        padding: 0;
    }
    .modaal-content-container{
        text-align: center;
        margin: 0;
        padding: 0;
        img {
            max-width: 95vw;
            max-height: 95vh;
        }
    }
}
</style>
