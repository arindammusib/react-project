import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"am",
                bio:"null",
                location:"dummy",
                url:"https://dummy"

            }
           
        }
    }
    async componentDidMount(){
        //here we make api calls
        const data=await fetch("https://api.github.com/users/arindammusib");
        const json=await data.json();
        //console.log(json);
        this.setState({
            userInfo:json,
        })
    }

    render(){
        
        const{name,location,avatar_url,bio,url}=this.state.userInfo;
        return(
            <div>
                <img className="github_img rounded-lg w-56 h-56"src={avatar_url}/>
                <h3 className="font-bold text-amber-900">{bio}</h3>
                <h3 className="font-bold">Name:{name}</h3>
                <h3 className="font-bold">Address:{location}</h3>
                <p className="font-bold">Visit here: <Link className="uri_link">{url}</Link></p>
               
                
            </div>
        )
    }
};
export default UserClass;