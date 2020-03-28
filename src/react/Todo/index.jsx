import { useRef } from "react";
import { renderless, api } from "../../renderless/Todo/react";
import { setup, render, useRefMapToVueRef } from "../common/index";

import pc from "./pc";
import mobile from "./mobile";
import "../../theme/Todo/index.css";

export default props => {
  const { $mode = "pc", $template, $renderless, listeners = {}, tags } = props;
  const context = {
    $mode,
    $template,
    $renderless,
    listeners
  };

  const ref = useRef();
  useRefMapToVueRef({ context, name: "input", ref });

  const {
    addTag,
    removeTag,
    inputEvents: { keydown, input },
    text: { value }
  } = setup({ context, props, renderless, api, listeners, $renderless });
  return render({ $mode, $template, pc, mobile })({
    addTag,
    removeTag,
    value,
    keydown,
    input,
    tags,
    ref,
    $mode
  });
};
