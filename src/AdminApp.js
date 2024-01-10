//import logo from './logo.svg';
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import AdminHeader from "./components/Navbar/adminheader";
import "./loginpage.css";
import AdminMainPage from "./pages/adminmainpage";
import AdminViewFullDetails from "./pages/adminviewfulldetails";
import AdminViewNewProducts from "./pages/adminviewnewproducts";
import AdminViewProducts from "./pages/adminviewproducts";
import AdminViewReports from "./pages/adminviewreports";
import AdminViewStaffs from "./pages/adminviewstaffs";
import AdminViewUsers from "./pages/adminviewusers";
import LogoutPage from "./pages/logout";
import NewItemsPage from "./pages/newitems";
import NewlyItemsPage from "./pages/newlyitems";
import NewStaffPage from "./pages/newstaff";
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

function AdminApp() {
  
    return (
        <Router>
            <AdminHeader />
            <Routes>
                <Route path="/" element={<AdminMainPage />} />
                <Route path="/adminmainpage" element={<AdminMainPage />} />
                <Route path="/adminviewusers" element={<AdminViewUsers />} />
                <Route path="/adminviewstaffs" element={<AdminViewStaffs />} />
                <Route path="/newstaffpage" element={<NewStaffPage />} />
                <Route path="/newitemspage" element={<NewItemsPage />} />
                <Route path="/newlyitemspage" element={<NewlyItemsPage />} />
                <Route path="/adminviewproducts" element={<AdminViewProducts />} />
                <Route path="/adminviewreports" element={<AdminViewReports />} />
                <Route path="/adminviewfulldetails" element={<AdminViewFullDetails />} />
                <Route path="/adminviewnewproducts" element={<AdminViewNewProducts />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
        </Router>
    );
}
export default AdminApp;