import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const Create = (props) => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] =useEffect(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [benchPress, setBenchPress] = useState(0);
    const [cleanAndJ, setCleanAndJ] = useState(0);
    const [snatch, setSnatch] = useState(0);

    const {
        buttonLabel = "Create Records",
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    

    

        let obj = {
            firstName:firstName,
            lastName: lastName,
            benchPress: parseInt(benchPress),
            cleanAndJ: parseInt(cleanAndJ),
            snatch: parseInt(snatch)
        };

        // const obj=(e)=>{
        //     e.preventDefault();
            
            
        //     setFirstName("");
        //     setLastName("");
        //     setBenchPress(0);
        //     setCleanAndJ(0);
        //     setSnatch(0);
        // }
const createRecord=(e)=>{
    axios
        .post("http://localhost:8080/create",obj)
        .then((response) => {
            
            setIsLoaded(true);
            setData(response.data);
            setFirstName("");
            setLastName("");
            setBenchPress(0);
            setCleanAndJ(0);
            setSnatch(0);
            setRefresh(c=>!c);
            // window.location.reload();
            
        })
        .catch((error) => {
            setRefresh(true);
            setIsLoaded(true);
            setError(error)
            console.error(error)
        })
    e.preventDefault();
    console.log(obj);
    
    }
    return (

        <>

            <div class="alert" id="onSuccess"></div>
            <Button color="primary" onClick={toggle}>Create new record!</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} >
                <ModalHeader toggle={toggle}>Create your record!</ModalHeader>
                <ModalBody>


                    <form onSubmit={createRecord}>
                    <input type="text" class="form-control" id="firstName1" onChange={(e)=>setFirstName(e.target.value)}  value = {firstName} placeholder="First Name:" />
                    <input type="text" class="form-control" id="lastName1" onChange={(e)=>setLastName(e.target.value)}  value = {lastName} placeholder="Last Name:" />
                    <input type="number" class="form-control" id="benchPress1" onChange={(e)=>setBenchPress(e.target.value)}  value = {benchPress} placeholder="Bench Press:" />
                    <input type="number" class="form-control" id="cleanAndJ1" onChange={(e)=>setCleanAndJ(e.target.value)}  value = {cleanAndJ} placeholder="Clean and Jerk:" />
                    <input type="number" class="form-control" id="snatch1" onChange={(e)=>setSnatch(e.target.value)}  value = {snatch} placeholder="Snatch:" />
                    <Button color="primary" type="submit">Create</Button>
                    <Button color="danger" onClick={toggle}>Close</Button>{' '}
                    </form>
                </ModalBody>
            </Modal>

        </>

    )

}

export default Create;