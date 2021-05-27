import {useState} from 'react';

const CarComponent = () =>{

    const[brand,setBrand] =useState("");
    const[model,setModel] =useState("");
    const[colour,setColour] =useState("");
    const[year,setYear] =useState(0);

    const printValues=(e)=>{
        e.preventDefault();
        
        const dataToSend = JSON.stringify({brand,model,colour,year});
        console.log( dataToSend);
        setBrand("");
        setModel("");
        setColour("");
        setYear("");
    }

    return(
        <>
            <form onSubmit= {printValues}>
                <label> Brand</label>
                <input 
                type="text"
                name="brand"
                value={brand}
                onChange={(e)=>setBrand(e.target.value)}
                />

                <label> Model</label>
                <input 
                 type="text"
                name="model"
                value={model}
                onChange={(e)=>setModel(e.target.value)}
                />

                <label> Colour</label>
                <input 
                 type="text"
                name="colour"
                value={colour}
                onChange={(e)=>setColour(e.target.value)}
                />

                <label> Year</label>
                <input 
                 type="number"
                name="year"
                value={year}
                onChange={(e)=>setYear(e.target.value)}
                />

            <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default CarComponent;

