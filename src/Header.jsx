import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './Header.css';

function Header({ title, placeholder, button1, button2 }) {
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
            <Button >{button2}</Button>
        </div>
    </div>
  );
}

export default Header;
