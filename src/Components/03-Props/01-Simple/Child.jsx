import Baby from "./Baby";

// const Child = ({name,age,carsss,origin}) =>{
const Child = (props) => {
  const { name, age, carsss, origin } = props;

  return (
    <>
      <h2>This is this child</h2>
      {/* <p>{props.name}</p> */}
      <p>{name}</p>
      <p>{age}</p>
      <p>{carsss}</p>
      <p>{origin}</p>
      <Baby  {...props} />
    </>
  );
};

export default Child;
