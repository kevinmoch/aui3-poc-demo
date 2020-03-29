<template>
  <component :is="$view" v-bind="$bind"></component>
</template>

<script>
import { $props, $setup } from '../common'
import '../../theme/Tag/index.css'

export default {
  name: 'Tag',
  props: {
    ...$props,
    content: String
  },
  setup(props, context) {
    return $setup({ props, context, template: mode => () => import('./pc') })
  }
}
</script>
