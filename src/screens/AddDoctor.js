import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddDoctor() {
    return (
        <Container>
            <Form>
                <Form.Control placeholder="enter a name "></Form.Control>
                <Form.Control placeholder="enter a position "></Form.Control>
                <Form.Control placeholder="enter an email "></Form.Control>
                <Form.Control placeholder="enter dob "></Form.Control>
                <Form.Control placeholder="enter a town "></Form.Control>
                <Button>SAVE</Button>

            </Form>
      </Container>
    )
}

export default AddDoctor;
