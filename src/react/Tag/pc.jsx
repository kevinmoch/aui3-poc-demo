import React from "react";

export default props => {
  const { text } = props;
  return <span className="aui-tag aui-font">{text}</span>;
};
