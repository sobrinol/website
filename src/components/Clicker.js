import React from "react";
import "./ClickerStyle.css";

var visitCount = localStorage.getItem("page_view");

if(visitCount){
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
}else{
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}


const Clicker = () =>{
    return(
        <div class = "clicker">
            <div class = "container">{visitCount}</div>
        </div>
        
    );
}

export default Clicker;