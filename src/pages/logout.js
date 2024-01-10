// pages/blogs.js
import {Redirect} from 'react-router-dom';
import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

/*const LogoutPage = () => {
	// <div
	// 		style={{
	// 			display: "flex",
	// 			justifyContent: "centre",
	// 			alignItems: "centre",
	// 			height: "100vh",
	// 		}}
	// 	>
	// 		<h1>This is LogoutPage</h1>
	//
	// 	</div>
	//return (<Redirect to='/home' />);
	sessionStorage.clear();
	const navigate = useNavigate()

	navigate("/home")
};
const LogoutPage = () => {
function RedirectExample() {
	useEffect(() => {
	  const timeout = setTimeout(() => {
		// 👇️ redirects to an external URL
		//window.location.replace('http://localhost:3000/');
		sessionStorage.clear();
	const navigate = useNavigate()

	navigate("/home")
	  }, 3000);
  
	  return () => clearTimeout(timeout);
	}, []);
  
	return <>Will redirect in 3 seconds...</>;
  }
};*/
/*const createHistory = require("history").createBrowserHistory;
class LogoutPage extends React.Component {
    constructor(props) {
        super(props);
		sessionStorage.setItem("usertype","");
        let history = createHistory();
        history.push("/home");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;   

    }

    render() {

        return (
            <div>
            </div>
        );
    }
}class Logout extends React.Component {
    constructor(props) {
        super(props);
        let history = createHistory();
        history.push("/login");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;   

    }

    render() {

        return (
            <div>
            </div>
        );
    }
}
const LogoutPage = () => {
logout(){
    localStorage.clear();
    this.setState({redirect: true})
  }

//inside Render
render(){
    const {redirect} = this.state;
   if(redirect){
    return <Redirect push to="/login"/> 
}
}
};
import {useDispatch} from "react-redux";
import useRouter from 'hooks/useRouter'

const {push} = useRouter();
const dispatch = useDispatch();

const LogoutPage = () => {
    localStorage.clear();
    push("/login");        
    dispatch({
        type: LOGOUT_STARTED,
        payload: false,
    });
};*/
//import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {	
    const navigate = useNavigate();
	sessionStorage.clear();
	//window.location.href("http://localhost:3000/adminlogin");
    return (
		useEffect(() => {
			console.log("Logout Page");			
			 navigate("/");
			 window.location.reload(false);
			 //redirect("http://localhost:3000/home");
			 //window.location.href("http://localhost:3000/home");
		},[])        
    );
};
export default LogoutPage;
