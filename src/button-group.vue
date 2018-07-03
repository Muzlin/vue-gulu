<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName
        if (name.toLowerCase() !== 'button') {
          console.warn(`g-button-group 的子元素必须为button 你出现了一个<${node.nodeName.toLowerCase()}>元素`)
        }
      }
    }
  }
</script>
<style lang="scss">
  .g-button-group {
    display: inline-flex;
    > .g-button {
      border-radius: 0;
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:hover {
        z-index: 1;
      }
    }
  }
</style>