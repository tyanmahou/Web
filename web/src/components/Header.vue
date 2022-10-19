<template>
  <div class="header">
    <mylink :url="current == 0 ? '#' : '/'" :absolute="current == 0">
      <div class="logo">
        <img src="../assets/commons/web_logo.png" width="300" />
      </div>
    </mylink>
    <div class="navi">
      <ul class="core">
        <li
          v-for="(item, index) in navis"
          :key="item.name"
          v-bind:class="current == index ? 'current' : ''"
        >
          <a v-if="item.external" :href="item.url" target="_blank">
            {{ item.name }}
            <img src="@/assets/commons/icon/external_link.png" width="15" />
          </a>
          <mylink
            v-else
            :url="current == index ? '#' : item.url"
            :absolute="current == index"
          >
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
</template>

<script>
import serviceicon from "@/components/ServiceIcon.vue";
import mylink from "@/components/Link.vue";
export default {
  name: "Header",
  props: {
    current: String,
  },
  components: {
    serviceicon,
    mylink,
  },
  data() {
    return {
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
    width: 100%;
    height: 60px;
    background: $color-theme;
    position: fixed;
    z-index: 2;


.logo {
  margin: 0 0 0 200px;
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
}

.navi {
  padding: 20px 120px 0 0;
  color: $color-text-light;
  // 右寄せ
  display: flex;
  justify-content: flex-end;

  ul.core {
    display: flex;
    list-style: none;

    li {
      margin-bottom: 20px;

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
      }
      /*現在地とhoverの設定*/
      &.current a::after,
      a:hover::after {
        transform: scale(1, 1);
        /*X方向にスケール拡大*/
      }
    }
  }
  ul.service {
    display: flex;
    list-style: none;

    li {
      margin-bottom: 20px;
      padding: 0 3px;

      transition: all 0.3s;
      &:hover {
        transform: scale(0.9);
      }      
    }
  }
}    
}
</style>
