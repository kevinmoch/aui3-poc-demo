<template>
  <div class="todo-mobile" align="center">
    <slot name="header"></slot>
    <div align="left" class="max-w-md w-full mx-auto">
      <div class="tags-input">
        <span class="tags-input-tag" v-for="tag in tags" :key="tag">
          <todo-tag :$mode="$mode" :content="tag" />
          <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
        </span>

        <input ref="input" :value="text" :placeholder="newTag" v-on="inputEvents" class="aui-todo aui-font tags-input-text">
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { renderless, api } from '../../renderless/Todo/vue'
import { props, setup } from '../common'
import '../../style/mobile.less'

export default {
  props: [...props, 'newTag', 'tags'],
  components: {
    TodoTag: () => import('../Tag')
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
