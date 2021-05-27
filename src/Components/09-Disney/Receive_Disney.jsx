import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

import Card_body from './Card_body';
import { Pagination } from 'reactstrap';

const Receive_Disney = (props) => {

    const [error, setError] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [url, setUrl] = useState("http://api.disneyapi.dev/characters");
    const page2=()=>{setUrl("https://api.disneyapi.dev/characters?page=2");
    setRefresh(c=>!c);
};



    useEffect(() => {
        axios
            .get(url)
            .then((res) => res)
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data.data);
                // setRefresh(c=>!c);
                // console.log(result);

            },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    // setRefresh(c => !c);
                }
            );
    }, [refresh]);

    // console.log("no this one", items);

    return (


        <>
            <div>
                {
                    items.map((item, index) => (
                        <Card_body key={index} {...item} />
                    ))
                }
            </div>
            <button onClick={page2}>page 2</button>
            
        </>
    )
}

export default Receive_Disney;