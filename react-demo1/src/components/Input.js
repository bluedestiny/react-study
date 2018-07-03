import React from 'react';

const Input = (props) => {
  return (
    <form>
  <div
    className="form-group">
    <label
      htmlFor="listInput">
      Email address
    </label>
    <input
      type="text"
      className="form-control"
      id="listItemInput"
      placeholder="Add new todo"
      onChange={props.onChange}
    />
    <button
      className="btn btn-primary" onClick={props.onClick}>
      Add Item
    </button>
  </div>
</form>

  );
};
export default Input;