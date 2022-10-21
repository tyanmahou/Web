<template>
  <div class="illust">
    <div class="pickup">
      <imagemodal
      :src="require(`@/assets/works/illust/${pickup.id}`)"
      id="work-illust-pick"
      :width="pickup.width"
      />
    </div>
    <ul class="sub">
      <li v-for="(id,index) in sub.list">
        <imagemodal
        :src="require(`@/assets/works/illust/${id}`)" :id="`work-illust-sub${index}`" :width="sub.width" />
      </li>
    </ul>
  </div>
</template>

<script>
import imagemodal from "@/components/ImageModal.vue";

export default {
  name: "WorkIllust",
  props: {
  },
  components: {
    imagemodal,
  },
  data() {
    return {
      pickup: {
        id: '2021/7.png',
        width: "400"
      },
      sub: {
        width: "200",
        list: ['2022/2.png', '2021/6.png', '2019/7.png', '2018/6.png'],
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.illust {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 820px;

  .pickup {
    float: right;
  }

  ul.sub {
    list-style: none;

    &>li {
      display: inline-block;
    }
  }
}
</style>
