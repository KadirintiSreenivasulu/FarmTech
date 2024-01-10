// components/Navbar/index.js
import React from "react";
import {
	Bars,
	Nav,
	NavLink,
	NavMenu
} from "./navbarElements";

const UserHeader = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to="/usermainpage" >
						Home Page
					</NavLink>
					<NavLink to="/userviewprofile" >
						View Profile
					</NavLink>
					{/* <NavLink to="/userupdatedetails">
						Update Details
					</NavLink>					 */}
					 <NavLink to="/usersearchproducts">
						Buy Products
					</NavLink>
					<NavLink to="/userviewnewproducts">
						Newly Introdcing
					</NavLink>
					<NavLink to="/userviewaddtocart">
						View Add To Cart
					</NavLink>
					<NavLink to="/userreturnproducts">
						Return Products
					</NavLink>
					<NavLink to="/userviewreports">
						View Reports
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

export default UserHeader;
