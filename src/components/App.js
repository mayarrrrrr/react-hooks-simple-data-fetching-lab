// create your App component here
import React, { useState } from "react";
import { useEffect } from "react";

function App(){
    const [image, setImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            setImage(data.message)
            setIsLoaded(true)
            console.log(data)
        })
        
    },[])

    if(!isLoaded) return <p>Loading...</p>

   return <img src={image} alt="A Random Dog"/>
}

export default App;