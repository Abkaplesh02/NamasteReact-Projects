import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [log,setLog]=useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home </li>
                    <li>About</li>
                    <li>Desc</li>
                    <li>Cart</li>
                    <button className="login-logout" onClick={()=>{
                        if(log==="login" ? setLog("logout") : setLog("login"));
                    }}>
                        {log}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;