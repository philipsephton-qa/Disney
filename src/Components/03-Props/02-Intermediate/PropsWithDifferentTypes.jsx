import ComponentWithProps from "./ComponentWithProps";


const PropsWithDifferentTypes =()=>{

    const myNum = 2;
    const myString = "Aswene";
    const myBool =true;
    const myObj={
        brand:"Audi",
        model:"A5",
        features:["Heated seats, DRL"],
        year:2015,
        doors:3
    };
    const myArray = ["Audi", "BMW", "Merc", "Honda","Ford", "Lexus"];
    const myFunc = ()=> "This is a string";

    return(
        <>
        <ComponentWithProps
            numberProp={myNum}
            stringProp={myString}
            boolProp={myBool}
            objProp={myObj}
            arrProp={myArray}
            funcProp={myFunc}
            myOwnProp = "this is just to show we can create on the fly!"
            />
            </>
    )


}

export default PropsWithDifferentTypes;