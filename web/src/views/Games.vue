<template>
  <myheader current="1" />
  <div class="main">
    <div class="head-container">
      <img src="@/assets/games/Re-Abyss.png">
    </div>
    <div class="main-container">
      <h1>GAMES</h1>
      <h2>UPCOMING</h2>
      <lsma :element-width="310" :margin-offset="20" class="contents-wrap">
        <ul class="game-list">
          <li v-for="item in upcoming">
            <mymodal>
              <template #title>
                <div class="work-img">
                  <img :src="item.img" width="300">
                </div>
                <div class="detail">
                  <p class="title">
                    {{ item.title }}
                  </p>
                  <p class="caption">
                    {{ item.caption }}
                  </p>
                  <playableicon class="playable-icon" v-if="item.playable" />
                </div>
                <hr />
              </template>
              <template #contents>
                <component :is="item.detail" :detailed="false" />
              </template>
            </mymodal>
          </li>
        </ul>
      </lsma>
      <h2>RELEASED</h2>
      <lsma :element-width="310" :margin-offset="20" class="contents-wrap">
        <ul class="game-list">
          <li v-for="item in released">
            <mymodal>
              <template #title>
                <div class="work-img">
                  <img :src="item.img" width="300">
                </div>
                <div class="detail">
                  <p class="title">
                    {{ item.title }}
                  </p>
                  <p class="caption">
                    {{ item.caption }}
                  </p>
                  <playableicon class="playable-icon" v-if="item.playable" />
                </div>
                <hr />
              </template>
              <template #contents>
                <component :is="item.detail" :detailed="false" />
              </template>
            </mymodal>
          </li>
        </ul>
      </lsma>
      <h2>CASUAL</h2>
      <lsma :element-width="310" :margin-offset="20" class="contents-wrap">
        <ul class="game-list">
          <li v-for="item in casual">
            <mymodal>
              <template #title>
                <div class="work-img">
                  <img :src="item.img" width="300">
                </div>
                <div class="detail">
                  <p class="title">
                    {{ item.title }}
                  </p>
                  <p class="caption">
                    {{ item.caption }}
                  </p>
                  <playableicon class="playable-icon" v-if="item.playable" />
                </div>
                <hr />
              </template>
              <template #contents>
                <component :is="item.detail" :detailed="false" />
              </template>
            </mymodal>
          </li>
        </ul>
      </lsma>
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";
import mylink from "@/components/Link.vue"
import mymodal from "@/components/Modal.vue"
import playableicon from "@/components/works/program/PlayableIcon.vue"
import lsma from "@/components/ListSideMarginAdjuster.vue"

import upcoming from "@/data/games/upcoming";
import released from "@/data/games/released";
import casual from "@/data/games/casual";

export default {
  name: "GamesView",
  data() {
    return {
      upcoming: upcoming,
      released: released,
      casual: casual,
    };
  },
  components: {
    myheader,
    foot,
    mylink,
    mymodal,
    playableicon,
    lsma,
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.head-container {
  margin: -20px 0 0 0;
  padding: 40px 0 40px 0;

  @media only screen and (max-width: $layout-mobile) {
    margin: 20px 0 0 0;
    padding: 0px 0 0px 0;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
}

ul {
  hr {
    border-top: 1px solid $color-theme;
  }
}

ul.game-list {
  list-style: none;
  text-align: left;

  @media only screen and (max-width: $layout-mobile) {
    text-align: center;
  }

  li {

    display: inline-block;
    margin: 5px;

    width: 300px;
    vertical-align: top;

    .work-img {
      display: table-cell;
      vertical-align: middle;
      width: 300px;
      height: 225px;
      overflow: hidden;
      text-align: center;
      background-color: #fff;

      img {
        object-fit: cover;
        vertical-align: middle;
        transition: .2s;
        width: 100%;
        height: 100%;
      }
    }

    .detail {
      position: relative;
      height: 70px;
      text-align: left;

      .title {
        font-size: 15px;
        font-weight: bold;
        transition: .2s;
      }

      .caption {
        font-size: 12px;
      }

      .event {
        display: inline;
        color: #fff;
        background-color: #aaa;
        font-size: 10px;
        padding: 2px;
        border-radius: 7px;
      }

      .playable-icon {
        position: absolute;
        top: 28px;
        right: 5px;
      }
    }

    &:hover {
      .work-img {
        img {
          opacity: 0.7;
          scale: 105%;
        }
      }

      .detail {
        .title {
          color: $color-theme;
        }
      }
    }
  }
}
</style>
