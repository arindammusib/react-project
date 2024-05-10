import { CDN_URL } from "../config/constants";
//import { CDN_URL } from "../config/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
    const{
        cloudinaryImageId,
        name,
        avgRating,sla,
        cuisines,
        costForTwo,
        areaName

    }=resData?.info;
    
        return(
            <div className="flex ">
        <div className='res-card m-4 p-4 w-[240px] bg-gray-100 rounded overflow-hidden hover:bg-gray-300 shadow-lg ' >
            <img  className=' w-full h-36 object-cover rounded-md 'src={CDN_URL+cloudinaryImageId} alt='res-logo'/>
            
            <h3 className="font-bold py-4">{name}</h3>
            <h4 className="truncate">{cuisines.join(", ")}</h4>
            <h4>⭐{avgRating}Stars {sla.slaString}</h4>
            <h4>{costForTwo} rupees</h4>
            <h4>{areaName} </h4>

        </div>
        </div>
    )
};
export default RestaurantCard;