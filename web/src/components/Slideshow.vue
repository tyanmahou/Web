<template>
    <div class="main-slide" style="max-width:900px;">
        <img :src="slide[pageNo]" width="900">
    </div>
    <div class="paging">
      <ul v-for="e in slide.length">
        <li
          :key="e"
          :class="pageNo == (e - 1) ? 'active' : ''"
          @click.prevent="changePage(e - 1)"
        ></li>
      </ul>
    </div>    
</template>
  
<script>
export default {
    name: 'Slideshow',
    props: {
        interval: {
            type: Number,
            default: 5000
        }
    },
    data() {
        return {
            pageNo: 0,
            slide: [
                require("@/assets/works/program/game/ColorfulTone/Screenshot1.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot2.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot3.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot4.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot5.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot6.png"),
            ],
        }
    },
    mounted() {
        this.startTimer();
    },
    methods: {
        changePage(pageNo){
            this.pageNo = pageNo;
        },
        startTimer() {
            const timer = window.setTimeout(() => {
                clearInterval(timer);
                let showPageNo = this.pageNo + 1;
                if (showPageNo >= this.slide.length) {
                    showPageNo = 0;
                }
                this.changePage(showPageNo);
                this.startTimer();
            }, this.interval);
        }
    },
    computed:{
        maxPageNo() {
            return this.slide.length -1;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.main-slide{
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    background-color: #000;
    img {
        max-width: 50%;
    }
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
        &.active{
            background: $color-theme;
        }
    }
}
</style>