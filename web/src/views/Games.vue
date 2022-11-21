<template>
  <myheader current="1" />
  <div class="main">
    <div class="main-container">
      <h1>GAMES</h1>
      <h2>UPCOMING</h2>
      <lsma :element-width="310" :margin-offset="20" class="contents-wrap">
        Comming Soon      
        <ul>
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
      </lsma>
      <h2>RELEASED</h2>
      <lsma :element-width="310" :margin-offset="20" class="contents-wrap">
        Comming Soon
        <ul>
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
import lsma from "@/components/ListSideMarginAdjuster.vue"
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
    lsma,    
  },
  mounted() {
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
