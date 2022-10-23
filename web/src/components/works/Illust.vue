<template>
  <h2>GALLERY</h2>
  <div class="contents-wrap">
    <ul class="filter">
      <li v-on:click="changeCategory('')" v-bind:class="{'active': category === ''}">全て</li>
      <li v-on:click="changeCategory('original')" v-bind:class="{'active': category === 'original'}">ORIGINAL</li>
      <li v-on:click="changeCategory('fanfic')" v-bind:class="{'active': category === 'fanfic'}">FANFIC</li>
      <li v-on:click="changeCategory('other')" v-bind:class="{'active': category === 'other'}">OTHER</li>
    </ul>
    <ul class="gallery">
      <li v-for="(item, index) in filteredGallery" :key="index">
        <div class="year">
          <h3>{{item.year}}</h3>
        </div>
        <div>
          <ul>
            <li v-for="(img, index2) in item.data" :key="index2">
              <imagemodal :src="require(`@/assets/works/illust/${item.year}/${img.src}`)"
                :id="`illust-${item.year}-${index2}`" width="300" />
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
      category: '',
      gallery: [
        {
          year: 2022,
          count: 3,
          data: [
            {
              src: '3.png',
              category: 'original',
            },
            {
              src: '2.png',
              category: 'original',
            },
            {
              src: '1.png',
              category: 'original',
            },
          ],
        },
        {
          year: 2021,
          count: 9,
          data: [
            {
              src: '9.png',
              category: 'original',
            },
            {
              src: '8.png',
              category: 'original',
            },
            {
              src: '7.png',
              category: 'original',
            },
            {
              src: '6.png',
              category: 'original',
            },
            {
              src: '5.png',
              category: 'fanfic',
            },
            {
              src: '4.png',
              category: 'original',
            },
            {
              src: '3.png',
              category: 'fanfic',
            },
            {
              src: '2.png',
              category: 'original',
            },
            {
              src: '1.png',
              category: 'fanfic',
            },
          ],
        },
        {
          year: 2020,
          count: 7,
          data: [
            {
              src: '7.png',
              category: 'original',
            },
            {
              src: '6.png',
              category: 'original',
            },
            {
              src: '5.png',
              category: 'fanfic',
            },
            {
              src: '4.png',
              category: 'original',
            },
            {
              src: '3.png',
              category: 'original',
            },
            {
              src: '2.png',
              category: 'original',
            },
            {
              src: '1.png',
              category: 'original',
            },
          ],
        },
        {
          year: 2019,
          count: 13,
          data: [
            {
              src: '13.png',
              category: 'original',
            },
            {
              src: '12.png',
              category: 'original',
            },
            {
              src: '11.png',
              category: 'original',
            },
            {
              src: '10.png',
              category: 'original',
            },
            {
              src: '9.png',
              category: 'other',
            },
            {
              src: '8.png',
              category: 'original',
            },
            {
              src: '7.png',
              category: 'original',
            },
            {
              src: '6.png',
              category: 'original',
            },
            {
              src: '5.png',
              category: 'original',
            },
            {
              src: '4.png',
              category: 'original',
            },
            {
              src: '3.png',
              category: 'original',
            },
            {
              src: '2.png',
              category: 'original',
            },
            {
              src: '1.png',
              category: 'original',
            },
          ],
        },
        {
          year: 2018,
          count: 9,
          data: [
            {
              src: '9.png',
              category: 'original',
            },
            {
              src: '8.png',
              category: 'original',
            },
            {
              src: '7.png',
              category: 'original',
            },
            {
              src: '6.png',
              category: 'original',
            },
            {
              src: '5.png',
              category: 'fanfic',
            },
            {
              src: '4.png',
              category: 'original',
            },
            {
              src: '3.png',
              category: 'fanfic',
            },
            {
              src: '2.png',
              category: 'fanfic',
            },
            {
              src: '1.png',
              category: 'fanfic',
            },
          ],
        },
        {
          year: 2017,
          count: 15,
          data: [
            {
              src: '15.png',
              category: 'original',
            },
            {
              src: '14.png',
              category: 'original',
            },
            {
              src: '13.png',
              category: 'original',
            },
            {
              src: '12.png',
              category: 'original',
            },
            {
              src: '11.png',
              category: 'original',
            },
            {
              src: '10.png',
              category: 'original',
            },
            {
              src: '9.png',
              category: 'original',
            },
            {
              src: '8.png',
              category: 'original',
            },
            {
              src: '7.png',
              category: 'original',
            },
            {
              src: '6.png',
              category: 'original',
            },
            {
              src: '5.png',
              category: 'original',
            },
            {
              src: '4.png',
              category: 'original',
            },
            {
              src: '3.png',
              category: 'original',
            },
            {
              src: '2.png',
              category: 'fanfic',
            },
            {
              src: '1.png',
              category: 'original',
            },
          ],
        },
        {
          year: 2016,
          count: 14,
          data: [
            {
              src: '14.png',
              category: 'original',
            },
            {
              src: '13.png',
              category: 'original',
            },
            {
              src: '12.png',
              category: 'original',
            },
            {
              src: '11.png',
              category: 'original',
            },
            {
              src: '10.png',
              category: 'fanfic',
            },
            {
              src: '9.png',
              category: 'fanfic',
            },
            {
              src: '8.png',
              category: 'fanfic',
            },
            {
              src: '7.png',
              category: 'fanfic',
            },
            {
              src: '6.png',
              category: 'fanfic',
            },
            {
              src: '5.png',
              category: 'original',
            },
            {
              src: '4.png',
              category: 'original',
            },
            {
              src: '3.png',
              category: 'original',
            },
            {
              src: '2.png',
              category: 'fanfic',
            },
            {
              src: '1.png',
              category: 'fanfic',
            },
          ],
        },
        {
          year: 2015,
          count: 20,
          data: [
            {
              src: '20.png',
              category: 'original',
            },
            {
              src: '19.png',
              category: 'fanfic',
            },
            {
              src: '18.png',
              category: 'original',
            },
            {
              src: '17.png',
              category: 'original',
            },
            {
              src: '16.png',
              category: 'fanfic',
            },
            {
              src: '15.png',
              category: 'original',
            },
            {
              src: '14.png',
              category: 'original',
            },
            {
              src: '13.png',
              category: 'original',
            },
            {
              src: '12.png',
              category: 'fanfic',
            },
            {
              src: '11.png',
              category: 'fanfic',
            },
            {
              src: '10.png',
              category: 'original',
            },
            {
              src: '9.png',
              category: 'fanfic',
            },
            {
              src: '8.png',
              category: 'fanfic',
            },
            {
              src: '7.png',
              category: 'original',
            },
            {
              src: '6.png',
              category: 'original',
            },
            {
              src: '5.png',
              category: 'original',
            },
            {
              src: '4.png',
              category: 'original',
            },
            {
              src: '3.png',
              category: 'fanfic',
            },
            {
              src: '2.png',
              category: 'original',
            },
            {
              src: '1.png',
              category: 'original',
            },
          ],
        },
        {
          year: 2014,
          count: 22,
          data: [
            {
              src: '22.png',
              category: 'original',
            },
            {
              src: '21.png',
              category: 'fanfic',
            },
            {
              src: '20.png',
              category: 'fanfic',
            },
            {
              src: '19.png',
              category: 'fanfic',
            },
            {
              src: '18.png',
              category: 'fanfic',
            },
            {
              src: '17.png',
              category: 'original',
            },
            {
              src: '16.png',
              category: 'original',
            },
            {
              src: '15.png',
              category: 'original',
            },
            {
              src: '14.png',
              category: 'original',
            },
            {
              src: '13.png',
              category: 'fanfic',
            },
            {
              src: '12.png',
              category: 'fanfic',
            },
            {
              src: '11.png',
              category: 'fanfic',
            },
            {
              src: '10.png',
              category: 'fanfic',
            },
            {
              src: '9.png',
              category: 'fanfic',
            },
            {
              src: '8.png',
              category: 'fanfic',
            },
            {
              src: '7.png',
              category: 'fanfic',
            },
            {
              src: '6.png',
              category: 'fanfic',
            },
            {
              src: '5.png',
              category: 'fanfic',
            },
            {
              src: '4.png',
              category: 'fanfic',
            },
            {
              src: '3.png',
              category: 'fanfic',
            },
            {
              src: '2.png',
              category: 'fanfic',
            },
            {
              src: '1.png',
              category: 'fanfic',
            },
          ],
        }
      ]
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
  