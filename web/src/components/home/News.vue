<template>
  <ul class="news">
    <li v-for="item in news">
      <span class="date">{{ item.date }}</span>
      <h3>{{ item.title }}</h3>
      <div class="text">
        <div v-if="item.link">
          <mylink
            :url="item.link.url"
            :absolute="item.link.external"
            :target="item.link.external ? '_blank' : '_self'"
          >
            <figure>
              <img :src="item.img" width="300" />
            </figure>
          </mylink>
        </div>
        <div v-else>
          <figure>
            <img :src="item.img" width="300" />
          </figure>
        </div>
        <p v-html="item.text" />
      </div>
    </li>
  </ul>
</template>

<script>
import mylink from "@/components/Link.vue";

export default {
  name: "News",
  data() {
    return {
      news: [
        {
          date: "2022.10.24",
          title: "ホームページリニューアル！",
          img: require("@/assets/commons/web_logo.png"),
          text: `ホームページをリニューアルしました。<br>今後ともよろしくお願いいたします。`,
        },
        {
          date: "2021.7.23",
          title: "ColorfulTone v3.2.0 リリース",
          img: "https://colorfultone.tyanmahou.com/web/img/slide/Screenshot1.png",
          text: `
          <a href="https://colorfultone.tyanmahou.com/web/" target="_blank">
        「ColorfulTone」
         </a>の更新がリリースされました。<br>カスタムフォルダ機能の改善など          
          `,
          link :{
            url: "https://colorfultone.tyanmahou.com/web/",
            external: true
          },
        },
        {
          date: "2020.11.16",
          title: "LINEスタンプ販売開始",
          img: require("@/assets/works/goods/mahou-kun-stamp.png"),
          text: `LINEスタンプにて<a href="https://store.line.me/stickershop/product/13692750" target="_blank">
          「まほうくん スタンプ」<br /></a>販売開始！！<br>`,
          link :{
            url: "https://store.line.me/stickershop/product/13692750",
            external: true
          },          
        },
      ],
    };
  },
  components: {
    mylink,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

ul.news {
  $layout-fix: 1000px;

  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  @media only screen and (max-width: $layout-fix){
    flex-wrap:initial;
    overflow: auto;
    justify-content: left;
    margin-bottom: 10px;
  }  
  li {
    border: solid;
    border-color: $color-textbg;
    background: $color-textbg;
    margin: 30px 5px 20px 5px;
    min-width: 400px;
    @media only screen and (max-width: $layout-fix) {
      margin-left: 5px;
      margin-right: 5px;
      min-width: min(400px, calc(100% - 10px));
    }    
    position: relative;
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
      @media only screen and (max-width: $layout-fix) {
        left: -2px;
      }         
    }
    h3 {
      display: block;
      background: $color-theme-sub;
      color: $color-text-light;
      margin: 0;
      padding: 15px 0 80px 0;  
      @media only screen and (max-width: $layout-fix) {
        font-size: 100%;
      }         
    }
    figure {
      position: relative;
      display: flex;
      justify-content: center;
      background: $color-textbg;
      padding: auto;
      margin: -80px 0 5px 0;
      min-width: 300px;
      height: 200px;
      overflow: hidden;

      border: 1px solid;
      border-color: $color-theme-sub;
      border-radius: 50px;
      @media only screen and (max-width: $layout-fix) {
        min-width: 0px;
      }  
      img {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
      }
    }
    a figure img {
      transition: all 0.3s;
      &:hover {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
    @media only screen and (max-width: $layout-fix) {
        .text {
          padding-left: 10px;
          padding-right: 10px;
        }
    }
  }
}
</style>
