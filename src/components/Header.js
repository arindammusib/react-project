import { useContext, useState } from "react";
import { LOGO_URL } from "../config/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";
import UserContext from "../config/userContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const onlineStatus=useOnlineStatus();
    let[btnName,setBtnName]=useState("Log In");
    const {loginInfo}=useContext(UserContext);
    //subscribing to the store
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return(
        <div className="flex justify-between bg-orange-300 md:bg-orange-300  lg:bg-green-100 shadow-md ... sticky top-0 sm:p-1">
            <div className='logo-container'>
              
                    <img 
                    className=' w-34 lg:w-28'
                    src={LOGO_URL}/>

            </div>
                
                <div className='flex items-center'>
                    <ul className="flex m-3 p-3 sm:m-1 sm:p-1" >
                        <li className="p-4" >Online Status:{onlineStatus?"✅":"🔴"}</li>
                        <li className="p-4"><Link to='/'>Home</Link></li>
                        <li className="p-4"><Link to='/about'>About Us</Link></li>
                        <li className="p-4"><Link to='/contact'>Contact Us</Link></li>
                        <li className="p-4 font-bold ">
                            <Link to='/cart'>Cart(items{cartItems.length})🛒</Link>
                            </li>
                        <button className="login"onClick={()=>{
                           btnName==="Log In"?setBtnName("Log Out"):setBtnName("Log In");
                        }}>{btnName}</button>
                        <li className="p-4 font-bold">{loginInfo}</li>
                    </ul>

                </div>


        </div>
    )
};
export default Header;