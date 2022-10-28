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
    background: $color-mainbg;
}

:deep(.work-contents) {
    max-width: 900px;
    
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
}
</style>
    