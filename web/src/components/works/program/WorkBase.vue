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

        .desc {
            display: table-cell;
            width: 40%;
            vertical-align: top;

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

            @media only screen and (max-width: $layout-min-width) {
                display: inline;
                width: 100%;
            }
        }

        .top-media {
            display: table-cell;
            width: 60%;
            padding: 20px 0 0px 20px;

            @media only screen and (max-width: $layout-min-width) {
                display: inline;
                width: 100%;
            }
        }
    }

    ul.media {
        clear: both;
        list-style: none;
        background: $color-containerbg;

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
    