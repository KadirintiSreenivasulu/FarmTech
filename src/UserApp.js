//import logo from './logo.svg';
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import UserHeader from "./components/Navbar/userheader";
import "./loginpage.css";
import LogoutPage from "./pages/logout";
import UserMainPage from "./pages/usermainpage";
import UserPaymentSuccessPage from "./pages/userpaymentsuccesspage";
import UserReturnProducts from "./pages/userreturnproducts";
import UserSearchProducts from "./pages/usersearchproducts";
import UserSearchProducts1 from "./pages/usersearchproducts1";
import UserUpdateDetails from "./pages/userupdatedetails";
import UserViewAddToCartPage from "./pages/userviewaddtocartpage";
import UserViewFullDetails from "./pages/userviewfulldetails";
import UserViewNewProducts from "./pages/userviewnewproducts";
import UserViewProfile from "./pages/userviewprofile";
import UserViewReports from "./pages/userviewreports";

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
function UserApp() {
    return (
        <Router>
            <UserHeader />
            <Routes>
                <Route path="/" element={<UserMainPage />} />
                <Route path="/usermainpage" element={<UserMainPage />} />
                <Route path="/userviewprofile" element={<UserViewProfile />} />
                <Route path="/userupdatedetails" element={<UserUpdateDetails />} />
                <Route path="/usersearchproducts" element={<UserSearchProducts />} />                
                <Route path="/userviewaddtocart" element={<UserViewAddToCartPage />} />
                <Route path="/userpaymentsuccesspage" element={<UserPaymentSuccessPage />} />
                <Route path="/userviewreports" element={<UserViewReports />} />
                <Route path="/userviewfulldetails" element={<UserViewFullDetails />} />
                <Route path="/userviewnewproducts" element={<UserViewNewProducts />} />
                <Route path="/userreturnproducts" element={<UserReturnProducts />} />
                <Route path="/usersearchproducts1" element={<UserSearchProducts1 />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
        </Router>
    );
}
export default UserApp;