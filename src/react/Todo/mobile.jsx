import React from "react";
import Tag from "../Tag";
import "../../style/mobile.scss";

export default props => {
  const { removeTag, value, keydown, input, tags, ref, $mode } = props;
  return (
    <div className="todo-mobile" align="center">
      <div align="left" className="max-w-md w-full mx-auto">
        <div className="tags-input">
          {tags.map(tag => {
            return (
              <span key={tag} className="tags-input-tag">
                <Tag content={tag} $mode={$mode} />
                <button
                  type="button"
                  className="tags-input-remove"
                  onClick={() => {
                    removeTag(tag);
                  }}
                >
                  &times;
                </button>
              </span>
            );
          })}
          <input
            ref={ref}
            value={value}
            onChange={input}
            onKeyDown={keydown}
            placeholder="New Tag"
            className="aui-todo aui-font tags-input-text"
          />
        </div>
      </div>
    </div>
  );
};
