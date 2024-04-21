import RestaurantCard from "./RestaurantCard";
import resList from "../config/mockData";
import { useEffect, useState } from "react";
const Body=()=>{
    const[listOfRestaurants,setListOfRestaurants]=useState(resList);
    useEffect(()=>{

    },[]);
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5204443&lng=87.3119227&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
    }
    fetchData();
    


    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>res.data.avgRating>4);
                setListOfRestaurants(filteredList);
             }
                }>Top Rated Restaurnats</button>
            
                 

            </div>
            <div className='res-container'>
                {
                    listOfRestaurants.map((restaurant)=>(
                        <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
                
            </div>

        </div>
    )
};
export default Body;
