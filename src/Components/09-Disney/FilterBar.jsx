import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FilterBar = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="3"><Label for="exampleEmail"></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Search by name" /></Col>
    
      </Row>
      
      <Row>

      <Col xs="3"><Label for="exampleEmail"></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Search by type" /></Col>
      </Row>
     
      
        
      
    </Container>
  );
}

export default FilterBar;
