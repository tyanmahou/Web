<template>
  <myheader current="2" />
  <div class="main">
    <div class="main-container">
      <h1>WORKS</h1>
      <div class="works">
        <ul class="tabs">
          <li v-on:click="change(1)" v-bind:class="{'active': isActive === 1}">PROGRAM</li>
          <li v-on:click="change(2)" v-bind:class="{'active': isActive === 2}">ILLUST</li>
          <li v-on:click="change(3)" v-bind:class="{'active': isActive === 3}">MUSIC</li>
          <li v-on:click="change(4)" v-bind:class="{'active': isActive === 4}">GOODS</li>
        </ul>

        <ul class="contents">
          <li v-if="isActive === 1">
          <programtab/>
          </li>
          <li v-else-if="isActive === 2">
            <illusttab/>
          </li>
          <li v-else-if="isActive === 3">
            <musictab/>
          </li>
          <li v-else-if="isActive === 4">
            <goodstab />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";

import programtab from "@/components/works/Program.vue";
import illusttab from "@/components/works/Illust.vue";
import musictab from "@/components/works/Music.vue";
import goodstab from "@/components/works/Goods.vue";


export default {
  name: "WorksView",
  data() {
    return {
      isActive: 1
    };
  },
  components: {
    myheader,
    foot,
    programtab,
    illusttab,
    musictab,
    goodstab,
  },
  methods: {
    change(num) {
      this.isActive = num
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

.works {
  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  .tabs {
    overflow: hidden;
    li {
      font-weight: bold;
      font-size: 25px;
      float: left;
      padding: 10px 20px;
      background-color: $color-theme-sub;
      border: 1px solid $color-theme;
      color: $color-text-light;
      cursor: pointer;
      transition: .3s;

      @media only screen and (max-width: $layout-mobile) {
        float: none;
        border: 1px solid $color-theme;
      } 
      &:not(:first-child) {
        border-left: none;
        @media only screen and (max-width: $layout-mobile) {
          border: 1px solid $color-theme;
        }         
      }

      &.active {
        color: $color-theme;
        border-bottom: none;
        background-color: $color-mainbg;
        cursor: auto;
        @media only screen and (max-width: $layout-mobile) {
          border: 1px solid $color-theme;
        }           
      }
    }
  }

  .contents {
    overflow: hidden;
  }

  .contents li {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
