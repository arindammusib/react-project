import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
           
            <h3>oops! something went wrong</h3>
            <h4>{err.status}</h4>
            <h4>{err.statusText}</h4>

        </div>
    )
}
export default Error;