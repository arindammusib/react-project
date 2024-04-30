import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../config/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    const[resInfo,setResinfo]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json);
        setResinfo(json.data);
    }
    if (resInfo===null) return <Shimmer/>
    const{name,costForTwoMessage,cuisines}=resInfo?.cards[2]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    //console.log(itemCards);
    return (
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((items)=><li key={items.card.info.id }>{items.card.info.name} {"Rs"}-{items.card.info.price/100||items.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
};
export default RestaurantMenu;