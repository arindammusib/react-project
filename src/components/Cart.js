import { useDispatch, useSelector } from "react-redux";
 import ItemLists from "./ItemLists";
import { clearCart } from "../config/cartSlice";
import { Link } from "react-router-dom";
import Body from "./Body";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const clearCartHandler=()=>{
            dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart Items</h1>
            <button className="font-bold rounded-lg bg-black text-white m-2 p-2" onClick={clearCartHandler}>Clear Cart</button>
            {cartItems.length===0 && <h1> Your Cart is empty.Add items to the cart!</h1>}
            
            <div className="m-2 p-2 border-gray-300  text-left border-b-2 flex justify-between w-6/12 m-auto rounded-md shadow-lg" >
            
                <ItemLists items={cartItems}/>
            </div>
        </div>
    )
};
export default Cart;