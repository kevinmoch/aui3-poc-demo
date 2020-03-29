import { mounted, focus, checkTag, addTag, removeTag, inputEvents } from './index'

export const api = ['text', 'addTag', 'removeTag', 'inputEvents']

export const renderless = (props, context, { value, onMounted, onUpdated }) => {
  const text = value('')
  const emit = context.emit
  const refs = context.refs

  const api = {
    text,
    checkTag,
    focus: focus(refs),
    removeTag: removeTag({ props, refs, emit })
  }

  onMounted(mounted(api))
  onUpdated(mounted(api), [context.$mode])

  return Object.assign(api, {
    addTag: addTag({ text, props, refs, emit, api }),
    inputEvents: inputEvents({ text, api })
  })
}
