// components/Navbar/index.js
import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./navbarElements";

const CommonHeader = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to="/home" >
						Home Page
					</NavLink>
					<NavLink to="/about" >
						About Page
					</NavLink>
					<NavLink to="/services">
						Services Page
					</NavLink>
					<NavLink to="/gallery">
						Gallery Page
					</NavLink>
					<NavLink to="/adminlogin">
						Admin Login
					</NavLink>
					<NavLink to="/userlogin">
						User Login
					</NavLink>
					<NavLink to="/stafflogin">
						Staff Login
					</NavLink>
					<NavLink to="/newuserpage">
						Sign Up
					</NavLink>
					<NavLink to="/contact">
						Contact Page
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{/* <NavBtn>
					<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
};

export default CommonHeader;
