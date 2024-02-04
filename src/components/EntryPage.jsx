import React, { useContext ,useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import leetcodedata from '../state/context';

const EntryPage = () => {
  const context = useContext(leetcodedata);
  const { getuserdata } = context;
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    await getuserdata(userId);
    navigate("/home");
  };

  return (
    <Container className="mt-5" style={{ width: "100vw" }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center mb-4">Enter Your LeetCode User ID</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userId">
              <Form.Label>LeetCode User ID:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your LeetCode User ID"
                value={userId}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" block>
              Show Data
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EntryPage;
