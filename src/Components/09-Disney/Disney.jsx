
import FilterBar from "./FilterBar"
import Receive_Disney from "./Receive_Disney"





const Disney = () => {
    return (
        <>
        <h1><center>  Welcome to Disney fanpage  </center> </h1>
        <div className="text-center">
        <img src="https://disneyanimation.com/img/uploads/walt-disney-animation-studios/home.jpg" width="100%"/>
        </div>
        <FilterBar/>
        <Receive_Disney/>
       
        </>
    )
}

export default Disney;