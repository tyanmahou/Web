<template>
  <h2>GAME</h2>
  <div class="contents-wrap" id="game-wrap">
    <ul id="game-ul">
      <li v-for="item in game">
        <mycaption :title="item.title" :caption="item.caption">
          <div class="work">
            <img :src="item.img" width="300">
          </div>
        </mycaption>
      </li>
    </ul>
  </div>
  <h2>WEB</h2>
  <div class="contents-wrap" id="web-wrap">
    <ul id="web-ul">
      <li v-for="item in web">
        <mymodel>
        <template #title>
          <mycaption :title="item.title" :caption="item.caption">
          <div class="work">
            <img :src="item.img" width="300">
          </div>
        </mycaption>        
        </template>
        <template #contents>
          <component :is="item.detail"/>
        </template>
        </mymodel>
      </li>
    </ul>
  </div>
  <h2>Library</h2>
  <div class="contents-wrap" id="library-wrap">
    <ul id="library-ul">
      <li v-for="item in library">
        <mycaption :title="item.title" :caption="item.caption">
          <div class="work">
            <img :src="item.img" width="300">
          </div>
        </mycaption>
      </li>
    </ul>
  </div>
</template>
  
<script>
import mymodel from "@/components/Modal.vue"
import mycaption from "@/components/FigCaption.vue"

// Web
import webHomePage from "@/components/works/program/web/HomePage.vue"
import webColorfulTone from "@/components/works/program/web/ColorfulTone.vue"

export default {
  name: "Program",
  data() {
    return {
      game: [
        {
          title: "ColorfulTone",
          caption: "音楽ゲーム",
          img: "https://colorfultone.tyanmahou.com/web/img/slide/Screenshot1.png",
        },
      ],
      web: [
        {
          title: "チャンマホウのHP",
          caption: "ホームページ",
          img: require("@/assets/commons/web_logo.png"),
          detail: webHomePage,
        },
        {
          title: "ColorfulTone",
          caption: "公式サイト",
          img: require("@/assets/works/program/web/ColorfulTone/logo.png"),
          detail: webColorfulTone,
        },
      ],
      library: [

      ],
    };
  },
  components: {
    mymodel,
    mycaption,
  },
  mounted() {
    const updateContentMargin = (id) => {
      if (window.matchMedia('(max-width: 420px)').matches) {
          document.getElementById(`${id}-ul`).setAttribute("style", `margin-left: 0px`);
          return;
        }
        const width = document.getElementById(`${id}-wrap`).clientWidth - 20;
        const itemNum = Math.floor(width / 310);
        const left = (width - itemNum * 310) / 2;
        document.getElementById(`${id}-ul`).setAttribute("style", `margin-left: ${left}px`);
    };

    {
      updateContentMargin('game');
      updateContentMargin('web');
      updateContentMargin('library');
    }

    window.addEventListener('resize', () => {
      updateContentMargin('game');
      updateContentMargin('web');
      updateContentMargin('library');
    });
  }
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common";

ul {
  text-align: left;
  list-style: none;
  //transition: all .3s;

  @media only screen and (max-width: $layout-mobile) {
    text-align: center;
  }

  li {
    display: inline-block;
    margin: 5px;
  }
}

.work {
  display: table-cell;
  vertical-align: middle;
  width: 300px;
  height: 225px;
  overflow: hidden;
  text-align: center;
}
</style>
  