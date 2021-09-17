import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import api from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  FormControl,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";

function App() {
  const [message, changeMessage] = useState("");
  const [text, changeText] = useState("");
  useEffect(() => {
    api.getMessage().then((data) => {
      changeMessage(data.message);
    });
  }, []);
  const onSubmit = () => {
    console.log("TEXT", text);
    api.setMessage(text).then((response) => {
      changeMessage(response.message);
    });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>DS Project</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>DS Project</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
