import data from "./Todo.json";
import SearchBar from "./SearchBar";
import List from "./List";
import { useState } from "react";

const SearchableList = () => {
  //this state store the search query
  const [q, setQ] = useState("");
  const [completed, setCompleted] = useState(false)

  const date = new Date();

  // function to update our stateful value
  const qHandler = (e) => {
    setQ(e.target.value);
    // console.log(q);
  };
  const handleCompleted = (e) => {
    setCompleted(c=>!c);
    // console.log(completed);
  };


  return (
    <>
      <h1>{date.toLocaleTimeString()}</h1>
      {/* <SearchBar query={q} queryFunction={setQ}/> */}
      <SearchBar query={q} queryFunction={qHandler} completed ={completed} completedFunction={handleCompleted} />
      <List list={data} query={q} completed={completed} />
    </>
  );
};

export default SearchableList;