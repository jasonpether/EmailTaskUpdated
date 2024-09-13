import InputBox from "../InputBox";
import React from 'react'
import Buttont from "../Buttont";
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="Page">
    <h2>Create your Account for DEV@DEAKIN Below!</h2>
    <InputBox title="Enter your Email"/>
    <InputBox title="Enter your Password"/>
    <br/>
    <Buttont title="Sign up!"/>  
    </div>
    
  );
}

export default LoginPage;
