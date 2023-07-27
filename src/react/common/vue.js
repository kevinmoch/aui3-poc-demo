import { useState, useEffect } from 'react'

const arrayProto = Object.create(Array.prototype)

export const bindArrayProto = (value, setValue) => {
  const methods = ['push', 'pop', 'unshift', 'shift', 'splice', 'sort', 'reverse']
  methods.forEach(method => {
    arrayProto[method] = (...args) => {
      const clone = [...value]
      const result = clone[method](...args)
      setValue(clone)
      return result
    }
  })
  arrayProto.setValue = setValue
  Object.setPrototypeOf(value, arrayProto)
}

export const value = defaultValue => {
  const [value, setValue] = useState(() => defaultValue)
  Array.isArray(value) && bindArrayProto(value, setValue)
  return Object.defineProperty({}, 'value', {
    get() {
      return value
    },
    set(value) {
      setValue(value)
    }
  })
}

export const onMounted = fn => {
  useEffect(fn, [])
}

export const onUpdated = (fn, arr = []) => {
  useEffect(fn, arr)
}

export const useRefMapToVueRef = ({ context, name, ref }) => {
  const refs = (context.refs = {})
  useEffect(() => {
    if (refs[name] === ref.current || name in refs) return
    refs[name] = ref.current
    return () => {
      refs[name] = null
    }
  })
  return ref
}

export const adapterVueEmit = ({ context, listeners }) => {
  const noop = () => { }
  const emit = (type, ...args) => {
    const callback = type in listeners ? listeners[type] : noop
    callback.apply(null, args)
  }
  context.emit = emit
}
