<template>
  <myheader current="1" />
  <div class="main">
    <div class="main-container">
      <h1>GAMES</h1>
      <h2>UPCOMING</h2>
      <div class="contents-wrap" id="upcoming-wrap">
        <ul id="upcoming-ul">
          <li v-for="item in upcoming">
            <mymodel>
              <template #title>
                <mycaption :title="item.title" :caption="item.caption">
                  <div class="work">
                    <img :src="item.img" width="300">
                  </div>
                </mycaption>
              </template>
              <template #contents>
                <component :is="item.detail" />
              </template>
            </mymodel>
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
import mylink from "@/components/Link.vue"
import mymodal from "@/components/Modal.vue"
import mycaption from "@/components/FigCaption.vue"

export default {
  name: "GamesView",
  data() {
    return {
      upcoming: [],
      released: [],
      minigame: [],
    };
  },
  components: {
    myheader,
    foot,
    mylink,
    mymodal,
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
      updateContentMargin('upcoming');
    }

    window.addEventListener('resize', () => {
      updateContentMargin('upcoming');
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
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
</style>
