import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Records = (props) => {
    const [data, setData] = useState([]);
    const { records } = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const [refresh, setRefresh] =useEffect(false);s
   

    const {
        buttonLabel = "Delete Record",
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const deleteRecord=(e)=>{
        axios
            .delete(`http://localhost:8080/remove/${records.id}` )
            .then((response) => {
                setData(response.data);
                setRefresh(c=>!c);
                setIsLoaded(true);
            })
            .catch((error) => {
                setRefresh(true);
                setIsLoaded(true);
            })
        e.preventDefault();
       console.log(props);
        
        }
    


    return (
        <>

            <td>{records.firstName}</td>
            <td>{records.lastName}</td>
            <td>{records.benchPress}</td>
            <td>{records.cleanAndJ}</td>
            <td>{records.snatch}</td>
            {/* <td><Button color="primary" id={records.id} >Change Record</Button>{' '}</td> */}
            <td> <div>
                <Button color="info" onClick={toggle}>{buttonLabel}</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Delete your record!</ModalHeader>
                    <ModalBody>
                    <form onSubmit={deleteRecord}>
                        <input type="text" class="form-control" id="updateId{records.id}" value={records.id} disabled />
                        <input type="text" class="form-control" id="firstName2{records.id}" placeholder="First Name:" value={records.firstName} disabled />
                        <input type="text" class="form-control" id="lastName2{records.id}" placeholder="Last Name:" value={records.lastName} disabled/>
                        <input type="number" class="form-control" id="benchPress2{records.id}" placeholder="Bench Press:" value={records.benchPress} disabled/>
                        <input type="number" class="form-control" id="cleanAndJ2{records.id}" placeholder="Clean and Jerk:" value={records.cleanAndJ} disabled />
                        <input type="number" class="form-control" id="snatch2{records.id}" placeholder="Snatch:" value={records.snatch} disabled />
                        <Button color="primary" type="submit">Delete</Button>
                        <Button color="danger" onClick={toggle}>Close</Button>{' '}
                        </form>
                    </ModalBody>
                   
                </Modal>
            </div></td>

            

        </>
    )
}

export default Records;