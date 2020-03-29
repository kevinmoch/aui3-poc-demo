<template>
  <div id="app">
    <div id="nav">
      <span>更改 Tag 颜色</span>
      <input name="aui-tag-color" type="color" size="4" :value="tagColor" @change="change" />
      <span>更改 {{ title }} 颜色</span>
      <input :name="name" type="color" size="4" :value="color" @change="change" />
      <span>更改字体大小</span>
      <input name="aui-font-size" type="text" size="2" :value="fontSize" @change="change" />
    </div>
    <todo @loadCard="loadCard" />
  </div>
</template>

<script>
import Todo from './views/Todo.vue'
import { cssVars as tagVars } from './vue/Tag'
import { cssVars as todoVars } from './vue/Todo'
import { changeTheme, supportCssVars, enableCssVars, themeVars, combineVars, onResize } from './theme'
import './style/app.scss'

export default {
  components: {
    Todo
  },
  data() {
    return {
      theme: {},
      title: 'New Tag',
      name: 'aui-todo-color',
      color: themeVars(Object.keys(todoVars)[0]),
      tagColor: themeVars(Object.keys(tagVars)[0]),
      fontSize: themeVars('aui-font-size')
    }
  },
  methods: {
    change(e) {
      const apply = () => {
        this.theme[e.target.name] = e.target.value
        changeTheme(this.theme)
      }

      if (!supportCssVars() && window.confirm('当前浏览器不支持主题切换，要启用兼容程序吗？')) {
        enableCssVars().then(apply)
      } else {
        apply()
      }
    },
    loadCard(cssVars) {
      if (cssVars) {
        combineVars(cssVars)
        this.title = 'Card'
        this.name = Object.keys(cssVars)[0]
        this.color = cssVars[this.name]
      }
    }
  },
  mounted() {
    onResize({
      check: () => (document.body.clientWidth < 768 ? 'mobile' : 'pc'),
      change: mode => (this.$mode.value = mode)
    })
  }
}
</script>
