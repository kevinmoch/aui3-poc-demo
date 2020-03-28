<template>
  <div align="center">
    <slot name="header"></slot>
    <div align="left" class="max-w-md w-full mx-auto">
      <div class="form-group d-flex">
        <input ref="input" :value="text" :placeholder="newTag" v-on="inputEvents" class="aui-todo aui-font border border-primary shadow-none rounded-0 d-inline todo-input">
        <button class="btn btn-primary shadow-none border-0 rounded-0" @click="addTag">Add</button>
      </div>
      <div class="list-group">
        <div class="list-group-item d-flex justify-content-between align-items-center" v-for="tag in tags" :key="tag">
          <todo-tag :$mode="$mode" :content="tag" />
          <button class="close shadow-none border-0" @click="removeTag(tag)">
            <span>&times;</span>
          </button>
        </div>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { renderless, api } from '../../renderless/Todo/vue'
import { props, setup } from '../common'

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
