import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./index.css"

export default function InfoBar({
  studentName, transferCredits, onNameChange, onCreditChange }) {

  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  }

  const handleCreditChange = (e) => {
    onCreditChange(e.target.value);
  }

  return (

    <Container>

      <Form.Group className="p-4 m-4 b-4" controlId="Input1">
        <Form.Label>Name (Enter last name)</Form.Label>
        <Form.Control id="largerWidth" type="text" placeholder="enter a last name..."
          onChange={handleNameChange} value={studentName} />
      </Form.Group>
      <Form.Group className="m-4 b-4 p-4" controlId="Textarea1">
        <Form.Label>Transfer Credits (Enter a number)</Form.Label>
        <Form.Control id="smallerWidth" type="number"  placeholder="2-3 digits..."
          onChange={handleCreditChange} value={transferCredits} />
      </Form.Group>

    </Container>

  );

}
