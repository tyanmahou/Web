<template>
    <div class="soundcloud-sound">
        <iframe :width="width" :height="height" scrolling="no" frameborder="no" allow="autoplay"
            :src="`https://w.soundcloud.com/player/?url=${url}&auto_play=${autoPlay}&color=${color}&buying=${buying}&sharing=${sharing}&download=${download}&show_artwork=${showArtwork}&show_playcount=${showPlaycount}&show_user=${showUser}&single_active=${singleActive}&hide_related=${hideRelated}&show_comments=${showComments}&show_reposts=${showReposts}&show_teaser=${showTeaser}&visual=${visual}`"></iframe>
    </div>
</template>
  
<script>
export default {
    name: "Sound",
    props: {
        url: String,
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "300"
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: "ff5500"
        },
        buying: {
            type: Boolean,
            default: false
        },
        sharing: {
            type: Boolean,
            default: false
        },
        download: {
            type: Boolean,
            default: false
        },
        showArtwork: {
            type: Boolean,
            default: true
        },
        showPlaycount: {
            type: Boolean,
            default: false
        },
        showUser: {
            type: Boolean,
            default: true
        },
        singleActive: {
            type: Boolean,
            default: true
        },
        hideRelated: {
            type: Boolean,
            default: false
        },
        showComments: {
            type: Boolean,
            default: false
        },
        showReposts: {
            type: Boolean,
            default: false
        },
        showTeaser: {
            type: Boolean,
            default: false
        },
        visual: {
            type: Boolean,
            default: false
        },
    },
};
</script>
  