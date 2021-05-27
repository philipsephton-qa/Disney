const List = ({ list, query, completed }) => {
    // console.log("The searc q is ", query);
  
    console.log(completed);
  
      const complete = (completed) => (list)=> list.completed === completed;
      // let complete = function complete(completed) {
      //     return function (list) {
      //       return list.completed === completed;
      //     };
      //   };
  
      const filterQuery = (query) => (list) => list.title.toLowerCase().includes(query.toLowerCase());
  
  
    let filteredList = [];
  
      if(completed){
          filteredList = list.filter(complete(completed)).filter(filterQuery(query))
      }else{
          filteredList = list.filter(filterQuery(query))
      }
  
    return (
      <>
        {filteredList.map((tempVal) => (
          <div key={tempVal.id}>
            <h3>{tempVal.title}</h3>
            <input type="checkbox" checked={tempVal.completed} readOnly />
          </div>
        ))}
      </>
    );
  };
  
  export default List;