// pages/about.js
import React from "react";
import {useEffect} from 'react';
import {useState } from "react";
import axios from 'axios';
const UserViewProfile = () => {

	const [data, setData] = useState('');
	let userid = sessionStorage.getItem('userid').toString()
	useEffect(() => {
		axios.get('http://localhost:5000/userviewprofile?id='+ userid)
		  .then(res => {
			setData(res.data);
			console.log("Response : ", res.data)
		  })
	  }, []);	

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh",
			}}
		>
			<div style={{margin:'20px'}}>
				
			<h1 style={{alignItems: "centre"}}>
				User View Profile Page</h1>
				<h3>
				<table  style={{width:'40%', left:'10px', height:'350px', position:'absolute'}}>
					<tr  style={{width:'800px'}}>
						<th>User Id</th>
						<td style={{textAlign:'center'}}>
							{data['id']}
						</td>
					</tr>
					<tr>
						<th>First Name</th>
						<td style={{textAlign:'center'}}>
							{data['FirstName']}
						</td>
					</tr>
					<tr>
						<th>Last Name</th>
						<td style={{textAlign:'center'}}>
							{data['LastName']}
						</td>
					</tr>
					<tr>
						<th>Email Id</th>
						<td style={{textAlign:'center'}}>
							{data['EmailId']}
						</td>
					</tr>
					<tr>
						<th>Phone Number</th>
						<td style={{textAlign:'center'}}>
							{data['PhoneNumber']}
						</td>
					</tr>
				</table>
				</h3>
			</div>
		</div>
	);
};

export default UserViewProfile;
