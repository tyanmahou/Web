<template>
  <div class="contents-wrap">
    <h2>LINEスタンプ</h2>
    <div class="text">
      <h3>まほうくん スタンプ</h3>
      <div>
        <a href="https://store.line.me/stickershop/product/13692750" target="_blank">
          <img src="@/assets/works/goods/mahou-kun-stamp.png">
        </a>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Program",
  data() {
    return {
      isActive: 1
    };
  },
  components: {
  },
};
</script>
  
<style lang="scss" scoped>
.text {
  border-radius: 25px;
}

a img {
  transition: all 0.3s;

  &:hover {
    transform: scale(0.95);
  }
}
</style>
  