import { shallowRef } from 'vue'
// Web
import webHomePage from "@/components/works/program/web/HomePage.vue"
import webColorfulTone from "@/components/works/program/web/ColorfulTone.vue"
import webIjinKenriCounter from "@/components/works/program/web/IjinKenriCounter.vue"

export default [
    {
      title: "チャンマホウのHP",
      caption: "ホームページ",
      img: require("@/assets/commons/web_logo.png"),
      detail: shallowRef(webHomePage),
    },
    {
      title: "ColorfulTone",
      caption: "公式サイト",
      img: require("@/assets/works/program/web/ColorfulTone/logo.png"),
      detail: shallowRef(webColorfulTone),
    },
    {
      title: "イジンデン 権利カウンター",
      caption: "Webツール(※非公認)",
      img: require("@/assets/works/program/web/IjinKenriCounter/screenshot.png"),
      detail: shallowRef(webIjinKenriCounter),
    },
  ];