<template>
  <teleport to="body">
    <transition name="fade" @before-enter="beforeEnter" @after-leave="afterLeave">
      <div v-if="isOpen" class="modal-window" @click.self="$emit('close')">
        <div :class="fullscreen ? 'modal-content-full' : 'modal-content'">
          <slot></slot>
        </div>
        <div class="close-btn" @click="$emit('close')">
          <span /><span />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'ModalBase',
  props: {
    el: {
      type: Object,
      default: null,
    },
    isOpen: false,
    fullscreen: false,
  },
  emits: ['close'],
  data() {
    return {
    };
  },
  methods: {
    beforeEnter(el) {
      if (this.el) {
        this.el.setAttribute("style", `overflow: hidden`);
      } else {
        document.body.setAttribute("style", `overflow: hidden`);
      }
    },
    afterLeave(el) {
      if (this.el) {
        this.el.setAttribute("style", `overflow: auto`);
      } else {
        document.body.setAttribute("style", `overflow: auto`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

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
  overflow: auto;
  text-align: center;

  & .modal-content {
    display: inline-block;
    margin: 60px 20px 60px 20px;
  }
  & .modal-content-full {
    display: inline-block;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
  }  
}

.close-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background: $color-text-light;

    span {
      background: $color-theme;
    }
  }

  span {
    display: inline-block;

    position: absolute;
    height: 7px;
    border-radius: 2px;
    background: #A0A0A0;
    width: 70%;

    &:nth-of-type(1) {
      top: 22.5px;
      left: 7.5px;
      transform: rotate(-45deg);
    }

    &:nth-of-type(2) {
      top: 22.5px;
      left: 7.5px;
      transform: rotate(45deg);
    }
  }
}
</style>
