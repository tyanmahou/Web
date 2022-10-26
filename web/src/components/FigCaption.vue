<template>
  <figure>
    <slot />
    <figcaption>
      <h4>{{title}}</h4>
      <p>{{caption}}</p>
    </figcaption>
  </figure>
</template>
    
<script>
export default {
  name: "FigCaption",
  props: {
    title: String,
    caption: String,
  }
};
</script>
    
<style lang="scss" scoped>
figure {
  min-height: 120px;
  background: #fff;
  color: #fff;
  display: inline-block;
  position: relative;
  overflow: hidden;

  :deep(img) {
    vertical-align: middle;
  }
  
  figcaption {
    h4,
    p {
      position: absolute;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: rgba(0, 0, 0, .6);
      transition: all .3s;
    }

    h4 {
      top: -40px;
    }

    p {
      bottom: -40px;
    }
  }

  &:hover figcaption {
    h4 {
      top: 0;
    }

    p {
      bottom: 0;
    }
  }
}
</style>
    