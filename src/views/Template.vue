<template>
  <div class="todo-custom font-sans text-black">
    <slot name="header"></slot>
    <div align="left" class="max-w-md w-full mx-auto">
      <div class="p-4 rounded border bg-white">
        <div class="flex">
          <input ref="input" :value="text" :placeholder="newTag" v-on="inputEvents" class="aui-todo aui-font text-input flex-1 mr-2 d-inline tag-input">
          <button type="button" class="btn btn-primary" @click="addTag">Add</button>
        </div>

        <ul v-show="tags.length > 0" class="mt-4 pl-6">
          <li v-for="tag in tags" class="mb-2" :key="tag">
            <todo-tag :$template="template" :content="tag" />
            <button class="ml-2 text-grey-dark hover:text-grey-darkest underline text-sm" @click="removeTag(tag)">Remove</button>
          </li>
        </ul>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '../renderless/Todo/vue'
import { props, setup } from '../vue/common'
import '../style/template.scss'

export default {
  props: [...props, 'newTag', 'tags'],
  components: {
    TodoTag: () => import('../vue/Tag')
  },
  setup(props, context) {
    return { ...setup({ props, context, renderless, api }), template: () => import('./Tag') }
  }
}
</script>
