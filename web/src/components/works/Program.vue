<template>
  <h2>GAME</h2>
  <lsma :element-width="310" :margin-offset="20" class="contents-wrap">
    <ul class="game-list">
      <li v-for="item in game">
        <mymodal>
          <template #title>
            <div class="work-img">
              <img :src="item.img" width="300" class="game-img">
            </div>
            <div class="detail">
              <p class="title">
                {{ item.title }}
              </p>
              <p class="caption">
                {{ item.caption }}
              </p>
              <p v-if="item.event" class="event">
                {{ item.event }}
              </p>
              <playableicon class="playable-icon" v-if="item.playable" />
            </div>
            <hr />
          </template>
          <template #contents>
            <component :is="item.detail" />
          </template>
        </mymodal>
      </li>
    </ul>
  </lsma>
  <h2>WEB</h2>
  <lsma :element-width="310" :margin-offset="20" class="contents-wrap">
    <ul class="web-list">
        <li v-for="item in web">
          <mymodal>
            <template #title>
              <div class="work-img">
                <img :src="item.img" width="300" class="web-img">
              </div>
              <div class="detail">
                <p class="title">
                  {{ item.title }}
                </p>
                <p class="caption">
                  {{ item.caption }}
                </p>
                <p v-if="item.event" class="event">
                  {{ item.event }}
                </p>
              </div>
              <hr />
            </template>
            <template #contents>
              <component :is="item.detail" />
            </template>
          </mymodal>
        </li>
      </ul>
  </lsma>
  <h2>Library</h2>
  <lsma :element-width="310" :margin-offset="20" class="contents-wrap">
    <ul id="library-ul" class="library-list">
      <li v-for="item in library">
        <mylink :url="item.detail" absolute target="_blank">
          <p class="title">
            {{ item.title }}
          <div class="ex">
          </div>
          </p>
          <div class="detail">
            <p class="lang">{{ item.lang }}</p>
            <p class="caption">
              {{ item.caption }}
            </p>
            <div class="icon">
              <img src="@/assets/commons/icon/web/github.png" width="28" />
            </div>
          </div>
        </mylink>
        <hr />
      </li>
    </ul>
  </lsma>
</template>
  
<script>
import mylink from "@/components/Link.vue"
import mymodal from "@/components/Modal.vue"
import playableicon from "@/components/works/program/PlayableIcon.vue"
import lsma from "@/components/ListSideMarginAdjuster.vue"

import game from "@/data/works/game";
import web from "@/data/works/web";
import library from "@/data/works/library";

export default {
  name: "Program",
  data() {
    return {
      game: game,
      web: web,
      library: library,
    };
  },
  components: {
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

ul {
  hr {
    border-top: 1px solid $color-theme;
  }
}

ul.game-list,
ul.web-list {
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
      }

      img.game-img {
        width: 100%;
        height: 100%;
      }

      img.web-img {
        max-width: 100%;
        max-height: 100%;
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

ul.library-list {
  text-align: left;

  @media only screen and (max-width: $layout-mobile) {
    text-align: center;
  }

  li {
    display: inline-block;
    margin: 5px;

    width: 300px;
    text-align: left;
    vertical-align: top;

    a {
      text-decoration: none;
    }

    .title {
      color: #008080;
      font-size: 30px;
      font-weight: bold;
      transition: .2s;

      .ex {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: #008080;
        background-blend-mode: multiply;
        mask-image: url(@/assets/commons/icon/external_link.png);
        mask-size: 20px;
      }
    }

    .detail {
      position: relative;
      height: 40px;

      .lang {
        color: $color-text;
        font-size: 15px;
      }

      .caption {
        color: $color-text;
        font-size: 12px;
      }

      .icon {
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }

    &:hover {
      .title {
        color: $color-theme;

        .ex {
          background-color: $color-theme;
        }
      }
    }
  }
}
</style>
  