import React from "react";
import Todo from "../react/Todo";
import { value } from "../react/common";
import template from "./Template";
import $renderless from "./renderless/react";

export default props => {
  const tags = value(["Vue", "is", "Awesome"]).value;
  const mode = value("pc");

  const listeners = {
    add(tag) {
      window.$notify(`Todo 添加了新内容 ${tag}`);
    },
    remove(tag) {
      window.$notify(`Todo 删除了旧内容 ${tag}`);
    }
  };

  return (
    <div>
      <div align="center">
        <div className="mb-3">
          <span className="badge badge-success mr-1">A</span>
          <span>
            Todo 组件由渲染模板 + Renderless 函数组合而成，更改组件状态
          </span>
          <button
            className="btn btn-danger btn-sm ml-2"
            onClick={() => {
              mode.value = "pc";
            }}
            title="组件切换到 PC 状态"
          >
            PC
          </button>
          <button
            className="btn btn-warning btn-sm ml-2"
            onClick={() => {
              mode.value = "mobile";
            }}
            title="组件切换到 Mobile 状态"
          >
            {" "}
            Mobile
          </button>
        </div>
        <Todo tags={tags} $mode={mode.value} listeners={listeners} />
      </div>

      <div className="todo-custom font-sans text-black">
        <div className="mt-5 mb-2">
          <span className="badge badge-success mr-2">B</span>
          <span>
            自定义 Todo 组件的渲染模板(支持自定义嵌套子组件)，但 Renderless
            函数不变
          </span>
        </div>
        <Todo
          $mode={"mobile"}
          tags={tags}
          $template={template}
          $renderless={$renderless}
          listeners={listeners}
        />
      </div>
    </div>
  );
};
