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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../loginpage.css';
//import { ReactSession } from 'react-client-session';
//import APIService from './Components/APIService';

const StaffLogin = (props) => {
  const [message, setMessage] = useState('')
    const [userid, setUserId] = useState('')
    const [uname, setUname] = useState("")
	const [password, setPassword] = useState("")
	const [unameError, setUnameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();
function check_User(body)
{
        let response = fetch('http://localhost:5000/stafflogincheck',{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .then((jsonData) => {
        // jsonData is parsed json object received from url        
        console.log("Json : ", jsonData['msg'], " User Id ", jsonData['userid'])
        if(jsonData['msg']=='success'){
            setMessage(jsonData['msg'])
            setUserId(jsonData['userid'])
            sessionStorage.setItem('userid', jsonData['userid'])
            sessionStorage.setItem('usertype', 'staff')
            let path = '/';
            navigate(path);
            window.location.reload(false);
        }else{
            alert("Invalid UserName/Password")  
        }
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
    //.catch(error => console.log(error))
    //console.log("Resp : ", response)
}
/*
function check_User()
{
    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const body = { uname: uname, password:password };
        axios.post('http://localhost:5000/userlogincheck', body)
            .then(response => setMessage(response.data));
        console.log("Resp : ", message);        
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
}
*/

      const handleSubmit=(event)=>{
        if (uname.length==0 || uname==null)
    alert("UserName is Empty");
  else if (password.length==0 || password==null)
    alert("Password is Empty");
    else{
        event.preventDefault()        
        check_User({uname, password})
        console.log("Response : ", message)
        //check_User()
        setUname('')
        setPassword('')
        //if(message=='success')
        //alert("User Inserted Success")
        //else
        //alert("Invalid UserName/Password")
    }
      }

  return <div className={"mainContainer"}>
    <div className={"titleContainer"}>
      <div>Staff Login</div>
    </div>
    <br />
    <div className={"inputContainer"}>
      <input
        value={uname}
        placeholder="Enter your username here"
        onChange={ev => setUname(ev.target.value)}
        className={"inputBox"} required />
      <label className="errorLabel">{unameError}</label>
    </div>
    <br />
    <div className={"inputContainer"}>
      <input type="password"
        value={password}
        placeholder="Enter your password here"
        onChange={ev => setPassword(ev.target.value)}
        className={"inputBox"} required />
      <label className="errorLabel">{passwordError}</label>
    </div>
    <br />
    <div className={"inputContainer"}>
      <input
        className={"inputButton"}
        type="button"
        onClick={handleSubmit}
        value={"Staff LogIn"} />
    </div>
  </div>
}

export default StaffLogin