// pages/about.js

// import React from "react";

// const AdminLogin = () => {
// 	return (
// 		<div
// 			style={{
// 				display: "flex",
// 				justifyContent: "centre",
// 				alignItems: "centre",		
// 			}}
// 		>
			
// 			<h1>
// 			<center>
// 				This is AdminLogin Page.
// 			</center>
// 			</h1>
// 			<center>
// 		<table style={{position:"absolute", top:"200px"}}>
// 			<tr>
// 				<th>Login Name</th>
// 				<td>
// 			<input type="text" placeholder="Username or Email" />
// 			</td>
// 			</tr>
// 			<tr>
// 				<th>Password</th>
// 				<td>
//             <input type="password" placeholder="Password" />
// 			</td>
// 			</tr>
// 			<tr>
// 				<td colSpan={2}>
//             <button type="submit">Login</button>
// 			</td>
// 			</tr>
// 			</table>			
// 			</center>
// 		</div>
// 	);
// };

// export default AdminLogin;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../loginpage.css'

const AdminLogin = (props) => {
    const [uname, setUname] = useState("")
    const [password, setPassword] = useState("")
    const [unameError, setUnameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();

    const handleSubmit=(event)=>{        
        if (uname.length==0 || uname==null)
        alert("UserName is Empty");
      else if (password.length==0 || password==null)
        alert("Password is Empty");
        else{
            event.preventDefault()        
            if(uname=="admin" && password=="admin"){
            sessionStorage.setItem("usertype","admin")
            let path = '/';
		    navigate(path);
            window.location.reload(false);
            }else
            {
                alert("Invalid UserName/Password");
            }
        }
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Admin Login</div>            
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={uname}
                placeholder="Enter your username here"
                onChange={ev => setUname(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{unameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input type="password"
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={handleSubmit}
                value={"Admin LogIn"} />
        </div>
    </div>
}
export default AdminLogin