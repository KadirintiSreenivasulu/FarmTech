// pages/about.js
import '../index.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminViewReports = () => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();	

	useEffect(() => {
		axios.get('http://localhost:5000/admingetreports')
			.then(res => {
				setData(res.data.data);
				console.log("Response : ", res.data)
				console.log("Data : ", data)
			})
	}, []);

	const handleClick = (id) => () => {
		sessionStorage.setItem('buyid', id)
		let path = '/adminviewfulldetails?id=' + id;
		console.log('Id : ', id)
		navigate(path);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh",
			}}
		>
			<div style={{ margin: '25px' }}>
				<center>
					<h1>
						Admin View Reports Page
					</h1></center>
				<p>
					{/*Message : 	
			 {data.map(row => <div>{row.FirstName}</div>)} */}
					<table style={{ width: '90%', left: '10px', position: 'absolute' }}>
						<thead>
							<tr style={{ width: '800px' }}>
								<th style={{ width: '200px', height: '50px', textAlign: 'center' }}>Product Id</th>
								<th style={{ width: '200px' }}>User Name</th>
								<th style={{ width: '200px' }}>Product Name</th>
								<th style={{ width: '200px' }}>Product Type</th>
								<th style={{ width: '200px' }}>Quantity</th>
								<th style={{ width: '200px' }}>Price</th>
								<th style={{ width: '200px' }}>Description</th>
								<th style={{ width: '200px' }}>PaymentStatus</th>
								<th style={{ width: '200px' }}>View Full Details</th>
							</tr>
						</thead>
						<tbody>

							{data.map((row, index) => (
								<tr data-index={index}>
									<td style={{ textAlign: 'center', height: '50px' }}>{row.id}</td>
									<td style={{ textAlign: 'center' }}>{row.FirstName} &nbsp; {row.LastName}</td>
									<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
									<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
									<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
									<td style={{ textAlign: 'center' }}>{row.Price}</td>
									<td style={{ textAlign: 'center' }}>{row.Description}</td>
									{/* <td style={{textAlign:'center'}}>{parseInt(row.Quantity)* parseInt(row.Price)}</td> */}
									<td style={{ textAlign: 'center' }}>{row.PaymentStatus}</td>
									<td style={{ textAlign: 'center' }}>
										<button onClick={handleClick(row.id)}>
											View Full Details
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</p>
			</div>
		</div>
	);
};
export default AdminViewReports;