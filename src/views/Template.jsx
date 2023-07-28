import React from 'react'
import '../style/template.css'

export default props => {
  const { addTag, removeTag, value, keydown, input, tags, ref } = props
  return (
    <div align="left" className="max-w-md w-full mx-auto">
      <div className="p-4 rounded border bg-white">
        <div className="flex">
          <input ref={ref} value={value} placeholder="New Tag" onChange={input} onKeyDown={keydown} className="aui-todo aui-font text-input flex-1 mr-2 d-inline tag-input" />
          <button type="button" className="btn btn-primary" onClick={addTag}>Add</button>
        </div>
        <ul className="mt-4 pl-6">
          {tags.map(tag => {
            return (
              <li key={tag} className="mb-2">
                <span className="aui-tag aui-font text-capitalize font-weight-bold">{tag}</span>
                <button className="ml-2 text-grey-dark hover:text-grey-darkest underline text-sm" onClick={() => { removeTag(tag) }}>Remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
