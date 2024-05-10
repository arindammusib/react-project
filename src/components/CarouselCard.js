import { carousal_url } from "../config/constants";


const CarouselCard=(props)=>{
    const{cardData}=props;
    const{
       
        imageId,
        



    }=cardData;
    
    return(
       
        <img className=" w-28 lg:w-40" src={carousal_url+imageId}/>
        
        
        
    )
};
export default CarouselCard;