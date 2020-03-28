<template>
  <div>
    <todo :$mode="mode" :newTag="newTag" :tags="tags" @add="onAdd" @remove="onRemove">
      <template v-slot:header>
        <div class="mb-3">
          <span class="badge badge-success mr-1">A</span>
          <span>Todo 组件由渲染模板 + Renderless 函数组合而成，更改组件状态</span>
          <button class="btn btn-danger btn-sm ml-2" @click="mode = 'pc'" title="组件切换到 PC 状态">PC</button>
          <button
            class="btn btn-warning btn-sm ml-2"
            @click="mode = 'mobile'"
            title="组件切换到 Mobile 状态"
          >Mobile</button>
        </div>
      </template>
    </todo>

    <todo :$template="template" :newTag="newTag" :tags="tags" @add="onAdd" @remove="onRemove">
      <template v-slot:header>
        <div class="mt-5 mb-2">
          <span class="badge badge-success mr-2">B</span>
          <span>自定义 Todo 组件的渲染模板(支持自定义嵌套子组件)，但 Renderless 函数不变</span>
        </div>
      </template>
    </todo>

    <todo
      :$renderless="renderless"
      :newTag="newTag"
      :tags="tags"
      @add="onAdd"
      @remove="onRemove"
      ref="todo"
    >
      <template v-slot:header>
        <div class="mt-5 mb-2">
          <span class="badge badge-success mr-2">C</span>
          <span>自定义 Todo 组件的 Renderless 函数(引用无渲染组件)，渲染模板默认为 Mobile</span>
        </div>
      </template>
      <template v-slot:footer>
        <div class="mt-3 mb-2">
          <span>直接调用组件暴露的 addTag 和 removeTag 方法</span>
          <button class="btn btn-info btn-sm ml-2" @click="addTag">Add Tag</button>
          <button class="btn btn-info btn-sm ml-2" @click="removeTag">Remove Tag</button>
        </div>
      </template>
    </todo>

    <div class="mt-5 mb-5">
      <span class="badge badge-success mr-2">D</span>
      <span>发送请求动态加载卡片文件，卡片的组件自适应页面的颜色和字体</span>
      <button class="btn btn-info btn-sm ml-2" @click="loadCard">Load Card</button>
      <component :is="card"/>
    </div>
  </div>
</template>

<script>
import Todo from "../vue/Todo";
import renderless from "./renderless/vue";

export default {
  components: {
    Todo
  },
  data() {
    const mode = "pc";
    const newTag = "New Tag";
    const tags = ["Vue", "is", "Awesome"];
    const card = () => import("../card/Empty.vue");
    const template = () => import("./Template.vue");

    return {
      mode,
      card,
      tags,
      newTag,
      template,
      renderless
    };
  },
  methods: {
    addTag() {
      this.$refs.todo.addTag(prompt("请输入要新增的内容", ""));
    },
    removeTag() {
      this.$refs.todo.removeTag(prompt("请输入要删除的内容", ""));
    },
    onAdd(tag) {
      window.$notify(`Todo 添加了新内容 ${tag}`);
    },
    onRemove(tag) {
      window.$notify(`Todo 删除了旧内容 ${tag}`);
    },
    loadCard() {
      window.System.import("card.js").then(res => {
        this.card = res;
        this.$emit("loadCard", res.cssVars);
      });
    }
  }
};
</script>
