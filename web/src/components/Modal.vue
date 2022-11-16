<template>
  <a @click="open(true)" class="modal-button">
    <slot name="title"></slot>
  </a>
  <modalbase :el="el" :isOpen="isOpen" @close="open(false)">
    <slot name="contents"></slot>
  </modalbase>
</template>

<script>
import modalbase from "@/components/ModalBase.vue"

export default {
  name: 'ModalWindow',
  props: {
    el: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    modalbase,
  },
  methods: {
    open(isOpen) {
      this.isOpen = isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.modal-button {
  cursor: pointer;
}
</style>
