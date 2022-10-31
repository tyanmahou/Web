<template>
  <skillicon :category="master[name]?.category ?? 'other'" :level="level">
  {{name}}
  </skillicon>
</template>
  
<script>
import skillicon from "@/components/SkillIcon.vue";
import skilldata from "@/data/master/skills";
export default {
  name: "SkillIconAutoCategory",
  props: {
    name: String,
    level: {
      type: Number,
      default: 1,
    },
  },
  components: {
    skillicon,
  },
  data() {
    return {
      master: skilldata
    };
  }
};
</script>
<style lang="scss" scoped>

</style>
  