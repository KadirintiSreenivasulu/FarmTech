// pages/about.js
import axios from 'axios';
import React, { useEffect, useState } from "react";
import '../index.css';

const AdminViewNewProducts = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:5000/admingetnewproducts')
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
				Admin View Newly Introducing Products Page
			</h1></center>
			<p>
			{/*Message : 	
			 {data.map(row => <div>{row.FirstName}</div>)} */}
			{/* <table style={{width:'90%', left:'10px', position:'absolute'}}>
				<thead>
				<tr style={{width:'800px'}}>
					<th style={{width:'200px', textAlign:'center'}}>Product Id</th>
					<th style={{width:'200px'}}>Product Name</th>
					<th style={{width:'200px'}}>Product Type</th>
					<th style={{width:'200px'}}>Quantity</th>
					<th style={{width:'200px'}}>Price</th>
					<th style={{width:'200px'}}>Description</th>
					<th style={{width:'200px'}}>Image</th>
				</tr>
				</thead>
				<tbody>
				
			{data.map((row, index) => (
              <tr data-index={index}>  
                <td style={{textAlign:'center'}}>{row.id}</td>  
                <td style={{textAlign:'center'}}>{row.ProductName}</td>
                <td style={{textAlign:'center'}}>{row.ProductType}</td>
				<td style={{textAlign:'center'}}>{row.Quantity}</td>
				<td style={{textAlign:'center'}}>{row.Price}</td>
				<td style={{textAlign:'center'}}>{row.Description}</td>
				<td style={{textAlign:'center'}}>{row.File}</td>
              </tr>  
            ))}
				</tbody>
			</table> */}

<table style={{ width: '90%', left: '10px', position: 'absolute' }}>
						<thead>
							<tr style={{ width: '800px' }}>
								<th style={{ width: '200px', textAlign: 'center' }}>Product Id</th>
								<th style={{ width: '200px' }}>Product Name</th>
								<th style={{ width: '200px' }}>Product Type</th>
								<th style={{ width: '200px' }}>Quantity</th>
								<th style={{ width: '200px' }}>Price</th>
								<th style={{ width: '200px' }}>Description</th>
								<th style={{ width: '200px' }}>Image</th>
							</tr>
						</thead>
						<tbody>

							{/* {data.map((row, index) =>
								row.File === 'pic1.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic1} alt="Not FOund"
												width={100} height={100} />
										</td>
										
									</tr>
								) : null
							)}

							{data.map((row, index) =>
								row.File === 'pic2.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic2} alt="Not FOund"
												width={100} height={100} />
										</td>
										
									</tr>
								) : null
							)}

							{data.map((row, index) =>
								row.File === 'pic3.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic3} alt="Not FOund"
												width={100} height={100} />
										</td>
										
									</tr>
								) : null
							)}

							{data.map((row, index) =>
								row.File === 'pic4.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic4} alt="Not FOund"
												width={100} height={100} />
										</td>
										
									</tr>
								) : null
							)}

							{data.map((row, index) =>
								row.File === 'pic5.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic5} alt="Not FOund"
												width={100} height={100} />
										</td>
										
									</tr>
								) : null
							)}

							{data.map((row, index) =>
								row.File === 'pic6.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic6} alt="Not FOund"
												width={100} height={100} />
										</td>
										
									</tr>
								) : null
							)}

							{data.map((row, index) =>
								row.File === 'pic7.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic7} alt="Not FOund"
												width={100} height={100} />
										</td>
										
									</tr>
								) : null
							)}

{data.map((row, index) =>
								row.File === 'team1.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>											
											<img src='https://firebasestorage.googleapis.com/v0/b/phisingemail-f9a93.appspot.com/o/Pic1.jpg?alt=media&token=544811bd-9a31-47f1-9ecd-b199b5dcf676' alt="Not FOund"
												width={100} height={100} />
											<img  width={100} height={100} alt='Image Not Found'
											src={row.FilePath}/>
											<img src='https://storage.googleapis.com/phisingemail-f9a93.appspot.com/Pic9.png?Expires=1703791955&GoogleAccessId=firebase-adminsdk-ljq20%40phisingemail-f9a93.iam.gserviceaccount.com&Signature=SjTkzyoxjFjOcuzXF1XASjncHftFAWGR9faBZSHDnggp1fULTAezWY2BhhvWn0cYoUbadfsZlXshKniJK%2FzA3r6jHv9pDWvanX3BtIJ5cvgAdmlhiQZ8xsbhESgCMJXMlti%2BKOszkTqnnxF5LpxJsh8lgwI5w04G2zGGa%2F8l9JldVAQ%2BOf%2FiqgImPFxHWxGF95n2MkNq7pt94boryBD1vKj41yznP4zq6kat6I1A6VP5osG39gO27Ws5v4%2BDxbiQXMKCw0q8U0RFjcj4sbfimOzoQHx0Ew0z96mC1o9s0dHFGYOBV6f%2FTI3nPAEboLgz%2B%2BaIs5ZTSgyvW4g9YOymkg%3D%3D'
											width={100} height={100} alt='Image Not Found'/>
										</td>
										
									</tr>
								) : null
							)} */}


{data.map((row, index) => (
              <tr data-index={index}>  
                <td style={{textAlign:'center'}}>{row.id}</td>  
                <td style={{textAlign:'center'}}>{row.ProductName}</td>
                <td style={{textAlign:'center'}}>{row.ProductType}</td>
				<td style={{textAlign:'center'}}>{row.Quantity}</td>
				<td style={{textAlign:'center'}}>{row.Price}</td>
				<td style={{textAlign:'center'}}>{row.Description}</td>				
					<td style={{textAlign:'center'}}>
					<img src={row.ImageUrl}
											width={100} height={100} alt='Image Not Found'/>
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

export default AdminViewNewProducts;