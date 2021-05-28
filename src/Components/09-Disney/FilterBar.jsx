import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FilterBar = (props) => {
  return (
    <Container>
      <Row>
        <center>
        <Col xs="3"><Label for="exampleEmail"></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Search by name" /></Col>

        <Col xs="3"><Label for="exampleEmail"></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Search by type" /></Col>
      </center>
      </Row>

      
    </Container>
  );
}

export default FilterBar;
