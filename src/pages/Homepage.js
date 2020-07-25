// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import { getKittens } from "../store/feed/action"
import { useDispatch, useSelector } from "react-redux"
import { selectKittens } from "../store/feed/selector"

export default function HomePage() {
    //set up useState 
    const [kittens, set_Kittens] = useState([])
    console.log('what is kittens', kittens)
    //Transfer to Redux 
    const dispatch = useDispatch();
    const displayKittens = useSelector(selectKittens)


    // useEffect(() => {
    //     async function getKittens() {
    //         const data = await axios.get("https://api.thecatapi.com/v1/images/search")
    //         console.log('testing data', data)
    //         set_Kittens(data.data) //Always add the second argument which is the name of the 
    //         //array in the console.log 
    //     }
    //     getKittens()
    // }, [])


    useEffect(() => {
        dispatch(getKittens)
    }, []);


    return (
        <div>
            <h1>Kittens homepage!</h1>
            {displayKittens.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.id} </p>
                        <div> <img src={item.url} /></div>

                    </div>
                )
            })}

        </div>

    )
}