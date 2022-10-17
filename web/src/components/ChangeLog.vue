<template>
  <div class="changelog">
    <ul>
      <li v-for="item in items">
        <span class="date">{{ item.date }}</span>
        <div class="text" style="white-space: pre-wrap">
          {{ item.text }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChangeLog",
  data() {
    return {
      items: [
        // {
        //     date:'',
        //     text:'',
        // },
        {
          date: "2022.10.XX",
          text: "ホームページリニューアル",
        },
        {
          date: "2021.7.23",
          text: "ColorfulTone v3.2.0 リリース",
        },
        {
          date: "2021.2.7",
          text: "ColorfulTone v3.1.1 リリース",
        },
        {
          date: "2020/11/16",
          text: "LINEスタンプ「まほうくん スタンプ」販売開始",
        },
        {
          date: "2020.7.23",
          text: "ColorfulTone v3.1.0 リリース",
        },
        {
          date: "2020.7.1",
          text: "ホームページリニューアル",
        },
        {
          date: "2019.7.14",
          text: "ColorfulTone v3.0.0 リリース\n箱にア 公開",
        },
        {
          date: "2018.7.15",
          text: "ColorfulTone v2.3.0 リリース",
        },
        {
          date: "2018.3.9",
          text: "ホームページの移行",
        },
        {
          date: "2016.12.05",
          text: "ブログリニューアル",
        },
        {
          date: "2016.7.8",
          text: "ゲーム情報追加等",
        },
        {
          date: "2016.3.3",
          text: "ゲーム「ゆでたまごとさめ」公開",
        },
        {
          date: "2016.2.1",
          text: "ゲーム公開準備",
        },
        {
          date: "2016.1.25",
          text: "ホームページ整備",
        },
        {
          date: "2015.10.13",
          text: "ホームページリニューアル開始",
        },
        {
          date: "2015.7.12",
          text: "ホームページ大幅リニューアル\njavaアプレットおよびCGIゲームの終了\n",
        },
        {
          date: "2014.10.25",
          text: "フッター作成\nメニューやメインのCSS編集\n",
        },
        {
          date: "2014.10.24",
          text:
            "リニューアル報告\nナビゲーション画像作成\nホームページ編集\ncss編集\n",
        },
        {
          date: "2014.10.17",
          text: "前準備等\ncssの編集\n",
        },
        {
          date: "2014.5.10",
          text: "ゲーム集のエンコード調整。旧ＨＰ閉鎖。",
        },
        {
          date: "2014.3.19",
          text: "TOPの絵をランダム表示に。",
        },
        {
          date: "2014.3.12",
          text:
            "MONSTER'S バグが見つかったため終了。長い間ご利用ありがとうございました。また「ネット航海時代」「信じられない植物」を開始。",
        },
        {
          date: "2013.6.11",
          text: "待ち受け配布、ブログパーツ変更",
        },
        {
          date: "2013.5.30",
          text: "うごめも移植ページ作成。うごメモでの応援ありがとうございました。",
        },
        {
          date: "2013.2.26",
          text: "hp更新バナー新使用に yahooブログTyanmahou閉鎖",
        },
        {
          date: "2013.1.14",
          text: "マホウライブラリー閉鎖⇒運命のろうそく†遊戯王OCG情報†に",
        },
        {
          date: "2012.12.16",
          text: "MONSTER'Sのリスタート（こちらのミスです。すみません。）",
        },
        {
          date: "2012.12.02",
          text: "Hp編集 index.htmlを作ったんでいってみて",
        },
        {
          date: "2012.12.01",
          text: "Hp編集",
        },
        {
          date: "2012.2.23",
          text: "＠パーティii 再開",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.changelog {
  background: #8eae8e;
  ul {
    list-style: none;
    padding: 5px 0 5px 0;
    li {
      color: #000000;
      border: solid;
      border-color: #ffffff;
      background: #ffffff;
      margin: 30px 20px 25px 20px;
      padding: 10px;
      position: relative;
      font-weight: normal;
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
    }
  }
}
</style>
