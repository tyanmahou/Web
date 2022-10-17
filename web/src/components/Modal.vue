<template>
  <a :href="'#'+id" class="modal">
    <slot name="title"></slot>
  </a>
  <section :id="id" style="display: none">
    <slot name="contents"></slot>  
  </section>
</template>

<script>
export default {
  name: "Modal",
  props: {
    id: String
  },
  mounted() {
    $(".modal").modaal({
      overlay_close: true,
      animation_speed: 200,
    });
  },
};
</script>

<style lang="scss">
.modaal-close:after,
.modaal-close:before {
  background: #ccc;
}

.modaal-close:focus:after,
.modaal-close:focus:before,
.modaal-close:hover:after,
.modaal-close:hover:before {
  background: #2e8b57;
}
</style>
