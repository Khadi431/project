import { useState, useContext, useEffect } from "react";
import {useHistory, useLocation} from "react-router-dom";
import { Button, Form, Col, Row } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const SignupUserScreen = () => {
  const history =useHistory();
  const location =useLocation();

  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState ("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signupUser,userInfo } = useContext(UserContext);

  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect])

  const handleSubmit=(e)=> {
    e.preventDefault();
    let newuser = {
      firstname,
      lastname,
      email,
      password,
    };
    signupUser(newuser);
  }
  return (
    <div>
      <Row>
        <Col xs={12} sm={12} md={6} vlg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>firstname</Form.Label>
              <Form.Control
                placeholder="enter firstname"
                value={firstname}
                onchange={(text) => setFirstname(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>lastname</Form.Label>
              <Form.Control
                placeholder="enter lastname"
                value={email}
                onchange={(text) => setLastname(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>email</Form.Label>
              <Form.Control
                placeholder="enter email"
                value={password}
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
export default SignupUserScreen;
