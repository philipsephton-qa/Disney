import ArrayItem from "./ArrayItem";

const ComponentWithProps = (props) => {
  const {
    numberProp,
    stringProp,
    boolProp,
    objProp,
    arrProp,
    funcProp,
    myOwnProp,
  } = props;

  const objToShow =[];

  for(let[k,v] of Object.entries(objProp)){
      objToShow.push(<li key={k}>value: {v}</li>)
  }


  return (
    <>
      <h1>hello</h1>
      <p>{numberProp}</p>
      <p>{stringProp}</p>
      <p>{boolProp}</p>
      {/* <p>{objToShow}</p> */}
      <p>{arrProp}</p>

      <ul>
        {objToShow.map((item, i) => (
          <ArrayItem key={i} item={item} />
        ))}
      </ul>
      <ul>
        {arrProp.map((item, i) => (
          <ArrayItem key={i} item={item} />
        ))}
      </ul>

      <p>{funcProp()}</p>
      <p>{myOwnProp}</p>
    </>
  );
};

export default ComponentWithProps;
