import { useState } from "react";
import { LOGO_URL } from "../config/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";
const Header=()=>{
    const onlineStatus=useOnlineStatus();
    let[btnName,setBtnName]=useState("Log In");
    return(
        <div className='header'>
            <div className='logo-container'>
              
                    <img 
                    className='logo'
                    src={LOGO_URL}/>

            </div>
                
                <div className='nav-items'>
                    <ul >
                        <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
                        <li><Link className="header-links" to='/'>Home</Link></li>
                        <li><Link className="header-links" to='/about'>About Us</Link></li>
                        <li><Link className="header-links" to='/contact'>Contact Us</Link></li>
                        <li><Link  className="header-links" to='/grocery'>Grocery</Link></li>
                        <li>Cart</li>
                        <button className="login"onClick={()=>{
                           btnName==="Log In"?setBtnName("Log Out"):setBtnName("Log In");
                        }}>{btnName}</button>
                    </ul>

                </div>


        </div>
    )
};
export default Header;