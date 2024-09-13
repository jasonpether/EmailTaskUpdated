import Header from '../Header'
import React from 'react'
import { Outlet } from 'react-router-dom';
function NavigationBar() {
    return(
    <div>
        <Header
          title="DEV@DEAKIN" 
          placeholder="Search..." 
          button1="Post" 
          button2="Login" 
        />
        <Outlet />
        </div>
        );
    }

export default NavigationBar