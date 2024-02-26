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
    width: '70vw',
    height: 'fit-content',
    background: 'linear-gradient(to bottom, #333, #000)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
    borderRadius: '10px',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    overflowY: 'hidden',
    margin: 'auto', // Center horizontally
    marginTop: '23vh',
    

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
    <div style={{ overflowY:'hidden',}} >
      <div className="card" style={cardStyles}>
        <br />
        <h3 className="card-header">Enter LeetCode User ID</h3>
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="userId">
                  <Form.Label>User1 ID:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={userId}
                    onChange={(e) => handleInputChange(e, "userId")}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="userId2">
                  <Form.Label>User2 ID:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={userId2}
                    onChange={(e) => handleInputChange(e, "userId2")}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />

            <Button variant="primary" type="submit" block disabled={loader}>
             Compare
            </Button>
            <br />
            <br />

            <div style={{ display: loader ? "block" : "none" }}>
              <img style={{ height: '8vh', width: '10vw' }} src="https://media.giphy.com/media/VEzBzSyEOKtXGuPIQw/giphy.gif?cid=790b761104n8iodytg9lsmfhhcsamzliam2m6o3g4vsrulof&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" />
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
    </div>
  );
};

export default Comparisons;
