import React, { useState } from "react";
import '../loginpage.css';

const NewStaffPage = (props) => {
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


function insert_NewUser(body)
{
        return fetch('http://localhost:5000/addnewstaff',{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

      const handleSubmit=(event)=>{ 
        event.preventDefault()        
        var phpattern = new RegExp("^[6789][0-9]{9}");
        var namepattern = new RegExp("^[a-zA-Z ]{3,15}");
        var emailpattern = new RegExp("^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$");
        var pwdpattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (fname.length == 0 || fname == null)
            alert("First Name is empty")
        else if (!namepattern.test(fname))
            alert("First Name is not valid, should have 3-15 characters");
        else if (lname.length == 0 || lname == null)
            alert("Last Name is not valid, should have 3-15 characters");
        else if (!namepattern.test(fname))
            alert("EmailId is not valid, should have @ symbol & .co/.com extension");
        else if (uname.length == 0 || uname == null)
            alert("User Name is empty")
        else if (password.length == 0 || password == null)
            alert("Password is empty")
        else if (!pwdpattern.test(password))
            alert("Password is not valid, should have 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
        else if (email.length == 0 || email == null)
            alert("EmailId is empty")
        else if (!emailpattern.test(email))
            alert("EmailId is not valid, should have @ symbol & .co/.com extension");
        else if (phnum.length == 0 || phnum == null)
            alert("PhoneNum is empty")
        else if (!phpattern.test(phnum))
            alert("Phone number is not valid, should be 10 digits & starts with 6,7,8,9");
        else {
            var response = insert_NewUser({ fname, lname, uname, password, email, phnum })
            console.log("Response : Data Inserted Success", response)
            setFname('')
            setLname('')
            setUname('')
            setPassword('')
            setEmail('')
            setPhnum('')
            alert("Staff Inserted Success")
        }
      }

    return <div className={"mainContainer"} style={{
        display: "flex",
        justifyContent: "centre",
        alignItems: "centre",
        height: "10vh",position:'absolute', left:'400px', top:'300px'
    }}>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <h2>     <div>New Staff Page</div> </h2>
        <br />
        <br />
		<div className={"inputContainer"}>
            <input
                value={fname}
                placeholder="Enter your first name"
                onChange={ev => setFname(ev.target.value)}
                className={"inputBox"} required/>
            <label className="errorLabel">{fnameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={lname}
                placeholder="Enter your last here"
                onChange={ev => setLname(ev.target.value)}
                className={"inputBox"} required/>
            <label className="errorLabel">{lnameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={uname}
                placeholder="Enter your username here"
                onChange={ev => setUname(ev.target.value)}
                className={"inputBox"} required/>
            <label className="errorLabel">{unameError}</label>
        </div>
        <br />
		<div className={"inputContainer"}>
            <input type="password"
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} required/>
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
		<div className={"inputContainer"}>
            <input type="email"
                value={email}
                placeholder="Enter your emailid here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} required/>
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
		<div className={"inputContainer"}>
            <input
                value={phnum}
                placeholder="Enter your phonenumber here"
                onChange={ev => setPhnum(ev.target.value)}
                className={"inputBox"} required maxLength={10} pattern="[6789][0-9]{9}"
                title="Phnum shd be 10 digits & starts with 6,7,8,9"/>
            <label className="errorLabel">{phnumError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={handleSubmit}
                value={"New Staff"} />
        </div>
    </div>
}

export default NewStaffPage