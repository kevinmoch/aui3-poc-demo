import { value, onMounted, onUpdated, adapterVueEmit } from './vue'
export * from './vue'

export const setup = ({ context, props, renderless, api, listeners, $renderless }) => {
  adapterVueEmit({ context, listeners })
  const sdk = (typeof $renderless === 'function' ? $renderless : renderless)(props, context, {
    value,
    onMounted,
    onUpdated
  })

  const attrs = {}
  Array.isArray(api) && api.forEach(name => {
    const value = sdk[name]
    if (typeof value !== 'undefined') {
      attrs[name] = value
    }
  })
  return attrs
}

export const render = ({ $mode, $template, pc, mobile }) => {
  if (typeof $template === 'function' || typeof $template === 'string') {
    return $template
  } else if (typeof pc === 'function' && $mode === 'pc') {
    return pc
  } else if (typeof mobile === 'function' && $mode === 'mobile') {
    return mobile
  }
  return pc
}
