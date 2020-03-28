<template>
  <keep-alive>
    <component :is="$view" v-bind="$bind">
      <template #header>
        <slot name="header"></slot>
      </template>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </component>
  </keep-alive>
</template>

<script>
import { $props, $setup } from "../common";
import "../../theme/Todo/index.css";

export default {
  name: "Todo",
  props: {
    ...$props,
    newTag: String,
    tags: Array[String]
  },
  setup(props, context) {
    return $setup({
      props,
      context,
      template: mode => () => import(`./${mode}`)
    });
  }
};
</script>
