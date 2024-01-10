//import logo from './logo.svg';
import React from "react";
import "./App.css";
import "./loginpage.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Services from './pages/services';
import Gallery from './pages/gallery';
import AdminLogin from './pages/adminlogin';
import UserLogin from './pages/userlogin';
import NewUserPage from './pages/newuserpage';
import Contact from "./pages/contact";
import AdminMainPage from "./pages/adminmainpage";
import NewStaffPage from "./pages/newstaff";
import AdminHeader from "./components/Navbar/adminheader";
import CommonHeader from "./components/Navbar/commonheader";
import LogoutPage from "./pages/logout";
import StaffLogin from "./pages/stafflogin";
//import SignUp from "./pages/signup";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  console.log("In App : ", sessionStorage.getItem('usertype'));
  //if(sessionStorage.getItem('usertype')==null){
    /*return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/userlogin" element={<UserLogin />} />
                <Route path="/newuserpage" element={<NewUserPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
  //}
  /*else if(sessionStorage.getItem('usertype').match('admin')){
   */
    //if(sessionStorage.getItem('usertype')==null){
   return (
        <Router>
            <CommonHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/userlogin" element={<UserLogin />} />
                <Route path="/stafflogin" element={<StaffLogin />} />
                <Route path="/newuserpage" element={<NewUserPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
  /*}
  else if(sessionStorage.getItem('usertype')=='admin'){
    return (
         <Router>
             <AdminHeader />
             <Routes>
                <Route path="/" element={<AdminMainPage />} />
                <Route path="/adminmainpage" element={<AdminMainPage />} />
                <Route path="/adminaddstaff" element={<NewStaffPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/userlogin" element={<UserLogin />} />
                <Route path="/newuserpage" element={<NewUserPage />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
         </Router>
     );
   }*/
}
export default App;