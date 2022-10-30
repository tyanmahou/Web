<template>
    <div class="slideshow">
        <div class="main-slide" :style="`max-width: ${width}px;`">
            <div class="list" :style="listStlye()" @transitionend="onTransitionEnd">
                <img :src="slide[(2 * this.slide.length - 2) % this.slide.length]" :width="width" :style="imageStlye(-2)">
                <img :src="slide[(2 * this.slide.length - 1) % this.slide.length]" :width="width" :style="imageStlye(-1)">                
                <template v-for="(e, index) in slide" :key="index">
                    <img :src="e" :width="width" :style="imageStlye(index)">
                </template>
                <img :src="slide[(this.slide.length) % this.slide.length]" :width="width" :style="imageStlye(this.slide.length)">
                <img :src="slide[(this.slide.length + 1) % this.slide.length]" :width="width" :style="imageStlye(this.slide.length + 1)">                
            </div>
            <span class="prev-btn" @click="changePage(pageNo - 1)" />
            <span class="next-btn" @click="changePage(pageNo + 1)" />
        </div>
    </div>
    <div class="paging">
        <ul v-for="e in slide.length">
            <li :key="e" :class="modPageNo == (e - 1) ? 'active' : ''" @click.prevent="changePage(e - 1)"></li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Slideshow',
    props: {
        slide: Array,
        width: {
            type: Number,
            default: 900
        },
        contentPercent: {
            type: Number,
            default: 60
        },
        autoPaging: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 5000
        }
    },
    data() {
        return {
            pageNo: 0,
            isAnimating: false,
            timer: null,
        }
    },
    mounted() {
        if (this.slide.length > 0) {
            this.startTimer();
        }
    },
    methods: {
        changePage(pageNo) {
            if (this.isAnimating) {
                return;
            }
            this.isAnimating = true;
            this.pageNo = pageNo;
        },
        startTimer() {
            if (!this.autoPaging) {
                return;
            }
            this.timer = window.setTimeout(() => {
                let showPageNo = this.pageNo + 1;
                // if (showPageNo >= this.slide.length) {
                //     showPageNo = 0;
                // }
                this.changePage(showPageNo);
            }, this.interval);
        },
        listStlye() {
            const percent = this.fixedPercent();
            const left = -percent * 2
                + (100 - percent) / 2
                - percent * this.pageNo;
            return {
                "transition": this.isAnimating ? "left ease .3s" : "none",
                "left": `${left}%`,
            }
        },
        imageStlye(index) {
            return {
                "max-width": `${this.fixedPercent()}%`,
                "transition": this.isAnimating ? "all ease .3s" : "none",
                "transform": `scale(${this.pageNo == index ? 1 : 0.8})`,
                "opacity": `${this.pageNo == index ? 1 : 0.5}`
            };
        },
        onTransitionEnd() {
            this.isAnimating = false;
            this.pageNo = this.modPageNo;

            clearInterval(this.timer);
            this.startTimer();
        },
        fixedPercent() {
            if (window.matchMedia('(max-width: 420px)').matches){
                return Math.max(100, this.contentPercent);
            }
            return this.contentPercent;
        },
    },
    computed: {
        modPageNo() {
            return (this.pageNo + this.slide.length) % this.slide.length;
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.slideshow {
    padding: 10px 0;
}
.main-slide {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    //background-color: #000;
    overflow: hidden;

    .list {
        position: relative;
        display: flex;
        align-items: center;
        left: 0%;

        img {
            margin: 0px 0px;
        }
    }

}

@mixin prev-next-btn($content) {
    &::before {
        content: $content;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;

    font-size: 40px;
    font-weight: bold;
    text-align: center;
    align-items: center;
    cursor: pointer;

    color: $color-text;

    &:hover {
        color: $color-text-light;
        background-color: #00000040;
    }
    @media only screen and (max-width: $layout-mobile) {
        font-size: 20px;
        width: 30px;
    }      
}

.prev-btn {
    left: 0;

    @include prev-next-btn('<');
}

.next-btn {
    right: 0;

    @include prev-next-btn('>');
}

.paging {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 5px;

    li {
        list-style-type: none;
        border: 2px solid $color-theme;
        border-radius: 50%;
        width: 7px;
        height: 7px;
        cursor: pointer;

        &.active {
            background: $color-theme;
        }
    }
}
</style>