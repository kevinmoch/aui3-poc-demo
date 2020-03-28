import React from "react";
import Tag from "../Tag";

export default props => {
  const { addTag, removeTag, value, keydown, input, tags, ref, $mode } = props;
  return (
    <div align="left" className="max-w-md w-full mx-auto">
      <div className="form-group d-flex">
        <input
          ref={ref}
          value={value}
          onChange={input}
          onKeyDown={keydown}
          placeholder="New Tag"
          type="text"
          className="aui-todo aui-font border border-primary shadow-none rounded-0 d-inline todo-input"
        />
        <button
          className="btn btn-primary shadow-none border-0 rounded-0"
          onClick={addTag}
        >
          Add
        </button>
      </div>
      <div className="list-group">
        {tags.map(tag => {
          return (
            <div
              key={tag}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <Tag content={tag} $mode={$mode} />
              <button
                className="close shadow-none border-0"
                onClick={() => {
                  removeTag(tag);
                }}
              >
                <span>&times;</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
