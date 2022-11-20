import { shallowRef } from 'vue'
// Web
import webHomePage from "@/components/works/program/web/HomePage.vue"
import webColorfulTone from "@/components/works/program/web/ColorfulTone.vue"

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
  ];