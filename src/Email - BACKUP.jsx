import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './Email.css';

function EmailB({ title, placeholder, button1}) {
  return (
    <div className="header">

        <div className="title">
            <h1>
            {title}
            </h1>
           
        </div>
    
        <div className='search'>
            <Input placeholder={placeholder} />
        </div>
      
        <div className="buttons">
            <Button >{button1}</Button>
        </div>
    </div>
  );
}

export default EmailB;
