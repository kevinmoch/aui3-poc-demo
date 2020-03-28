import { trim } from "../common";

export const mounted = api => () => {
  api.focus();
};

export const focus = refs => () => {
  refs.input.focus();
};

export const checkTag = ({ tags, tag }) =>
  tag.length === 0 || tags.indexOf(tag) !== -1;

export const addTag = ({ text, props, refs, emit, api }) => tag => {
  tag = trim(typeof tag === "string" ? tag : text.value);
  if (api.checkTag({ tags: props.tags, tag })) {
    return false;
  }
  props.tags.push(tag);
  text.value = "";
  refs.input.focus();
  emit("add", tag);
  return true;
};

export const removeTag = ({ props, refs, emit }) => tag => {
  const index = props.tags.indexOf(tag);
  if (index !== -1) {
    props.tags.splice(index, 1);
    refs.input.focus();
    emit("remove", tag);
    return true;
  }
  return false;
};

export const inputEvents = ({ text, api }) => {
  return {
    input: e => {
      text.value = e.target.value;
    },
    keydown: e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        api.addTag(e.target.value);
      }
    }
  };
};
