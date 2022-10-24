<template>
  <h2>LINEスタンプ</h2>
  <div class="contents-wrap">
    <ul>
      <li>
        <h3>まほうくん スタンプ</h3>
        <div class="text">
          <a href="https://store.line.me/stickershop/product/13692750" target="_blank">
            <img src="@/assets/works/goods/mahou-kun-stamp.png">
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: "Goods",
  data() {
    return {
    };
  },
  components: {
  },
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common";

a img {
  transition: all 0.3s;

  &:hover {
    transform: scale(0.95);
  }
}
ul {
  list-style: none;
  li {
      width: 390px;
      @media only screen and (max-width: $layout-min-width) {
        width: min(390px, 100%);
        img {
          width: 100%;
        }
      }
  }
}
</style>
  