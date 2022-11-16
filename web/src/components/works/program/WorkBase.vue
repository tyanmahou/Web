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
    color: $color-text;
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

    .about {
        display: table;
        width: 100%;
        margin: 0 0 10px 0;
        
        h3 {
            all: initial;
            display: inline-block;
            font-weight: bold;
            color: $color-theme;
            font-size: 50px;
            text-decoration: underline;

            @media only screen and (max-width: $layout-mid-width) {
                font-size: 35px;
            }

            @media only screen and (max-width: $layout-min-width) {
                font-size: 30px;
            }

            &::first-letter {
                font-size: 80px;

                @media only screen and (max-width: $layout-mid-width) {
                    font-size: 60px;
                }

                @media only screen and (max-width: $layout-min-width) {
                    font-size: 50px;
                }
            }
        }

        .desc {
            display: table-cell;
            width: 40%;
            vertical-align: top;
            @media only screen and (max-width: $layout-min-width) {
                display: block;
                width: 100%;
                margin: 0 0 10px 0;
            }
        }

        .top-media {
            display: table-cell;
            width: 60%;
            padding: 20px 0 0px 20px;

            @media only screen and (max-width: $layout-min-width) {
                display: block;
                width: 100%;
                padding: 0px;
            }
        }
    }
}
</style>
    