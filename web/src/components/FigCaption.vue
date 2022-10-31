<template>
  <figure>
    <slot />
    <figcaption>
      <div class="inner">
        <h4>{{ title }}</h4>
        <p>{{ caption }}</p>
      </div>
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
    position: absolute;
    text-align: center;
    background: rgba(0, 0, 0, .9);
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    opacity: 0;
    transition: all .3s;
    white-space: pre-line;

    .inner {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h4 {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
  &:hover {
    figcaption {
      opacity: 1;
    }
  }
}
</style>
    