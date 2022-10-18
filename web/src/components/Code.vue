<template>
<div class="code-block">
<pre :class="`prettyprint linenums {$opt}`">
<slot></slot>
</pre>
</div>
</template>

<script>
export default {
  name: 'Code',
  props: {
    opt: ''
  },
  mounted() {
      const script = document.createElement('script');
      this.script = script;
      script.setAttribute('src', '//cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js');
      this.$el.appendChild(script);
  },  
}
</script>
<style lang="scss" scoped>
.code-block{
    margin: 5px;
    background: #FFFFFF;
}
</style>
<style lang="scss">
.prettyprint ol.linenums {
list-style: none;
}
</style>