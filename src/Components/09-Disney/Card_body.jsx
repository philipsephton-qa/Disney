import {
    CardText,
    CardTitle, CardSubtitle, Button, CardImg, CardBody, Card, Col, Row
} from 'reactstrap';


const Card_body = (props) => {



    console.log("this one", props);
    return (
        <>
            
                <Card body outline color="secondary" >
                    <CardBody>

                        {/* <CardImg top width="15" src={props.imageUrl} alt="Card image cap" /> */}
                        {/* <img src={props.imageUrl} alt="" /> */}
                        <CardTitle tag="h5">{props.name}</CardTitle>

                        {props.films.length == 0 ? <p></p> : <p>Films: {props.films} </p>}

                        {props.shortFilms.length == 0 ? <p></p> : <p>Short Films: {props.shortFilms}</p>}
                        {props.tvShows.length == 0 ? <p></p> : <p>TV Shows: {props.tvShows},</p>}

                        {props.videoGames.length == 0 ? <p></p> : <p>Video Games: {props.videoGames}</p>}
                        {props.parkAttractions.length == 0 ? <p></p> : <p>Park Attractions: {props.parkAttractions}</p>}
                        {props.allies.length == 0 ? <p></p> : <p>Allies: {props.allies}</p>}
                        {props.enemies.length == 0 ? <p></p> : <p>Enemies: {props.enemies}</p>}



                        <Button>Button</Button>

                    </CardBody>
                </Card>
                

        </>
    )




}

export default Card_body