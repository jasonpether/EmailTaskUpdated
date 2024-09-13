import InputBox from "../InputBox";
import React,{useState} from 'react'
import Buttont from "../Buttont";
import './SignUpTest.css';
import { Link } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';



const SignupTest = (props)=>{

  const [contact, setContact] = useState({

      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
  })
    const {displayName, email, password, confirmPassword} = contact;
    const navigate = useNavigate();

    console.log(contact);

    const handleChange = (event)=>{
      const {name, value} = event.target
      setContact ((preValue)=>{  
      return {
      ...preValue,
      [name]: value
      }
      })
    }
    const handleSubmit = async(event) =>
    {
      event.preventDefault();
      if (password !== confirmPassword){
        alert('Passwords do not match')
        return;
      }
      try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password)
        await createUserDocFromAuth(user, {displayName})
        navigate('/Login');
        
      }
      catch(error){
        console.log('error', error.message)
      }
    }

  return (

    <div className="Page">
    <h2>Enter your Login Details</h2>
    <InputBox
        title="Enter your Email"
        type="email"
        value={contact.email}
        onChange={handleChange}
        name="email"  
      />

<InputBox
        title="Enter your Name"
        type="text"
        value={contact.displayName}
        onChange={handleChange}
        name="displayName"  
      />

      <InputBox
        title="Enter your Password"
        type="password"
        value={contact.password}
        onChange={handleChange}
        name="password"
      />

      <InputBox
        title="Confirm your Password"
        type="password"
        value={contact.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
      />

    
    <br/>
    <button onClick={handleSubmit}>
    Submit
    </button>
    <br/>


    </div>
    
  );
}

export default SignupTest;
