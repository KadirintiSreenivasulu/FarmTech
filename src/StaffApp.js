//import logo from './logo.svg';
import React from "react";
import "./App.css";
import "./loginpage.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LogoutPage from "./pages/logout";
import UserMainPage from "./pages/usermainpage";
import UserViewProfile from "./pages/userviewprofile";
import UserUpdateDetails from "./pages/userupdatedetails";
import UserViewPredictions from "./pages/userviewpredictions";
import UserHeader from "./components/Navbar/userheader";
import UserSearchProducts from "./pages/usersearchproducts";
import UserViewAddToCartPage from "./pages/userviewaddtocartpage";
import UserPaymentSuccessPage from "./pages/userpaymentsuccesspage";
import UserViewReports from "./pages/userviewreports";
import UserViewFullDetails from "./pages/userviewfulldetails";
import StaffMainPage from "./pages/staffmainpage";
import StaffViewProfile from "./pages/staffviewprofile";
import StaffUpdateDelivery from "./pages/staffupdatedelivery";
import StaffHeader from "./components/Navbar/staffheader";
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
function StaffApp() {
    return (
        <Router>
            <StaffHeader />
            <Routes>
                <Route path="/" element={<StaffMainPage />} />
                <Route path="/staffmainpage" element={<StaffMainPage />} />
                <Route path="/staffviewprofile" element={<StaffViewProfile />} />
                {/* <Route path="/staffupdatedelivery" element={<UserUpdateDetails />} /> */}
                <Route path="/staffupdatedelivery" element={<StaffUpdateDelivery />} />                
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
        </Router>
    );
}
export default StaffApp;