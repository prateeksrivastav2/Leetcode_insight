import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import leetcodedata from "../state/context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const EntryPage = () => {
  const context = useContext(leetcodedata);
  const { fetchUserData } = context;
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [loader, setLoader] = useState(false);

  // Load user ID from localStorage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();
    localStorage.setItem("userId", userId);
    await fetchUserData();
    // Save user ID to localStorage
    navigate("/home");
  };

  return (
    <Container className="mt-5" style={{ width: "100vw" }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center mb-4">Enter Your LeetCode User ID</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userId">
              <Form.Label>Enter LeetCode User ID:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your LeetCode User ID"
                value={userId}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" block disabled={loader}>
              Show Data
            </Button>
            <br />
            <br />

            <div style={{ display: loader ? "block" : "none" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
                <br />
                Loading...
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EntryPage;
