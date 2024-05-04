import { carousal_url } from "../config/constants";


const CarouselCard=(props)=>{
    const{cardData}=props;
    const{
       
        imageId



    }=cardData;
    
    return(
        <div className="carousal-card">
            <img src={carousal_url+imageId}/>
           
        </div>
    )
};
export default CarouselCard;