<template>
    <a :href="url" target="_blank">
        {{url}}
    </a>
</template>
  
<script>
export default {
    name: 'AutoLink',
    props: {
        url: String,
    },
}
</script>