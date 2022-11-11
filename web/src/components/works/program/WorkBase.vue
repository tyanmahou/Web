<template>
    <div class="wrap">
        <div class="work-contents">
            <div class="main-container">
                <slot />
            </div>
        </div>
    </div>
</template>
    
<script>

export default {
    name: "WorkBase"
};
</script>
    
<style lang="scss" scoped>
@import "@/scss/common";

.wrap {
    width: 100%;
    max-width: max(calc(100vw - 400px), 900px);
    background: $color-mainbg;
}

:deep(.work-contents) {
    
    .skill {
        margin: 5px 0 10px 0;
    }

    img {
        max-width: 100%;
        vertical-align: middle;
    }

    .to-left {
        text-align: left;
    }

    ul {
        text-align: left;

        li {
            margin-left: 15px;
        }
    }
    ul.media {
    list-style: none;

    li {
        display: inline-block;
        margin: 5px;

        width: calc(100% / 4 - 5px * 2);

        @media only screen and (max-width: $layout-mid-width) {
            width: calc(100% / 3 - 5px * 2);
        }

        @media only screen and (max-width: $layout-min-width) {
            width: calc(100% / 2 - 5px * 2);
        }

        @media only screen and (max-width: $layout-mobile) {
            width: calc(100% - 5px * 2);
        }
    }
}    
}
</style>
    