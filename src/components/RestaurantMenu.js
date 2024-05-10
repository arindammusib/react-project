import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../config/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    if (resInfo===null) return <Shimmer/>
    const{name,costForTwoMessage,cuisines}=resInfo?.cards[2]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=>cat.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold my-6 ">{name}</h1>
            <p className="text-xl font-bold text-orange-500">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            
            
                
        {/* {category} */}
        {
            categories.map((category)=>(<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>))
        }
                
            
            
        </div>
    )
};
export default RestaurantMenu;