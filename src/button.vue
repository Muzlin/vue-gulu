<template>
  <button class="g-button" :class="`icon-${iconPosition}`">
    <g-icon :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    //props: ['icon', 'iconPosition']
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value){
          return value === 'left' || value === 'right';
        }
      }
    }
  }
</script>
<style lang="scss">
  .g-button {
    height: var(--button-height);
    font: inherit;
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &:hover {
      border-color: var(--border-hover-color);
    }
    &:active {
      background: var(--button-avtive-bg);
    }
    &:focus {
      outline: none;
    }
    > .g-icon {
      order: 1;
      margin-right: .3em;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .g-icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }
      > .content {
        order: 1;
      }
    }
  }
</style>