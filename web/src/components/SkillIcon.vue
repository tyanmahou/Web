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

  &.db {
    color: #ffffff;
    background: #9b59b6;
  }

  &.container {
    color: #ffffff;
    background: #00aebb;
  }

  &.cloud {
    color: #ffffff;
    background: #b306e7;
  }

  &.cicd {
    color: #ffffff;
    background: #2ecc71;
  }
    
  &.vcs {
    color: #ffffff;
    background: #e67f2b;
  }

  &.edit {
    color: #ffffff;
    background: #483d8b;
  }

  &.platform {
    color: #ffffff;
    background: #606060;
  }

  &.device {
    color: #ffffff;
    background: #b306e7;
  }

  &.workspace {
    color: #ffffff;
    background: #6ec543;
  }

  &.other {
    color: #ffffff;
    background: #909399;
  }

  @for $lv from 0 through 6 {
    &.level-#{$lv} {
      $scale: 1 + ($lv - 1) * 0.4;
      font-size: 12px * $scale;
      padding: 0 9px * $scale;
      border-radius: 14px * $scale;
    }
  }
}
</style>
