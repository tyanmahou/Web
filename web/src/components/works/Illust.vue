<template>
  <h2>GALLERY</h2>
  <div class="contents-wrap">
    <ul class="gallery">
      <li v-for="(item, index) in gallery" :key="index">
        <div class="year">
          <h3>{{item.year}}</h3>
        </div>
        <div>
          <ul>
            <li v-for="n of item.count" :key="n">
              <imagemodal :src="require(`@/assets/works/illust/${item.year}/${item.count - n + 1}.png`)"
                :id="`illust-${item.year}-${item.count - n + 1}`" :width="300" />
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
          count: 9
        },
        {
          year: 2020,
          count: 7
        },
        {
          year: 2019,
          count: 13
        },
        {
          year: 2018,
          count: 9
        },
        {
          year: 2017,
          count: 15
        },
        {
          year: 2016,
          count: 14
        },
        {
          year: 2015,
          count: 20
        },
        {
          year: 2014,
          count: 22
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

  .year {
    text-align: left;

    h3 {
      margin-left: -15px;
      padding: 0 10px;
      position: relative;
      display: inline;
      font-size: 30px;
    }
    padding-bottom: 10px;    
  }

  ul {
    columns: 5;

    @media only screen and (max-width: 1100px) {
      columns: 4;
    }

    @media only screen and (max-width: 850px) {

      columns: 3;
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
  