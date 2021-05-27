import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import Create from './Create';

import Records from './Records';


const Home = () => {



    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [refresh, setRefresh] =useEffect(false);
    const [error, setError] = useState(null);
    
  
    useEffect(() => {

        

        axios
            .get("http://localhost:8080/getAll")
            .then((response) => {
                setIsLoaded(true);
                setRefresh(c=>!c);
                setData(response.data);
            })
            .catch((error) => {
                setError(error)
                console.error(error)
                setRefresh(true);
            })
            
    }, [refresh])

    



    if(error){
            return <h1>Something went wrong!{error.message}</h1>
    }else if(!isLoaded){
        return(<p> Please wait loading data</p>)
    }else{

        
    


    return (
        <>
            <h1 >Welcome to the home of Weightlifting</h1>

            <Table dark>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Bench Press KG</th>
                        <th>Clean and Jerk KG</th>
                        <th>Snatch KG</th>
                        <th>Delete Record</th>
                        <th>Update Record</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((rec) => (
                            <tr>
                                <Records records={rec} setRefresh={setRefresh}/>
                            </tr>
                        ))

                    }

                </tbody>
            </Table>

           <Create/>



        </>
        
    )
    
}
}






export default Home;