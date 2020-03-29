import React, { useState } from 'react'
import { changeTheme, supportCssVars, enableCssVars, themeVars } from './theme'
import Todo from './views/Todo'
import tagVars from './theme/Tag'
import todoVars from './theme/Todo'
import './style/app.scss'

export default () => {
  const [todoColor, setTodoColor] = useState(() => themeVars(Object.keys(todoVars)[0]))
  const [tagColor, setTagColor] = useState(() => themeVars(Object.keys(tagVars)[0]))
  const [fontSize, setFontSize] = useState(() => themeVars('aui-font-size'))
  const [theme, setTheme] = useState(themeVars())
  const [title] = useState('New Tag')

  const change = e => {
    const apply = () => {
      const { name, value } = e.target

      name === 'aui-tag-color' && setTagColor(value)
      name === 'aui-todo-color' && setTodoColor(value)
      name === 'aui-font-size' && setFontSize(value)

      setTheme(Object.assign(theme, { [name]: value }))
      changeTheme(theme)
    }

    if (!supportCssVars() && window.confirm('当前浏览器不支持主题切换，要启用兼容程序吗？')) {
      enableCssVars().then(apply)
    } else {
      apply()
    }
  }

  return (
    <div id="app">
      <div id="nav">
        <span>更改 Tag 颜色 </span>
        <input name="aui-tag-color" type="color" size="4" value={tagColor} onChange={change} />
        <span>更改 {title} 颜色 </span>
        <input name="aui-todo-color" type="color" size="4" value={todoColor} onChange={change} />
        <span>更改字体大小 </span>
        <input name="aui-font-size" type="text" size="2" value={fontSize} onChange={change} />
      </div>
      <Todo />
    </div>
  )
}
