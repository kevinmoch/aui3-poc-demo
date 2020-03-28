import { renderless } from "../../renderless/Todo/react";

export default function(props, context, hooks) {
  const api = renderless(props, context, hooks);
  const notify = window.$notify;

  const checkTag = api.checkTag;
  api.checkTag = ({ tags, tag }) => {
    notify("执行自定义的 checkTag 函数，检查 " + tag);
    return checkTag({ tags, tag });
  };

  const removeTag = api.removeTag;
  api.removeTag = tag => {
    removeTag(tag) && notify("执行自定义的 Todo 删除函数，移除 " + tag);
  };

  return api;
}
