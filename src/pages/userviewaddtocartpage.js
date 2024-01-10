// pages/about.js
import axios from 'axios';
import React, { useEffect, useState } from "react";
import '../index.css';
const UserViewAddToCartPage = () => {
	const [data, setData] = useState([]);
	let userid =sessionStorage.getItem('userid').toString()

	const [total, setTotal] = useState('');
	const handleClick = (id,productid) => () => {
		console.log(id);		
		//useEffect(() => {
			axios.get('http://localhost:5000/userdeleteproducts?id='+id+"&userid="+userid+"&productid="+productid)
			  .then(res => {
				//setData(res.data.data);
				console.log("Response : ", res.data)
				console.log("Id : ", id)
			  })			  
		  //}, []);
		  window.location.reload(false);
	  };

	  const makePayment = (id) => () => {
		console.log(id);
		window.location.href="http://localhost/FarmTechPaymentSystem/index.php?amount="+id+"&userid="+userid;
	  };

	useEffect(() => {
		axios.get('http://localhost:5000/usergetaddtocart?userid='+userid)
		  .then(res => {
			setData(res.data.data);
			setTotal(res.data.total);
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
				User View Add To Cart Page
			</h1></center>
			<p>
			{/*Message : 	
			 {data.map(row => <div>{row.FirstName}</div>)} */}
			<table style={{width:'90%', left:'10px', position:'absolute'}}>
				<thead>
				<tr style={{width:'800px'}}>
					<th style={{width:'200px', textAlign:'center'}}>Product Id</th>
					<th style={{width:'200px'}}>User Name</th>
					<th style={{width:'200px'}}>Product Name</th>
					<th style={{width:'200px'}}>Product Type</th>
					<th style={{width:'200px'}}>Quantity</th>
					<th style={{width:'200px'}}>Price</th>
					<th style={{width:'200px'}}>NumOfDays</th>
					<th style={{width:'200px'}}>Total Price</th>
					<th style={{width:'200px'}}>Description</th>					
					<th style={{width:'200px'}}>Delete</th>					
				</tr>
				</thead>
				<tbody>
				
			{data.map((row, index) => (
              <tr data-index={index}>  
                <td style={{textAlign:'center'}}>{row.id}</td>  
				<td style={{textAlign:'center'}}>{row.FirstName} &nbsp; {row.LastName}</td>  
                <td style={{textAlign:'center'}}>{row.ProductName}</td>
                <td style={{textAlign:'center'}}>{row.ProductType}</td>
				<td style={{textAlign:'center'}}>{row.Quantity}</td>
				<td style={{textAlign:'center'}}>{row.Price}</td>
				<td style={{textAlign:'center'}}>{row.NumOfDays}</td>
				<td style={{textAlign:'center'}}>{row.TotalPrice}</td>
				<td style={{textAlign:'center'}}>{row.Description}</td>
				{/* <td style={{textAlign:'center'}}>{parseInt(row.Quantity)* parseInt(row.Price)}</td> */}
				<td style={{textAlign:'center'}}>
			<button onClick={handleClick(row.id,row.productid, row.id)}>
      Delete Product
    </button></td>
				{/* <td style={{textAlign:'center'}}>
					<a href='http://localhost:5000/userbuyproducts?id={row.id}'>Buy Product</a>
					</td> */}
              </tr>  
            ))}
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>
					Total : {total}
				</td>
			</tr>

			<tr>
				<th colSpan={10}>
				<button onClick={makePayment(total)}>
      Make Payment
    </button>
			
				</th>
			</tr>
				</tbody>
			</table>
			</p>



			</div>
		</div>
	);
};

export default UserViewAddToCartPage;