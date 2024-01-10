import React, { useState } from "react";
import '../loginpage.css';

const NewlyItemsPage = (props) => {
    const [pname, setPname] = useState("Tractor")
    const [ptype, setPtype] = useState("Two-Wheel-Tractors")
    const [qty, setQty] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [filename, setFileName] = useState("")
    const [pnameError, setPnameError] = useState("")
    const [ptypeError, setptypeError] = useState("")
    const [qtyError, setQtyError] = useState("")
    const [priceError, setPriceError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")
    const [fileError, setFileError] = useState("")
    const [file, setFile] = useState();

    function insert_NewProduct(body) {
        return fetch('http://localhost:5000/addnewlaunchingproduct', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    //function handleChange(event) {
    //console.log(`Selected file - ${event.target.files[0].name}`);
    //alert(`Selected file - ${event.target.files[0].name}`);
    //setFile(`${event.target.files[0].name}`);
    //}

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log("File Name : ", e.target.files[0]['name'])
        setFileName(e.target.files[0]['name']);
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
        if (pname.length == 0 || pname == null)
            alert("Product Name is empty")
        else if (ptype.length == 0 || ptype == null)
            alert("Product Type is Empty");
        else if (qty.length == 0 || qty == null)
            alert("Quantity is empty")
        else if (price.length == 0 || price == null)
            alert("Price is empty")
        else if (filename.length == 0 || filename == null)
            alert("FileName is empty")
        else if (description.length == 0 || description == null)
            alert("Description is empty")
        else {
            var response = insert_NewProduct({ pname, ptype, qty, price, filename, description })
            console.log("Response : Data Inserted Success", response)
            setPname('')
            setPtype('')
            setQty('')
            setPrice('')
            setFileName('')
            setDescription('')
            alert("Product Inserted Success")
        }
    }

    return <div className={"mainContainer"} style={{
        display: "flex",
        justifyContent: "centre",
        alignItems: "centre",
        height: "100vh", position: 'absolute', left: '400px'
    }}>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <h1>
            <div>New Products Launching</div>
        </h1>
        <br />
        <div className={"inputContainer"}>
            <input
                value={pname}
                placeholder="Enter your item name"
                onChange={ev => setPname(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{pnameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            {/* <input
                value={itype}
                placeholder="Enter your last here"
                onChange={ev => setLname(ev.target.value)}
                className={"inputBox"} /> */}
            <select value={ptype} className={"inputBox"}
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
            </select>
            <label className="errorLabel">{ptypeError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={qty}
                placeholder="Enter quantity here"
                onChange={ev => setQty(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{qtyError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input type="text"
                value={price}
                placeholder="Enter your price"
                onChange={ev => setPrice(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{priceError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input type="text"
                value={description}
                placeholder="Enter your description here"
                onChange={ev => setDescription(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{descriptionError}</label>
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
        <br />

        <div className={"inputContainer"}>
            <input type="file" onChange={handleChange} className={"inputBox"}
                placeholder="Select File" />
            <img src={file} width={200} height={200} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button" style={{ width: '300px', }}
                onClick={handleSubmit}
                value={"New Launching Product"} />
        </div>

    </div>
}
export default NewlyItemsPage