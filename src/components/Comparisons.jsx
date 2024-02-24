import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import leetcodedata from "../state/context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Comparisons = () => {
  const context = useContext(leetcodedata);
  const { fetchUserData, fetchUserData2 } = context;
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userId2, setUserId2] = useState("");
  const [loader, setLoader] = useState(false);
  const cardStyles = {
    width: '80vw',
    height: 'fit-content',
    background: 'linear-gradient(to bottom, #333, #000)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
    borderRadius: '8px',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'hidden',
    marginTop: '26vh',
    marginLeft:'auto',
    marginRight: 'auto',
  };

  // Load user ID from localStorage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUserId2 = localStorage.getItem("userId2");
    if (storedUserId) {
      setUserId(storedUserId);
    }
    if (storedUserId2) {
      setUserId2(storedUserId2);
    }
  }, []);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    if (field === "userId") {
      setUserId(value);
    } else if (field === "userId2") {
      setUserId2(value);
    }
  };
  const footerStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  };

  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();
    localStorage.setItem("userId", userId);
    localStorage.setItem("userId2", userId2);
    fetchUserData2();
    await fetchUserData();
    // Save user ID to localStorage
    navigate("/Scoregenerator");
  };

  return (
    <Container className="mt-5" style={{ width: "100vw" }}>
      <div className="card" style={cardStyles}>
        <br />
        <h3 className="card-header">Enter Your LeetCode User ID</h3>
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="userId">
                  <Form.Label>Enter LeetCode User1 ID:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your LeetCode User ID"
                    value={userId}
                    onChange={(e) => handleInputChange(e, "userId")}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="userId2">
                  <Form.Label>Enter LeetCode User2 ID:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your LeetCode User ID"
                    value={userId2}
                    onChange={(e) => handleInputChange(e, "userId2")}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />

            <Button variant="primary" type="submit" block disabled={loader}>
              Show Data
            </Button>
            <br />
            <br />

            <div style={{ display: loader ? "block" : "none" }}>
              <img style={{ height: '10vw', width: '12vw' }} src="https://media.giphy.com/media/VEzBzSyEOKtXGuPIQw/giphy.gif?cid=790b761104n8iodytg9lsmfhhcsamzliam2m6o3g4vsrulof&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" />
              <div className="text-white" style={{ display: "flex", flexDirection: "column" }}>
                Loading...
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div>

        <footer className="text-white" style={footerStyles}>
          <p>
            Copyright @ PsSr
          </p>
        </footer>
      </div>
    </Container>
  );
};

export default Comparisons;
