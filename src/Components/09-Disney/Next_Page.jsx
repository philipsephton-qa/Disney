import React from 'react';
import { Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap';
import { useState } from "react";

const Next_Page = (props) => {
  console.log(props);
  const setUrl = props.setUrl;
  
  const setRefresh = props.setRefresh;
  const [page, setPage] = useState(1);

  const pageSelector=(page)=>{setUrl("https://api.disneyapi.dev/characters?page="+ page);
  setRefresh(c=>!c);
  setPage(page)};
  // const page2=()=>{setUrl("https://api.disneyapi.dev/characters?page=2");
  // setRefresh(c=>!c);
  // setPage(2)};
  // const page3=()=>{setUrl("https://api.disneyapi.dev/characters?page=3");
  // setRefresh(c=>!c);
  // setPage(3)};
  // const page4=()=>{setUrl("https://api.disneyapi.dev/characters?page=4");
  // setRefresh(c=>!c);
  // setPage(4)};
  // const page5=()=>{setUrl("https://api.disneyapi.dev/characters?page=5");
  // setRefresh(c=>!c);
  // setPage(5)};
  
  
  return (
    <>
    {/* <Button onClick={page1}>PAGE 1</Button>
    <Button onClick={page2}>PAGE 2</Button> */}
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        {(page<2)?<PaginationLink></PaginationLink>:<PaginationLink previous onClick={()=>pageSelector(page-1)} ></PaginationLink>} 
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={()=> pageSelector(1) }>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={()=>pageSelector(2)}>
          2 
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={()=>pageSelector(3)}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={()=>pageSelector(4)}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={()=>pageSelector(5)}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={()=>pageSelector(6)}>
          6
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
      {(page>5)?<PaginationLink></PaginationLink>:<PaginationLink next onClick={()=>pageSelector(page+1)} ></PaginationLink>} 
      </PaginationItem>
    </Pagination>
    </>
  );
}

export default Next_Page;