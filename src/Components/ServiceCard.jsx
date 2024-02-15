import { useContext } from "react";
import {getCartData, saveCartData } from "../localStorage";
import { AuthContext } from "../Provider/AuthProvider";

const ServiceCard = ({ service }) => {
    const {user}=useContext(AuthContext);
    const { title, img, price, description,service_id} = service
    const handleCart=(id)=>{
        console.log({service});        
        saveCartData(service,id,user?.email);
        const cartitems=getCartData(user?.email);
        console.log({cartitems});  
           
    }

    return (
        <div className="card  bg-base-100 shadow-xl">
            <h2 className="text-center text-3xl font-bold p-5 text-white rounded-lg bg-green-500">{title}</h2>
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body px-10">                
                <p className="text-left text-2xl font-semibold">Price: {price} $</p>
                <p className="text-justify">{description.slice(0,150)}</p>
                <div className="card-actions flex justify-center">
                   {
                    user ? <button onClick={()=>handleCart(service_id)} className="btn btn-warning">Buy Now</button>:undefined
                   }
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;