<template>
  <div class="wrap">
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ChangeLog",
  data() {
    return {
      items: [],
    };
  },
  mounted () {
    axios.get('server/changelog.json')
      .then(response => {
        this.items = response.data
      })
      .catch(error => {
        console.log(error)
      });
  },    
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.wrap {
  text-align: left;
  width: calc(100% - 60px);
  padding: 30px;
  background: $color-textbg;
}
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
