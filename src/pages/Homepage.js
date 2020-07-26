// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import { getKittens } from "../store/feed/action"
import { useDispatch, useSelector } from "react-redux"
import { selectKittens } from "../store/feed/selector"
import { Link } from 'react-router-dom';

export default function HomePage() {
    //set up useState 
    const [kittens, set_Kittens] = useState([])
    console.log('what is kittens', kittens)
    //Transfer to Redux 
    const dispatch = useDispatch();
    const displayKittens = useSelector(selectKittens)
    //Filter by width so only pics less than 600 px are shown
    const filteringKittens = displayKittens.filter(item => {
        return item.width < 550
    })
    console.log('testing filter', filteringKittens)

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
            <h2>Choose any picture of a kitten: </h2>
            {filteringKittens.map((item, index) => {
                return (
                    <div key={index}>
                        <h3>Meowwwww</h3>
                        <Link to={`/cat/${item.id}`}><img src={item.url} /></Link>

                    </div>
                )
            })}

            <Link to={`/id/${kittens.breeds}`}> <img src={kittens.url} /></Link>

        </div>

    )
}