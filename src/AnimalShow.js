import React, { useState } from "react";
import bird from './images/bird.svg'
import cat from './images/cat.svg'
import cow from './images/cow.svg'
import horse from './images/horse.svg'
import dog from './images/dog.svg'
import gator from './images/gator.svg'
import heart from './images/heart.svg'

const svgMap = {
    bird,
    cat,
    cow,
    horse,
    dog,gator,
    heart
}
export default function AnimalShow({Current}){
    const [clicks,setClick] = useState(0);
    const handleClick = ()=>{
        setClick(clicks+1);
    }
    return (<div onClick={handleClick}>
       <img src = {svgMap[Current]} alt = {Current}/>
       <img 
       src = {svgMap["heart"]} 
       alt="heart" 
       style = {{width:10+10*clicks}}
       />
    </div>);
}