<template>
  <span class="aui-tag aui-font text-capitalize font-weight-bold">{{ text }}</span>
</template>

<script>
import { renderless, api } from '../renderless/Tag/vue'
import { props, setup } from '../vue/common'

export default {
  props: [...props, 'content'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
