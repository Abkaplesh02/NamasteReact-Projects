import React from "react";
import { CDN_URL } from "../utils/constants";

const RestCard = (props) =>{
    const {resData}= props;
    const { 
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId 
    } = resData?.info;
    return (
        <div className="restCard">
           
                <img
                className="img"
                src={CDN_URL + cloudinaryImageId}
                ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes Home Delivery </h4>
        </div>
    )
}

export default RestCard;