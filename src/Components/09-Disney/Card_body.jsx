import {
    CardText,
    CardTitle, CardSubtitle, Button, CardImg, CardBody, Card, Col, Row
} from 'reactstrap';
import Information_Modal from './Information_Modal'


const Card_body = (props) => {


 
    // console.log("this one", props);
    let url = props.imageUrl;
    //console.log("meeeeeeee",url.indexOf(".png"));
    const pngUrl = url.indexOf(".png");
    const jpgUrl = url.indexOf(".jpg");
    const JPGUrl = url.indexOf(".JPG");
    const jpegUrl = url.indexOf(".jpeg");
    const PNGUrl = url.indexOf(".PNG");
    
    let trueUrl; //= url.substring(0,newUrl + 4);
    if (url.indexOf(".png") > 0) {
        trueUrl = url.substring(0, pngUrl + 4)
    }else if(url.indexOf(".PNG") > 0) {
        trueUrl = url.substring(0, PNGUrl + 4)
    } else if(url.indexOf(".jpg") > 0){
        trueUrl = url.substring(0, jpgUrl + 4)
    } else if(url.indexOf(".JPG") > 0){
        trueUrl = url.substring(0, JPGUrl + 4)
    }else if(url.indexOf(".jpeg") > 0){
        trueUrl = url.substring(0, jpegUrl + 5)
    }
    else {
        trueUrl ="No image"
    }
    //  
    //  console.log(trueUrl);

    
    return (
        <>
            <Col sm="4">
                <Card body outline color="secondary" inverse style={{ backgroundColor: '#1468', borderColor: '#333' }} >
                    <CardBody>
                        
                        {/* <CardImg top width="15" src={props.imageUrl} alt="Card image cap" /> */}
                        <img src={trueUrl} alt={props.name} />
                        <CardTitle tag="h5">{props.name}</CardTitle>

                        <Information_Modal name={props.name} films={props.films} shortFilms={props.shortFilms} tvShows={props.tvShows} 
                        videoGames={props.videoGames} parkAttractions={props.parkAttractions} allies={props.allies} enemies={props.enemies}/>



                    </CardBody>
                </Card>
            </Col>

        </>
    )




}

export default Card_body