<template>
  <div class="header">
    <mylink :url="current == 0 ? '#' : '/'" :absolute="current == 0">
      <div class="logo">
        <img src="../assets/commons/web_logo.png" width="300" />
      </div>
    </mylink>
    <div class="burger">
      <burger :open="openBurger" v-on:click="openBurger = !openBurger" />
    </div>
    <div v-bind:class="{'burger-area': true, 'burger-open' : openBurger, }">
      <div class="navi">
        <ul class="core">
          <li v-for="(item, index) in navis" :key="item.name" v-bind:class="current == index ? 'current' : ''">
            <a v-if="item.external" :href="item.url" target="_blank">
              {{ item.name }}
              <img src="@/assets/commons/icon/external_link.png" width="15" />
            </a>
            <mylink v-else :url="current == index ? '#' : item.url" :absolute="current == index">
              {{ item.name }}
            </mylink>
          </li>
        </ul>
        <ul class="service">
          <li v-for="item in services">
            <serviceicon :url="item.url" :icon="item.icon" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import serviceicon from "@/components/ServiceIcon.vue";
import mylink from "@/components/Link.vue";
import burger from "@/components/BurgerBtn.vue";
export default {
  name: "Header",
  props: {
    current: String,
  },
  components: {
    serviceicon,
    mylink,
    burger,
  },
  data() {
    return {
      openBurger: false,
      navis: [
        {
          name: "TOP",
          url: "/",
          external: false,
        },
        {
          name: "GAMES",
          url: "/games",
          external: false,
        },
        {
          name: "WORKS",
          url: "/works",
          external: false,
        },
        {
          name: "BLOG",
          url: "https://mahou-ptr.hatenablog.com",
          external: true,
        },
        {
          name: "ABOUT",
          url: "/about",
          external: false,
        },
      ],
      services: [
        {
          url: "https://twitter.com/tyanmahou",
          icon: "twitter.png",
        },
        {
          url: "https://github.com/tyanmahou",
          icon: "github.png",
        },
        {
          url: "https://www.pixiv.net/users/15137779",
          icon: "pixiv.png",
        },
        {
          url: "https://soundcloud.com/tyanmahou",
          icon: "soundcloud.png",
        },
        {
          url: "https://www.youtube.com/user/tyanmahou",
          icon: "youtube.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

// ヘッダー
.header {
  margin: 0% 0 40px 0;
  //min-width: $layout-min-width;
  width: 100%;
  height: 60px;

  background: $color-theme;
  position: fixed;
  z-index: 3;

  .logo {
    margin: 0 0 0 layout-px-lerp(0, 100);
    padding: 15px 0 0 0;
    height: 85px;
    width: 300px;
    background: $color-textbg;
    border-radius: 0 0 30px 30px;
    float: left;

    transition: all 0.2s;

    &:hover {
      padding: 20px 0 0 0;
    }

    @media only screen and (max-width: $layout-min-width) {
      padding: 0;
      height: 60px;
      border-radius: 0;

      &:hover {
        padding: 5px 0 0 0;
      }
    }
  }

  .burger {
    margin: 2px layout-px-lerp(5, 20, 420px, 850px) 0 0;
    display: none;

    @media only screen and (max-width: 850px) {
      display: flex;
      justify-content: flex-end;
    }

    @media only screen and (max-width: 420px) {
      margin-right: 5px;
    }
  }

  .burger-area {
    display: block;

    @media only screen and (max-width: 850px) {
      display: none;

      &.burger-open {
        display: block;
      }
    }
  }

  .navi {
    padding: 20px layout-px-lerp(15, 50) 0 0;
    color: $color-text-light;
    // 右寄せ
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 850px) {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      height: calc(100vh - 60px);
      display: initial;
      background: #000000C0;
      text-align: center;
      align-items: center;
      z-index: -1;
      overflow: auto;

      padding: 50px 0 0 0;
    }
    @media only screen and (max-width: $layout-min-width) {
      padding: 0px 0 0 0;
    }
    ul.core {
      display: flex;

      @media only screen and (max-width: 850px) {
        display: block;
      }

      list-style: none;

      li {
        margin-bottom: 20px;
        white-space: nowrap;

        a {
          display: block;
          padding: 0 10px;
          text-decoration: none;
          color: $color-text-light;

          /*線の基点とするためrelativeを指定*/
          position: relative;
        }

        a::after {
          content: "";
          /*絶対配置で線の位置を決める*/
          position: absolute;
          bottom: 0;
          left: 10%;
          /*線の形状*/
          width: 80%;
          height: 2px;
          background: $color-text-light;
          /*アニメーションの指定*/
          transition: all 0.3s;
          transform: scale(0, 1);
          /*X方向0、Y方向1*/
          transform-origin: center top;
          /*上部中央基点*/
          @media only screen and (max-width: 850px) {
            display: none;
          }           
        }

        /*現在地とhoverの設定*/
        &.current a::after,
        a:hover::after {
          transform: scale(1, 1);
          /*X方向にスケール拡大*/
        }
     
        @media only screen and (max-width: 850px) {
          font-size: 20px;
          margin: 0;
          padding: 15px 0;
          border-bottom: 1px solid $color-theme;
          a {
            width: 100%;
            height: 100%;
          }
          &:hover{
            background: mix($color-theme, #ffffff20, 50%);
          }
        }        
      }
    }

    ul.service {
      display: flex;

      @media only screen and (max-width: 850px) {
        margin-top: 20px;
        justify-content: center;
        :deep(img) {
          width: 40px;
        }
      }

      list-style: none;

      li {
        margin-bottom: 20px;
        padding: 0 3px;

        transition: all 0.3s;

        &:hover {
          transform: scale(0.9);
        }
        @media only screen and (max-width: 850px) {
          padding: 0 10px;
        }        
      }
    }
  }
}
</style>
