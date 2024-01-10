// components/Navbar/index.js
import React from "react";
import {
	Bars,
	Nav,
	NavLink,
	NavMenu
} from "./navbarElements";

const AdminHeader = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to="/adminmainpage" >
						Home Page
					</NavLink>
					<NavLink to="/newstaffpage" >
						Add Staff
					</NavLink>
					<NavLink to="/newitemspage" >
						Add Products
					</NavLink>
					<NavLink to="/newlyitemspage" >
						Newly Items 
					</NavLink>
					 <NavLink to="/adminviewusers">
						View Users
					</NavLink>
					<NavLink to="/adminviewstaffs">
						View Staffs
					</NavLink>
					<NavLink to="/adminviewproducts">
						View Items
					</NavLink>
					<NavLink to="/adminviewnewproducts">
						View New Items
					</NavLink>
					<NavLink to="/adminviewreports">
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

export default AdminHeader;
