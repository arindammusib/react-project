import { useDispatch } from "react-redux";
import { CDN_URL } from "../config/constants";
import { addItem } from "../config/cartSlice";

const ItemLists=({items})=>{
    console.log(items);
    const dispatch=useDispatch();
    const cartHandler=(item)=>{
        dispatch(addItem(item));

    }
    
    return(
        <div>
           {
            items.map((item)=>(
                <div className="m-2 p-2 border-gray-300  text-left border-b-2 flex justify-between " key={item.card.info.id} id={item.card.info.id} >

                    <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-bold ">{item.card.info.name}</span>
                        <div>₹{item.card.info.defaultPrice/100||item.card.info.price/100 }</div>
                    </div>
                    <div className=" text-left text-green-700">⭐{item.card.info.ratings.aggregatedRating.rating
                }</div>
                    <p className=" text-xs ">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="bg-white mx-10 p-2 rounded-md shadow-lg border-green-200" onClick={()=>cartHandler(item)}>+Add</button>
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
                    </div>
                    </div>

                    
                    
            ))
           }

        </div>
    )
}
export default ItemLists;
