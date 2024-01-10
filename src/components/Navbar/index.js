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

const Navbar = () => {
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
					<NavLink to="/gallery" activeStyle>
						Gallery Page
					</NavLink>
					<NavLink to="/adminlogin" activeStyle>
						Admin Login
					</NavLink>
					<NavLink to="/userlogin" activeStyle>
						User Login
					</NavLink>
					<NavLink to="/newuserpage" activeStyle>
						Sign Up
					</NavLink>
					<NavLink to="/contact" activeStyle>
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

export default Navbar;
