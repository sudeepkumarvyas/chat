import React from "react";

const MainForm =()=>{
    return(
        <div className="center">
            <h2 className="heading">Welcome to Chatclub</h2>
            <input type="text" className="ip" placeholder="Enter name"></input>
            <select typeof="Select Room" className="ip" placeholder="Select Room">
                <option>Select Room</option>
                <option>Gaming</option>
                <option>Coding</option>
                <option>Social Media</option>
            </select>
            <button type="Submit" className="btn1">Submit</button>
        </div>
        
    )
}



export default MainForm