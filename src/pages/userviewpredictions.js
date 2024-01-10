// pages/about.js
import '../index.css';
import React from "react";
import {useEffect} from 'react';
import {useState } from "react";
import axios from 'axios';
const UserViewPredictions = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:5000/admingetusers')
		  .then(res => {
			setData(res.data.data);
			console.log("Response : ", res.data)
			console.log("Data : ", data)
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
			<div style={{margin:'25px'}}>
				<center>
			<h1>
				Admin View Users Page
			</h1></center>
			<p>
			{/*Message : 	
			 {data.map(row => <div>{row.FirstName}</div>)} */}
			<table style={{width:'90%', left:'10px', position:'absolute'}}>
				<thead>
				<tr style={{width:'800px'}}>
					<th style={{width:'200px', textAlign:'center'}}>User Id</th>
					<th style={{width:'200px'}}>First Name</th>
					<th style={{width:'200px'}}>Last Name</th>
					<th style={{width:'200px'}}>Email Id</th>
					<th style={{width:'200px'}}>Phone Number</th>
				</tr>
				</thead>
				<tbody>
				
			{data.map((row, index) => (
              <tr data-index={index}>  
                <td style={{textAlign:'center'}}>{row.id}</td>  
                <td style={{textAlign:'center'}}>{row.FirstName}</td>
                <td style={{textAlign:'center'}}>{row.LastName}</td>
				<td style={{textAlign:'center'}}>{row.EmailId}</td>
				<td style={{textAlign:'center'}}>{row.PhoneNumber}</td>
              </tr>  
            ))}
				</tbody>
			</table>
			</p>
			</div>
		</div>
	);
};

export default UserViewPredictions;