
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardText } from 'reactstrap';

const Information_Modal = (props) => {
    const {name,films,shortFilms,tvShows,videoGames,parkAttractions, allies, enemies} = props;
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    // console.log(props)

    return (
        <div>
            <Button color="dark" onClick={toggle}>Read More</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Additional Info for {name}</ModalHeader>
                <ModalBody>

                    
                    {films.length == 0 ? <p></p> : <p>Films: {films.join(", ")}</p>}

                    {shortFilms.length == 0 ? <p></p> :<p>Short Films: {shortFilms.join(", ")}</p>}
                    {tvShows.length == 0 ? <p></p> : <p>TV Shows: {tvShows.join(", ")}</p>}

                    {videoGames.length == 0 ? <p></p> : <p>Video Games: {videoGames.join(", ")}</p>}
                    {parkAttractions.length == 0 ? <p></p> :<p>Park Attractions: {parkAttractions.join(", ")}</p>}
                    {allies.length == 0 ? <p></p> : <p>Allies: {allies.join(", ")}</p>}
                    {enemies.length == 0 ? <p></p> : <p>Enemies: {enemies.join(", ")}</p>}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Information_Modal;