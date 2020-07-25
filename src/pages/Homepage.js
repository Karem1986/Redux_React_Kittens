// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";


export default function HomePage() {
    //set up useState 
    const [kittens, set_Kittens] = useState([])
    console.log('what is kittens', kittens)

    useEffect(() => {
        async function getKittens() {
            const data = await axios.get("https://api.thecatapi.com/v1/images/search")
            console.log('testing data', data)
            set_Kittens(data.data) //Always add the second argument which is the name of the 
            //array in the console.log 
        }
        getKittens()
    }, [])

    return (
        <div>
            <h1>Kittens homepage!</h1>
            {kittens.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.id} {} <img src={item.url} /></p>
                    </div>
                )
            })}

        </div>

    )
}