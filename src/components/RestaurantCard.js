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
        <div className='res-card' >
            <img  className='res-logo'src={CDN_URL+cloudinaryImageId} alt='res-logo'/>
            
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>⭐{avgRating}Stars {sla.slaString}</h4>
            <h4>{costForTwo} rupees</h4>
            <h4>{areaName} </h4>

        </div>
    )
};
export default RestaurantCard;