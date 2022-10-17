<template>
  <ul class="news">
    <li>
      <span class="date">2022.10.XX</span>
      <h3>ホームページリニューアル！</h3>
      <div class="text">
        <figure>
          <img src="@/assets/commons/web_logo.png" width="300" />
        </figure>
        ホームページをリニューアルしました。<br />
        今後ともよろしくお願いいたします。
      </div>
    </li>
    <li>
      <span class="date">2021.7.23</span>
      <h3>ColorfulTone v3.2.0 リリース</h3>
      <div class="text">
        <mylink url="https://colorfultone.tyanmahou.com/web/" absolute target="_blank">
          <figure>
            <img
              src="https://colorfultone.tyanmahou.com/web/img/slide/Screenshot1.png"
              width="300"
            />
          </figure>
        </mylink>
        「ColorfulTone」の更新がリリースされました。<br />
        カスタムフォルダ機能の改善など
      </div>
    </li>
    <li>
      <span class="date">2020.11.16</span>
      <h3>LINEスタンプ販売開始</h3>
      <div class="text">
        <mylink
          url="https://store.line.me/stickershop/product/13692750"
          absolute
          target="_blank"
        >
          <figure>
            <img src="@/assets/news/20201116.png" width="300" />
          </figure>
        </mylink>
        LINEスタンプにて<mylink
          url="https://store.line.me/stickershop/product/13692750"
          absolute
          target="_blank"
          >「まほうくん スタンプ」<br /></mylink
        >販売開始！！<br />
      </div>
    </li>
  </ul>
</template>

<script>
import mylink from "@/components/Link.vue";

export default {
  name: "News",
  data() {
    return {};
  },
  components: {
    mylink,
  },
};
</script>

<style lang="scss" scoped>
ul.news {
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    border: solid;
    border-color: #ffffff;
    background: #ffffff;
    margin: 30px 20px 20px 20px;
    min-width: 400px;
    position: relative;
    span.date {
      position: absolute;
      top: -30px;
      left: -40px;
      border: 1px solid;
      border-color: #ffffff;
      font-weight: bold;
      color: #ffffff;
      background: #2e8b57;
      padding: 5px;
    }
    h3 {
      background: #8eae8e;
      color: #ffffff;
      margin: 0;
      padding: 15px 0 80px 0;
    }
    figure {
      position: relative;
      display: flex;
      justify-content: center;
      background: #ffffff;
      padding: auto;
      margin: -80px 0 5px 0;
      min-width: 300px;
      height: 200px;
      overflow: hidden;

      border: 1px solid;
      border-color: #8eae8e;
      border-radius: 50px;

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
  }
}
</style>
