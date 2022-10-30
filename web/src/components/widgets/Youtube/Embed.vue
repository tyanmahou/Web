<template>
    <div class="youtube-embed">
        <iframe :src="url" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</template>
  
<script>
export default {
    name: "YoutubeEmbed",
    props: {
        url: String
    },
};
</script>

<style lang="scss" scoped>
.youtube-embed iframe {
    aspect-ratio: 560 / 315;
    width: 100%;
    height: 100%
}
</style>
  