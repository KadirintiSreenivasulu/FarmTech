import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from "react";
import '../loginpage.css';

const UserSearchProducts1 = (props) => {
    const [pid, setPid] = useState("")
    const [pname, setPname] = useState("")
    const [ptype, setPtype] = useState("")
    const [aqty, setAQty] = useState("")
    const [rqty, setRQty] = useState("0")
    const [total, setTotal] = useState("0")
    const [price, setPrice] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [imageurl, setImageUrl] = useState("")
    const [numofdays, setNumOfDays] = useState("0")    
    const [description, setDescription] = useState("")
    const [filename, setFileName] = useState("")
    const [pidError, setPidError] = useState("")
    const [pnameError, setPnameError] = useState("")
    const [ptypeError, setptypeError] = useState("")
    const [aqtyError, setAQtyError] = useState("")
    const [rqtyError, setRQtyError] = useState("")
    const [priceError, setPriceError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")
    const [returnDateError, setReturnDateError] = useState("")
    const [fileError, setFileError] = useState("")
    const [ndaysError, setndaysError] = useState("")
    const [totalError, settotalError] = useState("")
    const [file, setFile] = useState();
    const [data, setData] = useState('');
	

let p_id = sessionStorage.getItem('productid').toString()
let userid = sessionStorage.getItem('userid').toString()
	useEffect(() => {
		axios.get('http://localhost:5000/getproductbyid?id='+ p_id)
		  .then(res => {
			setData(res.data.data);
			console.log("Response : ", res.data, " Data : ", data)
            setPid(data.id)
            setAQty(data.Quantity)
            setPname(data.ProductName)
            setPtype(data.ProductType)
            setPrice(data.Price)
            setDescription(data.Description)
            setNumOfDays(0)
		  })
	  }, []);	

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log("File Name : ", e.target.files[0]['name'])
        setFileName(e.target.files[0]['name']);
    }
    const fetchProduct = (event) => {
        axios.get('http://localhost:5000/getproductbyid?id='+ p_id)
		  .then(res => {
			setData(res.data.data);
			console.log("Response : ", res.data, " Data : ", data)
            setPid(data.id)
            setAQty(data.Quantity)
            setPname(data.ProductName)
            setPtype(data.ProductType)
            setPrice(data.Price)
            setDescription(data.Description)
		  })
    }
    const checkProduct = (event) => {
        let a_qty = parseInt(aqty)
        let r_qty = parseInt(rqty)
        let p_numofdays= parseInt(numofdays)
        let p_price = parseInt(price)
        const current = new Date();
        console.log(r_qty + ", " + p_price + ", "+ numofdays)
        if(a_qty==0)
        {
            alert("Sorry Product is Out of stock pls check other products")
        }
        else if(r_qty>a_qty)
        {
            alert("Required Qty > Available Qty")
            setTotal('')
            //document.getElementById('rqty').value=0
            setRQty(0)            
        }
        else if(rqty==0)
        {
            alert("Enter Required Quantity")
        }
        else if(numofdays==0)
        {
            alert("Enter Number of Days Required")
        }
        else{
            //document.getElementById('total').value=(r_qty*price)
            current.setDate(current.getDate()+p_numofdays);
            setTotal((r_qty*p_price*p_numofdays).toString())
            setReturnDate(current.toDateString())
            let current_Date = format(current, 'MM/dd/yyyy, h:mm:ss a');
            setReturnDate(current_Date)
        }
    }

    function buy_NewProduct(body) {
        console.log("Body : ", JSON.stringify(body))
        axios.get('http://localhost:5000/userbuyproducts?id=' + p_id + "&userid=" + userid + 
        "&rqty="+rqty+"&numofdays="+numofdays)
			.then(res => {
				//setData(res.data.data);
				console.log("Response : ", res.data)
				console.log("Id : ", p_id)
			})
		//}, []);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        /*
        var response = insert_NewUser({fname, lname, uname, password, email, phnum})
        console.log("Response : Data Inserted Success", response)
        setFname('')
        setLname('')
        setUname('')
        setPassword('')
        setEmail('')
        setPhnum('')
        alert("Staff Inserted Success")        
        alert(
            `Selected file - ${
              this.fileInput.current.files[0].name
            }`
          );*/
        //alert(`Selected file - ${event.target.files[0].name}`);
        if (rqty.length == 0 || rqty == null)
            alert("Required Quantity is empty")
        else if (total.length == 0 || total == null)
            alert("Total Price is empty")
        else {
            //var response = insert_NewProduct({ pname, ptype, aqty, rqty, price, numofdays, total, description })
            //console.log("Response : Data Inserted Success", response)
            // alert(filename)
            // setPname('')
            // setPtype('')
            // setQty('')
            // setPrice('')
            // setFileName('')
            // setDescription('')            
		let quantity = parseInt(aqty)
		//useEffect(() => {
		if(quantity<=0){
			alert('Product is Out of Stock')
		}
		else{
        var response = buy_NewProduct({pid, pname, ptype, aqty, rqty, price, numofdays, total, description, userid})
		alert('Product Added to Cart')
		}        
        }
    }

    return <div className={"mainContainer"} style={{
        display: "flex",
        justifyContent: "centre",
        alignItems: "centre",
        height: "10vh", position: 'absolute', left: '400px', top: '300px'
    }}>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br />
        <h2>     <div>User Buy Products for Rent Page</div> </h2>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={fetchProduct}
                value={"Fetch Product"} />
        </div>
        <div className={"inputContainer"}>
            Product Id : 
            <input
                value={pid}
                placeholder="Enter your item name"
                onChange={ev => setPid(ev.target.value)}
                className={"inputBox"} readOnly/>
            <label className="errorLabel">{pidError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
        Product Name : 
            <input
                value={pname}
                placeholder="Enter your item name"
                onChange={ev => setPname(ev.target.value)}
                className={"inputBox"} readOnly/>
            <label className="errorLabel">{pnameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
        Product Type : 
            <input
                value={ptype}
                placeholder="Enter product type"
                onChange={ev => setPtype(ev.target.value)}
                className={"inputBox"} readOnly/>
            {/*<select value={ptype} className={"inputBox"}
                onChange={ev => setPtype(ev.target.value)}>
                <option>Two-Wheel-Tractors</option>
                <option>Compact-Tractors</option>
                <option>Two-Wheel Drive Tractors</option>
                <option>4 Wheel Drive Tractors</option>
                <option>Row Crop Tractors</option>
                <option>Track Tractors</option>
                <option>Industrial Tractors</option>
                <option>Combine Harvester</option>
                <option>UTV (Utility Terrain Vehicle)</option>
                <option>ATV (All-Terrain-Vehicle)</option>
                <option>Pickup Truck</option>
                <option>Balers</option>
                <option>Seeders</option>
                <option>Fertilizer Spreaders</option>
                <option>Sprayers</option>
                <option>Tree Shaker</option>
                <option>Autonomous Farm Vehicles</option>
            </select>*/}
            <label className="errorLabel">{ptypeError}</label>
        </div>
        <br />        
        <div className={"inputContainer"}>
            Description :
            <input type="text"
                value={description}
                placeholder="Enter your description here"
                onChange={ev => setDescription(ev.target.value)}
                className={"inputBox"} readOnly/>
            <label className="errorLabel">{descriptionError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            Available Quantity :
            <input
                value={aqty}
                placeholder="Enter available quantity here"
                onChange={ev => setAQty(ev.target.value)}
                className={"inputBox"} readOnly/>
            <label className="errorLabel">{aqtyError}</label>
        </div>
        <br />        
        <div className={"inputContainer"}>
            Price :
            <input type="text"
                value={price}
                id="price"
                placeholder="Enter your price"
                onChange={ev => setPrice(ev.target.value)}
                className={"inputBox"} readOnly/>
            <label className="errorLabel">{priceError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            Required Quantity :
            <input
                value={rqty}
                id="rqty"
                placeholder="Enter required quantity here"
                onChange={ev => setRQty(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{rqtyError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
           Number of Days Required : 
            <input
                value={numofdays}
                id="ndays"
                placeholder="Enter Number of days"                
                onChange={ev => setNumOfDays(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{ndaysError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
           Return Date
            <input
                value={returnDate}
                id="ndays"
                placeholder="Enter Number of days"                
                onChange={ev => setReturnDate(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{returnDateError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={checkProduct}
                value={"Check Product"} />
        </div>
        <br />
        <div className={"inputContainer"}>
        Total Price : 
            <input
                value={total}
                id="total"
                placeholder="Total amount here"
                onChange={ev => setTotal(parseInt(numofdays)*parseInt(price))}
                className={"inputBox"} readOnly/>
            <label className="errorLabel">{totalError}</label>
        </div>
       
        <br />
        {/* <div className={"inputContainer"}>
            <input  type="file"
                value={filename} //onChange={handleChange}
                id="file"
                placeholder="Select File"
                onChange={ev => setFileName(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{fileError}</label>
        </div> */}        

        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={handleSubmit}
                value={"Buy Product"} />
        </div>

    </div>
}

export default UserSearchProducts1