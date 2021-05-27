

const Second =()=>{

    const name = 'Vinesh Ghela!'
    const date=  new Date();
    const fName = 'Vinesh'
    const sName = 'Ghela'

    console.log(date)

    return(
        <>
            <h1>Lets try and use some JS in this file</h1>
            <p>{name}</p>
            <p>{date.toLocaleDateString()}</p>
            <p>{date.toLocaleTimeString()}</p>
            <h2>hello {fName} {sName} nice to meet you</h2>
            <h2> {`${fName} ${sName}` }</h2>

        </>
    )
}

export default Second;