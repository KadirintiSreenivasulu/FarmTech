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

const StaffHeader = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to="/staffmainpage" >
						Home Page
					</NavLink>
					<NavLink to="/staffviewprofile" >
						View Profile
					</NavLink>
					 <NavLink to="/staffupdatedelivery">
						Update Delivery
					</NavLink>
					<NavLink to="/logout">
						Logout
					</NavLink>
					{/* <NavLink to="/newuserpage" activeStyle>
						Sign Up
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Page
					</NavLink> */}
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

export default StaffHeader;
