import ItemLists from "./ItemLists";
import { useState } from "react";

const RestaurantCategory=({data})=>{
    const[showItems,setShowItems]=useState(false)
    console.log(data);
    const clickHandler=()=>{
        setShowItems(!showItems);
    }
    return(
        <div>
        <div className="bg-gray-100 w-6/12 mx-auto my-3 p-3 shadow-lg">
            <div className=" flex justify-between cursor-pointer "onClick={clickHandler}>
            <span className="font-bold text-lg ">{data.title}({data.itemCards.length})</span>
            <span>⬇</span>
            </div>
            
           {showItems && <ItemLists items={data.itemCards}/>}
        </div>
        </div>
    );
}
export default RestaurantCategory;