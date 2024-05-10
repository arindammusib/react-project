import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import CarouselCard from "./CarouselCard";
import useOnlineStatus from "../config/useOnlineStatus";
const Body=()=>{
    const[listOfRestaurants,setListOfRestaurants]=useState([]);
    const[filteredrestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setsearchText]=useState("");
    const[carousals,setCarousal]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5204443&lng=87.3119227&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
       // console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //-->optional chaining
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCarousal(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
       
    }
   
    
    const OnlineStatus=useOnlineStatus();
    if(OnlineStatus==false) return <h1>Looks Like Your Internet connection Is Lost⚠️.Please Check your Internet Connection</h1>

    return listOfRestaurants.length===0?<Shimmer/>:(
        <div className='border-y-8 '>
            <div className='filter flex flex-wrap justify-center m-0 md:w-4/5 w-full  gap-6'>
                <div className="m-4 p-4 ">
                    <input className="border border-solid border-black cursor-text" type="text" placeholder="        search here" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                        

                    }}/>
                    <button className="px-2 py-1 m-2 sm:py-2 bg-green-200 rounded-md " onClick={()=>{
                        const fileteredList=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(fileteredList);
                    }}>Search</button>

                </div>
                <div className="px-2 py-1 m-2 flex items-center">
                <button className="filter-btn sm:px-2 px-4 py-2 bg-orange-200 rounded-lg sm:rounded-sm " onClick={()=>{
                const filteredList=filteredrestaurant.filter((res)=>res.info.avgRating>4.3);
                setFilteredRestaurant(filteredList);
             }
                }>Top Rated Restaurnats</button>
                </div>
            
                 

            </div>
            
            
            <div className="my-1 py-1 flex   overflow-x-auto ">
                
                {   
                    carousals.map((card)=>(
                        <CarouselCard key={card.id} cardData={card}/>
                    ))
                }

            </div>
          
            
            <div className='res-container flex flex-wrap items-center mx-12'>
                {
                    filteredrestaurant.map((restaurant)=>(
                       <Link className="links" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} ><RestaurantCard  resData={restaurant}/></Link> 
                       
                    ))
                    
                }
                
            </div>

        </div>
    )
};
export default Body;
