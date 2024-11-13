import React, { useEffect } from "react";
import RestCard from "./RestCard";
import resList from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ShimmerContainer from "./ShimmerContainer";

 const Body = () => {

    const [listRest,setListRest]=useState([]);
    const [search,setSearch]=useState("");
    const [filtered,setFiltered]=useState([]);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.649263099434688&lng=76.79702424973758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListRest(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFiltered(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    }

    console.log("rendered again")


    useEffect(()=>{
        fetchData();
    },[])

    // if(listRest.length===0){
    //     return <ShimmerContainer/>
    // }


    return (listRest.length===0)? (<ShimmerContainer/>) : (
        <div className="Body">
            <div className="Search">

                <input className="search-bar"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)
                }}
                placeholder="Enter your food or restuarant" >
                </input>


                <button
                onClick={()=>{
                    const filteredList= listRest.filter((e)=>e.info.name.toLowerCase().includes(search.toLowerCase()));
                    setFiltered(filteredList);
                }}
                >Search</button>

            </div>

            <div className="btns"> 
                <button 
                className="btn-control" 
                onClick={()=>{
                    const filteredList=listRest.filter(
                        (e)=>e.info.avgRating>4
                    )
                    setFiltered(filteredList)
                }}>
                    Top rated Restaurant
                    </button>
                <button 
                className="btn-control" 
                onClick={()=>{
                    const filteredList=listRest.filter(
                        (e)=>(e.info.avgRating<4 && e.info.avgRating>3
                      ))
                      setFiltered(filteredList)
                }}>
                    Average Restaurant
                    </button>
                <button 
                className="btn-control"
                onClick={()=>{
                    const filteredList=listRest.filter((e)=>
                        e.info.avgRating<3
                    )
                    setFiltered(filteredList)
                }}
                >Worst Restaurant</button>
                <button className="btn-control" 
                onClick={()=>{
                 const filteredList=listRest.filter((e)=>
                    e.info.sla.deliveryTime<27 
                 )
                 setFiltered(filteredList)
                }}
                >Closest Restaurant</button>
                <button className="btn-control"
                onClick={()=>{
                    setFiltered(listRest);
                }}
                >
                    All Restaurants
                </button>
            </div>
            <div className="rest-container">
                { 
                filtered.map((info)=> (<RestCard key={info.info.id} resData={info}/>))
}
                {/* <RestCard resData={resList[0]}/>
                <RestCard resData={resList[1]}/>
                <RestCard resData={resList[2]}/>
                 <RestCard resData={resList[3]}/>
                 <RestCard resData={resList[4]}/>
                 <RestCard resData={resList[5]}/>
                 <RestCard resData={resList[6]}/>
                 <RestCard resData={resList[7]}/>
                <RestCard resData={resList[8]}/>
                <RestCard resData={resList[9]}/>
                <RestCard resData={resList[10]}/>
                <RestCard resData={resList[11]}/>
                <RestCard resData={resList[12]}/>
                <RestCard resData={resList[13]}/>
                <RestCard resData={resList[14]}/>
                <RestCard resData={resList[15]}/>
                <RestCard resData={resList[16]}/>
                <RestCard resData={resList[17]}/>
                <RestCard resData={resList[18]}/>
                <RestCard resData={resList[19]}/>
                 */}


            </div>
        </div>
    )
}

export default Body;