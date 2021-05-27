import WIPCard from "./WIPCard"


const WIPContact =()=>{

    return(
        <div className="contacts">
            <WIPCard
                image="https://placedog.net/300/200?id=43"
                name=" Harry Pawter"
                phone={2125551234}
                email="harry@pawter.pup"
            />
            <WIPCard
                image="https://placedog.net/300/200?id=5"
                name=" Jimmy Chew"
                phone={2125551234}
                email=" mr.chew@gmail.pup"
            />
            <WIPCard
                image="https://placedog.net/300/200?id=22"
                name=" Bark Wahlberg "
                phone={2125551234}
                email="bark@facebook.woof"
            />
            <WIPCard
                image="https://placedog.net/300/200?id=3"
                name=" Indiana Bones"
                phone={2125551234}
                email="indiana.bones@hotmail.com"
            />
           
        </div>
    )

}

export default WIPContact;