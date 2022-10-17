<template>
  <a :href="url" :target="target" v-if="absolute === true">
    <slot></slot>
  </a>
  <router-link :to="url" :target="target" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'Link',
  props: {
    url: String,
    absolute: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: "_self"
    },
  },
}
</script>