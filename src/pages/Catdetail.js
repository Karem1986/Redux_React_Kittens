import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Catdetail() {
    const { id } = useParams();
    console.log('test id', id) //logging id of product 

    const [catdetail, set_Catdetails] = useState({});

    useEffect(() => {
        async function fetchData() {
            const catbyid = await axios.get(
                `https://api.thecatapi.com/v1/images/${id}`

            );
            console.log('testing products', catbyid.data);
            set_Catdetails(catbyid.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>
                Cat's details  {catdetail.id} {catdetail.breeds}
            </h1>
            <div> <img src={catdetail.url} /></div>


        </div>
    );
}
