<template>
  <div class="contents-wrap">
    <ul class="gallery">
      <li v-for="(item, index) in gallery" :key="index">
        <h3>{{item.year}}</h3>
        <div>
          <ul>
            <li v-for="n of item.count" :key="n">
              <imagemodal :src="require(`@/assets/works/illust/${item.year}/${n}.png`)" :id="`illust-${item.year}-${n}`"
                :width="300" />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
import imagemodal from "@/components/ImageModal.vue";
export default {
  name: "Illust",
  data() {
    return {
      gallery: [
        {
          year: 2022,
          count: 3
        },
        {
          year: 2021,
          count: 8
        },
        {
          year: 2020,
          count: 6
        },
        {
          year: 2019,
          count: 9
        },
        {
          year: 2018,
          count: 6
        },
        {
          year: 2017,
          count: 11
        },
        {
          year: 2016,
          count: 13
        },
        {
          year: 2015,
          count: 16
        },
        {
          year: 2014,
          count: 18
        }
      ]
    };
  },
  components: {
    imagemodal,
  },
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common.scss";

ul.gallery {
  margin: 0;
  padding: 0 15px;
  list-style: none;

  h3 {
    position: absolute;
    left: 0;
    padding-left: 10px;
    display: inline;
    text-align: initial;
    font-size: 30px;
  }

  ul {
    columns: 4;

    @media only screen and (max-width: 1100px) {
      columns: 3;
    }

    @media only screen and (max-width: 850px) {

      columns: 2;
    }

    margin: 0 0 20px 0;
    width: 100%;
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;
    }
  }
}


:deep(.image-modal img) {
  background-color: #fff;
  width: 100%;
  height: auto;
  vertical-align: bottom;
}
</style>
  