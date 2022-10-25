<template>
  <div class="changelog">
    <ul>
      <li v-for="item in items">
        <span class="date">{{ item.date }}</span>
        <div class="text" style="white-space: pre-wrap">
          {{ item.text }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import changelog from "@/data/changelog";
export default {
  name: "ChangeLog",
  data() {
    return {
      items: changelog,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

.changelog {
  width: 100%;
  background: $color-theme-sub;
  ul {
    list-style: none;
    padding: 5px 0 5px 0;
    li {
      color: $color-text;
      border: solid;
      border-color: $color-textbg;
      background: $color-textbg;
      margin: 30px 20px 25px 20px;
      padding: 10px;
      position: relative;
      font-weight: normal;
      span.date {
        position: absolute;
        top: -30px;
        left: -40px;
        border: 1px solid;
        border-color: $color-textbg;
        font-weight: bold;
        color: $color-text-light;
        background: $color-theme;
        padding: 5px;
      }
    }
  }
}
</style>
