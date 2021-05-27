import Child from "./Child";


const Parent = ()=>{

    return(
        <div>
        <h1> I am the parent</h1>
        {/* key:value pair */}
        <Child 
            name="Vinesh" 
            age={6} 
            origin="Kenya"
            carsss="Audi "
        />
        </div>
    )

}

export default Parent;
