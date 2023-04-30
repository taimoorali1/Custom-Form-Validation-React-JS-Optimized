import React from 'react';

function InputField(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        as={props.as}
        row={props.row}
        onChange={props.onChange}
        className='form-control'
      />
      {props.error && <div className="error" style={{ color: "red" }}>{props.error}</div>}

    </div>
  );
}

export default InputField;
