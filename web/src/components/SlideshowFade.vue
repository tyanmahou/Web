<template>
    <div class="slideshow">
        <div class="main-slide">
            <div class="list" @transitionend="onTransitionEnd">
                <template v-for="(e, index) in slide" :key="index">
                    <img :src="e" :style="imageStlye(index)">
                </template>
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
    name: 'SlideshowFade',
    props: {
        slide: Array,
        autoPaging: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 5000
        },
        initPage: {
            type: Number,
            default: 0
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
                this.changePage(showPageNo);
            }, this.interval);
        },              
        imageStlye(index) {
            return {
                "position": index > 0 ? "absolute" : null,
                "top": 0,
                "left": 0,
                "min-width": `100%`,
                "max-width": `100%`,
                "transition": this.isAnimating ? "all ease .3s" : "none",
                "opacity": `${this.modPageNo == index ? 1 : 0}`
            };
        },
        onTransitionEnd() {
            this.isAnimating = false;
            this.pageNo = this.modPageNo;

            clearInterval(this.timer);
            this.startTimer();
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
    width: 100%;
}
.main-slide {
    position: relative;
    overflow: hidden;

    .list {
        position: relative;

        img {
            margin: 0px 0px;
            vertical-align: middle;
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
        margin: 5px;
    }
}
</style>