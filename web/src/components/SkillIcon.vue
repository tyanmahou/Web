<template>
  <span :class="`skill-icon ${category} level-${level}`">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "SkillIcon",
  props: {
    category: {
      type: String,
      default: "lang",
    },
    level: {
      type: Number,
      default: 1,
    },
  },
};
</script>
<style lang="scss" scoped>
span {
  &.skill-icon {
    display: inline-block;
  }
  &.lang {
    color: #ffffff;
    background: #409eff;
  }
  &.framework {
    color: #ffffff;
    background: #f56c6c;
  }
  &.tool {
    color: #ffffff;
    background: #f3c950;
  }
  &.system {
    color: #ffffff;
    background: #6ec543;
  }  
  &.service {
    color: #ffffff;
    background: #483d8b;
  }
  &.device {
    color: #ffffff;
    background: #b306e7;
  }  
  &.other {
    color: #ffffff;
    background: #909399;
  }

  @for $lv from 1 through 6 {
    &.level-#{$lv} {
    $scale: 1 + ($lv - 1) * 0.6;
    font-size: 12px * $scale;
    height: 14px * $scale;
    padding: 0 9px * $scale 2px * $scale 9px * $scale;
    border-radius: 14px * $scale;
    }
  }
}
</style>
