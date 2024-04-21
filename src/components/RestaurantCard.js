import { CDN_URL } from "../config/constants";
import { CDN_URL } from "../config/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    }=resData?.data;
    
        return(
        <div className='res-card' >
            <img  className='res-logo'src={CDN_URL+cloudinaryImageId} alt='res-logo'/>
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{avgRating}Stars</h3>
            <h3>{deliveryTime} minutes</h3>
            <h3>{costForTwo/100} rupees</h3>

        </div>
    )
};
export default RestaurantCard;