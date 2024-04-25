import React, { useState } from "react"
import "./Feedback.css"
function Feedback(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  function validateEmail(email) {
    const emailValue = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue.match(emailPattern)) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = () =>{
    if(name && email && message){
      if(validateEmail(email)){
        alert("Form Submitted")
        setName("")
        setEmail("")
        setMessage("")
      }
      else{
        alert('Please enter a valid email address');
      }
    }
    else{
      alert("Either Name , Email or Message is empty")
    }
  }

  return(
    <div className="bodyContainer">
    <div class="container">
    <h2>Feedback Form</h2>
    <form id="feedback-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e)=>{setName(e.target.value)}} required></input>
        <p class="error-message" id="name-error"></p>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required></input>
        <p class="error-message" id="email-error"></p>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
        <p class="error-message" id="message-error"></p>
      </div>
      <button type="submit" onClick={(e)=>{e.preventDefault(); handleSubmit();}}>Submit</button>
    </form>
  </div>
  </div>
  )
}

export default Feedback