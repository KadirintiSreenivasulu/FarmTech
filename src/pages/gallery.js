// pages/team.js
import React from "react"
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'
import pic5 from './images/pic5.jpg'
import pic6 from './images/pic6.jpg'
import pic7 from './images/pic7.jpg'
import pic8 from './images/pic8.jpg'
import pic9 from './images/pic9.jpg'

const Gallery = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh",
			}}
		>
			
			<div style={{margin:'40px'}}>
			<center>
			<h1>Gallery Page</h1>
			</center>
				<table cellSpacing={20}>
					<tr>
						<td>
						<img src={pic1} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
						<td>
						<img src={pic2} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
						<td>
						<img src={pic3} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
					</tr>
					<tr>
						<td>
						<img src={pic4} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
						<td>
						<img src={pic5} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
						<td>
						<img src={pic6} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
					</tr>
					<tr>
						<td>
						<img src={pic7} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
						<td>
						<img src={pic8} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
						<td>
						<img src={pic9} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}} alt='Alt Image'/>
						</td>
					</tr>					

					
						

{/* <img src={require('./images/team1.jpg')} alt="horse" /> */}
						


				</table>
			</div>
		</div>
	);
};

export default Gallery;
