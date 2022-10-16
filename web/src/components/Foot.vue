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