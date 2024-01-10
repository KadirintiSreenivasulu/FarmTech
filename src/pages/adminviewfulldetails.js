// pages/blogs.js
import '../index.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";

const AdminViewFullDetails = () => {
	const [buyid, setBuyId] = useState('');
	//const [data, setData] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState('');

	let id = sessionStorage.getItem('buyid').toString()
	useEffect(() => {
		axios.get('http://localhost:5000/admingetfulldetails?id='+ id)
		  .then(res => {
			setData(res.data.data);
			console.log("Response : ", res.data)
		  })
	  }, []);	

	/*async function fetchData() {
		try {
			const urlSearchString = window.location.search;	   
		const params = new URLSearchParams(urlSearchString);	   
				console.log('Params : ',params, " Id : ",params.get('id'))
			setBuyId(params.get('id'));
		  const response = await axios.get("http://localhost:5000/admingetfulldetails?id="+params.get('id'));
		  console.log("Response : ", response.data.data)
		  setData(response.data.data);
		} catch (err) {
		  const errorMessage = "Error: " + err.message;
		  setError(errorMessage);
		  console.log(errorMessage);
		} finally {
		  setIsLoading(false);
		}
	}*/
/*
	const getData = async () => {
		const urlSearchString = window.location.search;	   
		const params = new URLSearchParams(urlSearchString);	   
				console.log('Params : ',params)
			setBuyId(params.get('id'));
		const response = await axios.get(
			`http://localhost:5000/usergetfulldetails?id=`+buyid
		);
		console.log('Response : ', response)
	};*/
/*
	let getData = async () => {
		const urlSearchString = window.location.search;	   
		const params = new URLSearchParams(urlSearchString);	   
				console.log('Params : ',params)
			setBuyId(params.get('id'));
		let res = await axios.get("http://localhost:5000/usergetfulldetails?id="+buyid);
		let { data } = res.data;
		console.log("Data : ", res.data)
		//this.setState({ data: data });
	};

	//getData();
	useEffect(() => {
		//fetchData();
		try {
			const urlSearchString = window.location.search;	   
		const params = new URLSearchParams(urlSearchString);	   
				console.log('Params : ',params, " Id : ",params.get('id'))
			setBuyId(params.get('id'));
		  const response = axios.get("http://localhost:5000/admingetfulldetails?id="+params.get('id'));
		  console.log("Response : ", response.data)
		  //setData(response.data.data);
		} catch (err) {
		  const errorMessage = "Error: " + err.message;
		  setError(errorMessage);
		  console.log(errorMessage);
		} finally {
		  setIsLoading(false);
		}
	  }, []);
	
	useEffect(() => {
		const urlSearchString = window.location.search;	   
		const params = new URLSearchParams(urlSearchString);	   
				console.log('Params : ',params)
			setBuyId(params.get('id'));
			console.log('Buy Id : ',buyid)
			let buy_id=sessionStorage.getItem('buyid').toString()
			console.log('Buy Id : ',buy_id)
		   axios.get('http://localhost:5000/usergetfulldetails?id='+buyid)
			  .then(res => {
				setData(res.data.data);
				console.log("Response : ", res.data)
			  })			  
		 }, []);
		 */
		 const handleClick = () => {			
			window.print()
		  };
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh", margin:'25px'
			}}
		>


			 <table style={{
				position: "absolute", width:'175vh', textAlign:"center"
			}}>
				<tr>
					<th colSpan={4}>
			<h1>Admin View Full Details</h1>
			</th>
			</tr>
			<tr>
				<th>Payment Id</th>
				<td>
					{data.PaymentId}
				</td>
			
				<th>Billing Instrument</th>
				<td>
					{data.BillingInstrument}
				</td>
			</tr>
			<tr>
				<th>Instrument Type</th>
				<td>
					{data.InstrumentType}
				</td>
			
				<th>Card Type</th>
				<td>
					{data.CardType}
				</td>
			</tr>
			<tr>
				<th>Description</th>
				<td>
					{data.Description}
				</td>
			
				<th>Amount</th>
				<td>
					{data.Amount}
				</td>
			</tr>
			<tr>
				<th>EmailId</th>
				<td>
					{data.EmailId}
				</td>
			
				<th>FirstName</th>
				<td>
					{data.FirstName}
				</td>
			</tr>
			<tr>
				<th>LastName</th>
				<td>
					{data.LastName}
				</td>
			
				<th>PaymentDate</th>
				<td>
					{data.PaymentDate}
				</td>
			</tr>
			<tr>
				<th>PaymentStatus</th>
				<td>
					{data.PaymentStatus}
				</td>
			
				<th>PersonName</th>
				<td>
					{data.PersonName}
				</td>
			</tr>
			<tr>
				<th>PhoneNum</th>
				<td>
					{data.PhoneNum}
				</td>
			
				<th>ProductName</th>
				<td>
					{data.ProductName}
				</td>
			</tr>
			<tr>
				<th>Quantity</th>
				<td>
					{data.Quantity}
				</td>
			
				<th>Price</th>
				<td>
					{data.Price}
				</td>
			</tr>
			<tr>
				<td colSpan={4}>
				<input
        className={"inputButton"}
        type="button"
		onClick={handleClick}
        value={"Print Report"} />
				</td>
			</tr>
			</table> 
			

		</div>
	);
};

export default AdminViewFullDetails;
