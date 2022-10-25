<template>
  <h2>GALLERY</h2>
  <div class="contents-wrap">
    <ul class="filter">
      <li v-on:click="changeCategory('')" v-bind:class="{'active': category === ''}">ALL</li>
      <li v-on:click="changeCategory('original')" v-bind:class="{'active': category === 'original'}">ORIGINAL</li>
      <li v-on:click="changeCategory('fanfic')" v-bind:class="{'active': category === 'fanfic'}">FANFIC</li>
      <li v-on:click="changeCategory('other')" v-bind:class="{'active': category === 'other'}">OTHER</li>
    </ul>
    <ul class="gallery">
      <li v-for="item in filteredGallery" :key="item.year">
        <div class="year">
          <h3>{{item.year}}</h3>
        </div>
        <div>
          <ul>
            <li v-for="img in item.data" :key="img.id">
              <imagemodal :src="require(`@/assets/works/illust/${item.year}/${img.id}.png`)"
                :id="`illust-${item.year}-${img.id}`" width="300" />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
import imagemodal from "@/components/ImageModal.vue";
import gallery from "@/data/works/illust";

export default {
  name: "Illust",
  data() {
    return {
      category: '',
      gallery: gallery,
    };
  },
  components: {
    imagemodal,
  },
  methods: {
    changeCategory(nextCategory) {
      this.category = nextCategory;
    }
  },
  computed: {
    filteredGallery() {
      // Deep Copy
      let ret = [];
      for (let elm of this.gallery) {
        const filtered = elm.data.filter(img => {
          return !img.category.indexOf(this.category)
        });
        if (filtered.length > 0) {
          ret.push({
            year: elm.year,
            data: filtered,
          });
        }
      }
      return ret;
    }
  }
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common.scss";

ul.filter {
  list-style: none;

  li {
    display: inline-block;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 20px;
    color: $color-text-light;
    background: $color-theme-sub;
    transition: .3s;

    &.active {
      background: $color-theme;
    }
  }
}

ul.gallery {
  margin: 0;
  padding: 0 15px;
  list-style: none;

  @media only screen and (max-width: $layout-mobile) {
    padding: 0 0px;
  }

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

    @media only screen and (max-width: $layout-mid-width) {
      columns: 3;
    }
    @media only screen and (max-width: $layout-min-width) {
      columns: 2;
    }

    @media only screen and (max-width: $layout-mobile) {
      column-gap: 5px;
    }

    margin: 0 0 20px 0;
    width: 100%;
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;

      @media only screen and (max-width: $layout-mobile) {
        margin-bottom: 5px;
      }
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
  