// pages/about.js
import axios from 'axios';
import React, { useEffect, useState } from "react";
import '../index.css';

const UserViewNewProducts = () => {
	const [data, setData] = useState([]);

	//console.log("process.env.PUBLIC_URL ", process.env.PUBLIC_URL)

	const handleClick = (id) => () => {
		console.log(id);
		let userid = sessionStorage.getItem('userid').toString()
		//useEffect(() => {
		axios.get('http://localhost:5000/userbuyproducts?id=' + id + "&userid=" + userid)
			.then(res => {
				//setData(res.data.data);
				console.log("Response : ", res.data)
				console.log("Id : ", id)
			})
		//}, []);
		alert('Product Buyed Success')
	};
	useEffect(() => {
		axios.get('http://localhost:5000/usergetnewproducts')
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
			<div style={{ margin: '25px' }}>
				<center>
					<h1>
						User View Coming Soon Products Page..
					</h1></center>
				<p>
					{/*Message : 	
			 {data.map(row => <div>{row.FirstName}</div>)} */}
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
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>

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
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
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
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
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
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
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
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
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
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
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
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
										</td>
									</tr>
								) : null
							)}

{data.map((row, index) =>
								row.File === 'pic8.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic8``} alt="Not FOund"
												width={100} height={100} />
										</td>
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
										</td>
									</tr>
								) : null
							)}

{data.map((row, index) =>
								row.File === 'pic9.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={pic9} alt="Not FOund"
												width={100} height={100} />
										</td>
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
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
											<img src={team1} alt="Not FOund"
												width={100} height={100} />
										</td>
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
										</td>
									</tr>
								) : null
							)}

{data.map((row, index) =>
								row.File === 'team2.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={team2} alt="Not FOund"
												width={100} height={100} />
										</td>
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
										</td>
									</tr>
								) : null
							)}

{data.map((row, index) =>
								row.File === 'team3.jpg' ? (
									<tr data-index={index}>
										<td style={{ textAlign: 'center' }}>{row.id}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductName}</td>
										<td style={{ textAlign: 'center' }}>{row.ProductType}</td>
										<td style={{ textAlign: 'center' }}>{row.Quantity}</td>
										<td style={{ textAlign: 'center' }}>{row.Price}</td>
										<td style={{ textAlign: 'center' }}>{row.Description}</td>
										<td style={{ textAlign: 'center' }}>
											<img src={team3} alt="Not FOund"
												width={100} height={100} />
										</td>
										<td style={{ textAlign: 'center' }}>
											<button onClick={handleClick(row.id)}>
												Buy Product
											</button>
										</td>
									</tr>
								) : null
							)} */}
							{/* {data.map((row, index) => row.File==='pic1.jpg'?(

              <tr data-index={index}>  
                <td style={{textAlign:'center'}}>{row.id}</td>  
                <td style={{textAlign:'center'}}>{row.ProductName}</td>
                <td style={{textAlign:'center'}}>{row.ProductType}</td>
				<td style={{textAlign:'center'}}>{row.Quantity}</td>
				<td style={{textAlign:'center'}}>{row.Price}</td>
				<td style={{textAlign:'center'}}>{row.Description}</td>				
					<td style={{textAlign:'center'}}>{row.File}</td>				
					{/* <td>
				<img src={require('./images/pic1.jpg')} alt="Not FOund" 
				width={100} height={100}/>
				</td> *
				<td style={{textAlign:'center'}}>
					<a href='http://localhost:5000/userbuyproducts?id={row.id}'>Buy Product</a>
				</td>				
              </tr>  
            )} */}


						</tbody>
					</table>
				</p>
			</div>
		</div>
	);
};

export default UserViewNewProducts;