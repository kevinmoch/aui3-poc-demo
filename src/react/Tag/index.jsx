import { renderless, api } from "../../renderless/Tag/react";
import { setup, render } from "../common/index";

import pc from "./pc";
import "../../theme/Tag/index.css";

export default props => {
  const { $mode = "pc", $template, $renderless, listeners = {} } = props;
  const context = {
    $mode,
    $template,
    $renderless,
    listeners
  };
  return render({ $mode, $template, pc })(
    setup({ context, props, renderless, api, listeners, $renderless })
  );
};
