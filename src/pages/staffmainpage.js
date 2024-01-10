// pages/about.js

import React from "react";
import pic1 from './images/pic1.jpg'
const StaffMainPage = () => {
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
				<h3>Staff Main Page</h3>
			<h1>
				This is Agri Farming About Page.
			</h1>
			<h3>Contemporary agriculture</h3>
			<h3>Status</h3>
			<p>
			From the twentieth century onwards, intensive agriculture increased crop productivity. It substituted synthetic fertilizers and pesticides for labour, 
			but caused increased water pollution, and often involved farm subsidies. Soil degradation and diseases such as stem rust are major concerns globally;
			 approximately 40% of the world's agricultural land is seriously degraded. In recent years there has been a backlash against the environmental 
			 effects of conventional agriculture, resulting in the organic, regenerative, and sustainable agriculture movements.
			  One of the major forces behind this movement has been the European Union, which first certified organic food in 1991 and began 
			  reform of its Common Agricultural Policy (CAP) in 2005 to phase out commodity-linked farm subsidies,[100] also known as decoupling. 
			  The growth of organic farming has renewed research in alternative technologies such as integrated pest management, selective breeding,
			   and controlled-environment agriculture. There are concerns about the lower yield associated with organic farming and its impact 
			   on global food security. Recent mainstream technological developments include genetically modified food.
			</p>
			<p>
				<img src={pic1} width={500} height={500} style={{display:'inline-block',align:'left',float: 'left', margin:'30'}}/>
				<p>
				In general, women account for a greater share of agricultural employment at lower levels of economic development, as inadequate education, limited access to basic infrastructure and markets, high unpaid work burden and poor rural employment opportunities outside agriculture severely limit women’s opportunities for off-farm work
				<br></br>
				Women who work in agricultural production tend to do so under highly unfavourable conditions. They tend to be concentrated in the poorest countries, where alternative livelihoods are not available, and they maintain the intensity of their work in conditions of climate-induced weather shocks and in situations of conflict. Women are less likely to participate as entrepreneurs and independent farmers and are engaged in the production of less lucrative crops.
				<br></br>
				The gender gap in land productivity between female- and male managed farms of the same size is 24 percent. On average, women earn 18.4 percent less than men in wage employment in agriculture; this means that women receive 82 cents for every dollar earned by men. Progress has been slow in closing gaps in women’s access to irrigation and in ownership of livestock, too
				<br></br>
				Women in agriculture still have significantly less access than men to inputs, including improved seeds, fertilizers and mechanized equipment. On a positive note, the gender gap in access to mobile internet in low- and middle-income countries fell from 25 percent to 16 percent between 2017 and 2021, and the gender gap in access to bank accounts narrowed from 9 to 6 percentage points. Women are as likely as men to adopt new technologies when the necessary enabling factors are put in place and they have equal access to complementary resources
				</p>
			</p>
			</div>
		</div>
	);
};

export default StaffMainPage;
