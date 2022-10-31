import React from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import { useState } from 'react';

function UserForm() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [emailError, setEmailError] = useState("");
 const [passwordError, setPasswordError] = useState("");
    
 const handler = (event) =>  {
    event.preventDefault();
    var passwordWordValid = false;
   var emailValid = false;
  if (email.length === 0) {
    setEmailError("Email is required");
  } else if(email.length < 10 ) {
    setEmailError("Email should be minimum of 10 characters"); 
  } else if (email.length > 13 ) {
    setEmailError("email cannot be greater than 13");            
  } else {
      setEmailError("");
      emailValid = true;
      passwordWordValid =true;
  }
   if(emailValid && passwordWordValid) {
      alert('Email: ' + email + '\nPassword: '+ password);

   }

 } 
    return(
        <div>
        <Form onSubmit = {handler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} value={email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
          {emailError.length > 0 && 
          <Alert variant='danger'>{emailError}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} value={password}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
       <br/>
       Email entered: {email}
      <br/> 
      Password entered: {password}
      </div>
    );
}

export default UserForm;