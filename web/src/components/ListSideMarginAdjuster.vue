<template>
    <div>
    <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'ListSideMarginAdjuster',
    props: {
        elementWidth : Number,
        marginOffset: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            wrap: null,
            ul: null,
        }
    },
    mounted() {
        this.wrap = this.$el;
        this.ul = this.wrap.querySelector("ul");
        const updateContentMargin = () => {
            if (window.matchMedia('(max-width: 420px)').matches) {
                this.ul.setAttribute("style", `margin-left: 0px`);
                return;
            }
            const width = this.wrap.clientWidth - this.marginOffset;
            const itemNum = Math.floor(width / this.elementWidth);
            const left = (width - itemNum * this.elementWidth) / 2;
            this.ul.setAttribute("style", `margin-left: ${left}px`);
        };

        {
            updateContentMargin();
        }

        window.addEventListener('resize', () => {
            updateContentMargin();
        });
    }
}
</script>