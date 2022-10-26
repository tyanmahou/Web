<template>
  <a @click="open(true)" class="modal-button">
    <slot name="title"></slot>
  </a>
  <teleport to="body">
    <transition name="fade" 
    @before-enter="beforeEnter"
    @after-leave="afterLeave"> 
      <div v-if="isOpen" class="modal-window" @click.self="open(false)">
        <div class="modal-content">
          <slot name="contents"></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
  },

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open(isOpen) {
      this.isOpen = isOpen;
    },
    beforeEnter(el) {
      document.body.setAttribute("style", `overflow: hidden`);
    },    
    afterLeave(el) {
      document.body.setAttribute("style", `overflow: scroll`);
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-button {
  cursor: pointer;
}

.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  overflow: scroll;
  text-align: center;

  & .modal-content {
    display: inline-block;    
    margin: 60px 20px 60px 20px;
  }
}
</style>
