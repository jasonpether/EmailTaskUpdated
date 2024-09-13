import React from 'react';
import { Input as SemanticInput } from 'semantic-ui-react';

function InputBox({ title, type, value, onChange, name }) {
  return (
    <div>
      <label>{title}</label>
      <SemanticInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={title}
        name={name} 
      />
    </div>
  );
}

export default InputBox;
