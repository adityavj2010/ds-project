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
  //The message to be displayed
  const [message, changeMessage] = useState("");
  //The text in the inputBox
  const [text, changeText] = useState("");

  //On first time load, getting the text message
  useEffect(() => {
    api.getMessage().then((data) => {
      changeMessage(data.message);
    });
  }, []);
  const onSubmit = () => {
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
        <Row className="mt-2">
          <Col>
            <h3>{message}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormControl
              placeholder="Add text"
              value={text}
              onChange={(event) => changeText(event.target.value)}
            />
          </Col>
          <Col>
            <Button onClick={onSubmit}>Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
