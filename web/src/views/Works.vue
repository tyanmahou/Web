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
            <div class="contents-wrap">
              Comming Soon
            </div>
          </li>
          <li v-else-if="isActive === 2">
            <div class="contents-wrap">
              Comming Soon
            </div>          
          </li>
          <li v-else-if="isActive === 3">
            <div class="contents-wrap">
              Comming Soon
            </div>
          </li>
          <li v-else-if="isActive === 4">
            <div class="contents-wrap">
              Comming Soon
            </div>
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
  },
  methods: {
    change(num) {
      this.isActive = num
    }
  }
};
</script>

<style lang="scss">
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
      font-size: 20px;
      float: left;
      padding: 10px 20px;
      border: 1px solid $color-theme;
      border-bottom: none;
      cursor: pointer;
      transition: .3s;

      &:not(:first-child) {
        border-left: none;
      }

      &.active {

        background-color: $color-theme;
        border-color: $color-theme;
        color: #fff;
        cursor: auto;
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
