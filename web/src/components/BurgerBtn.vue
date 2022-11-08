<template>
    <div class="burger" v-bind:class="{'active': open}"><span></span><span></span><span></span></div>
</template>
  
<script>
export default {
    name: "BurgerBtn",
    props: {
        open: Boolean
    },
    components: {},
    data() {
        return {
        };
    }
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common";

.burger {
    position: relative;
    /*ボタン内側の基点となるためrelativeを指定*/
    //background: $color-text-light;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 5px;


    /*ボタン内側*/
    span {
        display: inline-block;
        transition: all .4s;
        /*アニメーションの設定*/
        position: absolute;
        left: 14px;
        height: 3px;
        border-radius: 2px;
        background: $color-text-light;
        width: 45%;

        &:nth-of-type(1) {
            top: 15px;
        }

        &:nth-of-type(2) {
            top: 23px;
        }

        &:nth-of-type(3) {
            top: 31px;
        }
    }

    /*activeクラスが付与されると線が回転して×に*/
    &.active span {
        &:nth-of-type(1) {
            top: 18px;
            left: 18px;
            transform: translateY(6px) rotate(-45deg);
            width: 30%;
        }

        &:nth-of-type(2) {
            opacity: 0;
            /*真ん中の線は透過*/
        }

        &:nth-of-type(3) {
            top: 30px;
            left: 18px;
            transform: translateY(-6px) rotate(45deg);
            width: 30%;
        }
    }
}
</style>
  