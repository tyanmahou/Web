<template>
    <div class="work-game">
        <mylink url="https://colorfultone.tyanmahou.com/web/" absolute target="_blank">
            <div class="work-img">
                <img src="@/assets/works/program/game/ColorfulTone/Screenshot1.png">
            </div>
            <div class="detail">
                <p class="title">
                    ColorfulTone
                </p>
                <p class="caption">
                    音楽ゲーム
                </p>
            </div>
        </mylink>
    </div>
</template>
  
<script>
import mylink from "@/components/Link.vue";

export default {
    name: "WorkGame",
    props: {},
    components: {
        mylink,
    },
    data() {
        return {};
    },
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common";

.work-game {
margin: 0 5px 0 0;
display: inline-block;
width: 350px;
@media only screen and (max-width: $layout-min-width) {
    width: 100%;
}
vertical-align: top;

.work-img {
  display: table-cell;
  vertical-align: middle;
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
  text-align: left;

  .title {
    font-size: 20px;
    font-weight: bold;
    transition: .2s;
  }

  .caption {
    font-size: 12px;
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
</style>
  