<template>
  <div class="footer">
    <p>
    チャンマホウのＨＰ<br>
    Copyright (C) 2007-{{year()}} tyanmahou All Rights Reserved.<br>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  methods: {
    // 本当はサーバーからとるべき
    year: ()=>(new Date()).getFullYear()
  },
}
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

// フッター
.footer {  
    margin: 0%;
    padding: 15px 0 10px 0;
    clear: both;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60pt;
    background: $color-theme;
    color: $color-text-light;
    text-align: center;
}
</style>