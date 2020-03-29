import { text } from './index'

export const api = ['text']

export const renderless = props => {
  return {
    text: text(props)
  }
}
