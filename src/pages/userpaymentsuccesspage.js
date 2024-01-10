// pages/blogs.js

import axios from 'axios';
import React, { useEffect, useState } from "react";
import '../index.css';

//payment_id=MOJO1703354711&amount=11&personname=ShanthiRekha%20R&email=dhanu.innovation@gmail.com&phonenum=9886239083&instrument_type=CARD&billing_instrument=International%20Regular%20Credit%20Card%20(Visa/Mastercard)&status=Credit&currency=INR&purpose=Tractor%20Perchase

const UserPaymentSuccessPage = () => {
	const [paymentid, setPaymentId] = useState('');
 	const [amount, setAmount] = useState(' ');
 	const [personname, setPersonName] = useState('');
	 const [phonenum, setPhoneNum] = useState('');
	 const [email, setEmail] = useState('');
	 const [instrument_type, setInstrumentType] = useState('');
	 const [billing_instrument, setBillingInstrument] = useState('');
	 const [currency, setCurrency] = useState('');	 
	 const [purpose, setPurpose] = useState('');
	 const [status, setStatus] = useState('');
	 let userid =sessionStorage.getItem('userid').toString()
	useEffect(() => {
		const urlSearchString = window.location.search;	   
		const params = new URLSearchParams(urlSearchString);	   
				console.log('Params : ',params)
			setPaymentId(params.get('payment_id'));	   
		   setAmount(params.get('amount'));	   
		   setEmail(params.get('email'));	   
		   setPersonName(params.get('personname'));	   
		   setPhoneNum(params.get('phonenum'));	   
		   setInstrumentType(params.get('instrument_type'));	   
		   setBillingInstrument(params.get('billing_instrument'));	   
		   setCurrency(params.get('currency'));	   
		   setPurpose(params.get('purpose'));
		   setStatus(params.get('status'));
		 /*  
		   let url="&payment_id="+ paymentid +"&amount="+amount+"&personname="+personname+"&email="+email+"&phonenum="+ phonenum+"&instrument_type="+ instrument_type+"&billing_instrument="+billing_instrument+"&status="+status+"&currency="+currency+"&purpose="+purpose
		   console.log("Url : ",url)
		   axios.get('http://localhost:5000/usermakepayment?userid='+userid+url)
			  .then(res => {
				//setData(res.data.data);
				console.log("Response : ", res.data)
			  })	   
			  */
		 }, []);

		 const handleClick = () => {			
			let url="&payment_id="+ paymentid +"&amount="+amount+"&personname="+personname+"&email="+email+"&phonenum="+ phonenum+"&instrument_type="+ instrument_type+"&billing_instrument="+billing_instrument+"&status="+status+"&currency="+currency+"&purpose="+purpose
		   console.log("Url : ",url)
		   axios.get('http://localhost:5000/usermakepayment?userid='+userid+url)
			  .then(res => {
				//setData(res.data.data);
				console.log("Response : ", res.data)
			  })
			  alert('Payment Confirmed Success')
		  };

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "50vh", width:'150vh', textAlign:"center",
				marginTop:'20vh',marginLeft:'20vh',
			}}
		>
			
			<table>
				<tr>
					<th colSpan={2}>
					<h3>Payment Success</h3>
					</th>
				</tr>
				<tr>
					<th>Payment Id</th>
					<td>{paymentid}</td>
				</tr>
				<tr>
					<th>Amount</th>
					<td>{amount}</td>
				</tr>
				<tr>
					<th>Person Name</th>
					<td>{personname}</td>
				</tr>
				<tr>
					<th>Phone Num</th>
					<td>{phonenum}</td>
				</tr>
				<tr>
					<th>Instrument Type</th>
					<td>{instrument_type}</td>
				</tr>
				<tr>
					<th>Billing Instrument</th>
					<td>{billing_instrument}</td>
				</tr>
				<tr>
					<th>Currency</th>
					<td>{currency}</td>
				</tr>
				<tr>
					<th>Purpose</th>
					<td>{purpose}</td>
				</tr>
				<tr>
					<th colSpan={2}>
					<input
        className={"inputButton"}
        type="button"
        onClick={handleClick}
        value={"Click to Confirm"} />
					</th>
				</tr>
			</table>
			
		</div>
		
	);
};

export default UserPaymentSuccessPage;
