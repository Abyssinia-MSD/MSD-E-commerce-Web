import { useState } from 'react';
import React from 'react';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';

const mydiv = styled.div`
    display: ${(props)=>props.disp ? 'none' : "block"}

`

export default function Form() {


const [disp, setdisp] = useState();
// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

const checkUser = (e)=>{
  setdisp(!disp)
}
// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

// this.state = { checked: false };
    // this.handleChange = this.handleChange.bind(this);

return (
  <div className="SignUpContainer">
	<div className="SignUpform">
	<div>
		<h1 className="fw-700">Welcome to Abyssinia</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
    <div className="d-flex">
      <div>
        <label className="label">Full Name</label>
        <input onChange={handleName} className="input-signup"
        value={name} type="text" />
      </div>
       <div>
        <label className="label">User Name</label>
        <input onChange={handleName} className="input-signup"
        value={name} type="text" />
      </div>

    </div>


    <div>
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input-signup"
        value={email} type="email" />
    </div>

    <div>
      <label className="label">Password</label>
      <input onChange={handlePassword} className="input-signup"
      value={password} type="password" />
    </div>

    <div className="form-check">
      <input type="checkbox" onClick={checkUser} className="form-check-input"/>
      <label className="form-check-label">Shop owner</label>
    </div>
    <mydiv className='d-mynone business' display={disp} >

          <div className="d-flex sid-by justify-content-between">
            <div> 
              <label className="label">Bussiness Id</label>
              <input className="input-signup"
              type="text" />
            </div>
            <div>
              <label className="label">Phone number</label>
              <input className="input-signup"
              type="text" />
            </div>

          </div>
          <ImageUploader
                      withIcon={false}
                      buttonText='Upload image'
                      withLabel ={false}
                      // onChange={this.onDrop}
                      withPreview ={true}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                      singleImage ={true}
          />

        

    </mydiv>

		<button onClick={handleSubmit} className="btn btn-primary" type="submit">
		Submit
		</button>
    <button onClick={handleSubmit} className="btn btn-primary d-none" type="submit">
		Next
		</button>

  
	</form>

  </div>
	</div>
);
}
