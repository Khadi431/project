import { useState, useContext } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { UserContext } from "../contexts/usersContext";

const RegisterUserScreen = () => {
  const { registerUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  }
  return (
    <div>
      <Row>
        <Col xs={12} sm={12} md={6} vlg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>name</Form.Label>
              <Form.Control
                placeholder="enter name"
                value={name}
                onchange={(text) => setName(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>email</Form.Label>
              <Form.Control
                placeholder="enter email"
                value={email}
                onchange={(text) => setEmail(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>password</Form.Label>
              <Form.Control
                placeholder="enter password"
                value={password}
                onchange={(text) => setPassword(text.target.value)}
              />
            </Form.Group>
            <Button type="submit">SIGN UP</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default RegisterUserScreen;
