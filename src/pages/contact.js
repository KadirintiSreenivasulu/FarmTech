// pages/about.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../loginpage.css'

const Contact = (props) => {
	const [fname, setFname] = useState("")
	const [lname, setLname] = useState("")	
	const [email, setEmail] = useState("")
    const [phnum, setPhnum] = useState("")
    const [uname, setUname] = useState("")
	const [password, setPassword] = useState("")

	const [fnameError, setFnameError] = useState("")
	const [lnameError, setLnameError] = useState("")
	const [phnumError, setPhnumError] = useState("")
	const [unameError, setUnameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")    
    const navigate = useNavigate();        
    const onButtonClick = () => {
        // You'll update this function later...
    }
    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
			<br /><br />
            <div>Contact Page</div>
        </div>
        <br />
		<div className={"inputContainer"}>
            <input
                value={fname}
                placeholder="Enter your contact name"
                onChange={ev => setFname(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{fnameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={lname}
                placeholder="Enter message here"
                onChange={ev => setLname(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{lnameError}</label>
        </div>
        <br />        
		<div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your emailid here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
		<div className={"inputContainer"}>
            <input
                value={phnum}
                placeholder="Enter your phonenumber here"
                onChange={ev => setPhnum(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{phnumError}</label>
        </div>
        <br />		
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Contact Page"} />
        </div>
    </div>
}

export default Contact;