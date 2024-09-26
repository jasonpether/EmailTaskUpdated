import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import './Email.css';

function Email({ title, placeholder, button1 }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/POST", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email: email }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email.");
    }
  };

  return (
    <div className="header">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="search">
        <Input 
          placeholder={placeholder} 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div className="buttons">
        <Button onClick={handleSubmit}>{button1}</Button>
      </div>
    </div>
  );
}

export default Email;
