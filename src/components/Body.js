import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body=()=>{
    const[listOfRestaurants,setListOfRestaurants]=useState([]);
    const[filteredrestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setsearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5204443&lng=87.3119227&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //-->optional chaining
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
    


    return listOfRestaurants.length===0?<Shimmer/>:(
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" placeholder="search here" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                        

                    }}/>
                    <button className="search-btn" onClick={()=>{
                        const fileteredList=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(fileteredList);
                    }}>Search</button>

                </div>
                <button className="filter-btn" onClick={()=>{
                const filteredList=filteredrestaurant.filter((res)=>res.info.avgRating>4.2);
                setFilteredRestaurant(filteredList);
             }
                }>Top Rated Restaurnats</button>
            
                 

            </div>
            <div className='res-container'>
                {
                    filteredrestaurant.map((restaurant)=>(
                       <Link className="links" key={key=restaurant.info.id} to={"/restaurants/"+restaurant.info.id} ><RestaurantCard  resData={restaurant}/></Link> 
                    ))
                }
                
            </div>

        </div>
    )
};
export default Body;
