// pages/about.js
//import React from "react";
/*
const NewUserPage = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh",
			}}
		>
			<h1>
				This is NewUserPage Page.
			</h1>
		</div>
	);
};

export default NewUserPage;
*/
import React, { useState } from "react";
import '../loginpage.css';

// const UserUpdateDetails = (props) => {
// 	const [nitrogen, setNitrogen] = useState("10")
// 	const [phosphorus, setPhosphorus] = useState("10")	
// 	const [pottasium, setPottasium] = useState("10")
//     const [temperature, setTemperature] = useState("10")
//     const [humidity, setHumidity] = useState("10")
// 	const [ph, setPh] = useState("10")
//     const [rainfall, setRainfall] = useState("10")
//     const [waterlevel, setWaterLevel] = useState("10")
    
// 	const [nitrogenError, setNitrogenError] = useState("")
// 	const [phosphorusError, setPhosphorusError] = useState("")
// 	const [pottasiumError, setPottasiumError] = useState("")
// 	const [temperatureError, setTemperatureError] = useState("")
//     const [humidityError, setHumidityError] = useState("")
//     const [phError, setPhError] = useState("")
//     const [rainfallError, setRainfallError] = useState("")
//     const [waterlevelError, setWaterlevelError] = useState("")
// function user_UpdateDetails(body)
// {
//         return fetch('http://localhost:5000/userupdatedetails',{
//             'method':'POST',
//              headers : {
//             'Content-Type':'application/json'
//       },
//       body:JSON.stringify(body)
//     })
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

//       const handleSubmit=(event)=>{ 
//         event.preventDefault()        
//         var response = user_UpdateDetails({nitrogen,phosphorus,pottasium,temperature,humidity,ph,rainfall,waterlevel})
//         console.log("Response : Data Inserted Success", response)
//         setHumidity('')
//         setNitrogen('')
//         setPh('')
//         setPhosphorus('')
//         setPottasium('')
//         setRainfall('')
//         alert("User Updated Details Success")
//       }

//     return 
    // <div className={"mainContainer"}>        
    //     <div className={"titleContainer"}>
    //         <br /><br />		
    //         <div>User Update Details Page</div>            
    //     </div>        
	// 	<div className={"inputContainer"}>
    //         <input
    //             value={airtemp}
    //             placeholder="Air Temperature"
    //             onChange={ev => setAirtemp(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{airtempError}</label>
    //     </div>
    //     <br />
    //     <div className={"inputContainer"}>
    //         <input
    //             value={nitrogen}
    //             placeholder="Nitrogen"
    //             onChange={ev => setNitrogen(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{nitrogenError}</label>
    //     </div>
    //     <br />
    //     <div className={"inputContainer"}>
    //         <input
    //             value={phosphorus}
    //             placeholder="Phosphorus"
    //             onChange={ev => setPhosphorus(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{phosphorusError}</label>
    //     </div>
    //     <br />
	// 	<div className={"inputContainer"}>
    //         <input type="text"
    //             value={pottasium}
    //             placeholder="Pottasium"
    //             onChange={ev => setPottasium(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{pottasiumError}</label>
    //     </div>
    //     <br />
	// 	<div className={"inputContainer"}>
    //         <input
    //             value={temperature}
    //             placeholder="Temperature"
    //             onChange={ev => setTemperature(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{temperatureError}</label>
    //     </div>
    //     <br />
	// 	<div className={"inputContainer"}>
    //         <input
    //             value={humidity}
    //             placeholder="Humidity"
    //             onChange={ev => setHumidity(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{humidityError}</label>
    //     </div>
    //     <br />
    //     <div className={"inputContainer"}>
    //         <input
    //             value={ph}
    //             placeholder="Ph"
    //             onChange={ev => setPh(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{phError}</label>
    //     </div>
    //     <br />
    //     <div className={"inputContainer"}>
    //         <input
    //             value={rainfall}
    //             placeholder="Rainfall"
    //             onChange={ev => setRainfall(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{rainfallError}</label>
    //     </div>
    //     <br />
    //     <div className={"inputContainer"}>
    //         <input
    //             value={waterlevel}
    //             placeholder="Water Level"
    //             onChange={ev => setWaterLevel(ev.target.value)}
    //             className={"inputBox"} />
    //         <label className="errorLabel">{waterlevelError}</label>
    //     </div>
    //     <br />
    //     <div className={"inputContainer"}>
    //         <input
    //             className={"inputButton"}
    //             type="button"
    //             onClick={handleSubmit}
    //             value={"New User"} />
    //     </div>
    // </div>
//}
const UserUpdateDetails = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh",
			}}
		>
			<h1>Welcome to User Select Products</h1>
		</div>
	);
};

export default UserUpdateDetails