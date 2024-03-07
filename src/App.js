import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';
export default function App(){
    function getRandomAnimal(){
        const Animal = ["cow","horse","gator","bird",'cat'];
        return Animal[Math.floor(Math.random()*Animal.length)];
    }
    let [animal,setAnimal] = useState([]);
    const handleClick = ()=>{
        setAnimal([...animal,getRandomAnimal()]) ;
    }
    const renderedAnimal = animal.map((animal,index)=>{
        return <AnimalShow Current = {animal} Key = {index}/>
    });
    return (
        <div className="app">
            <button onClick={handleClick}>
                Add Animal
            </button>
            <div className="animal-list">
                {renderedAnimal}
            </div>
        </div>
    );
}