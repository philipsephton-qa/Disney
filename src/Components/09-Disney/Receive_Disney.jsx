import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

import Card_body from './Card_body';
import Next_Page from "./Next_Page";
import { Pagination, Container, Row } from 'reactstrap';

const Receive_Disney = (props) => {

    const [error, setError] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [url, setUrl] = useState("http://api.disneyapi.dev/characters");

    // const page1=()=>{setUrl("https://api.disneyapi.dev/characters");
    // setRefresh(c=>!c)};
    // const page2=()=>{setUrl("https://api.disneyapi.dev/characters?page=2");
    // setRefresh(c=>!c)};
    // const page3=()=>{setUrl("https://api.disneyapi.dev/characters?page=3");
    // setRefresh(c=>!c)};
    // const page4=()=>{setUrl("https://api.disneyapi.dev/characters?page=4");
    // setRefresh(c=>!c)};
    // const page5=()=>{setUrl("https://api.disneyapi.dev/characters?page=5");
    // setRefresh(c=>!c)};




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
                <Container>
                <Row>
                    {
                        items.map((item, index) => (
                            <Card_body key={index} {...item} />
                        ))
                    }
                </Row>
                </Container>
            </div>
            <Next_Page setUrl={setUrl} setRefresh={setRefresh} />
            {/* // setUrl={setUrl} setRefresh={setRefresh}/>  */}
            {/* <button onClick={page1}>page 1</button>
            <button onClick={page2}>page 2</button>
            <button onClick={page3}>page 3</button>
            <button onClick={page4}>page 4</button>
            <button onClick={page5}>page 5</button> */}


        </>
    )
}

export default Receive_Disney;