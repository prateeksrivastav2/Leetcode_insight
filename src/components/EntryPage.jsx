import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import leetcodedata from "../state/context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const EntryPage = () => {
  const context = useContext(leetcodedata);
  const { fetchUserData } = context;
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [ss, setss] = useState("");
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
    overflowY: 'hidden'
  };
  useEffect(() => {
    setss(userId)
  })
  
  const handleInputChange = (event) => {
    setUserId(event.target.value);
    // setss(event.target.value);
  };

  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();
    localStorage.setItem("userId", userId);
    await fetchUserData();
    navigate("/home");
  };

  return (
    <>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full height of the viewport
          overflowY: 'hidden'
        }}
      >
        <div className="card" style={cardStyles}>
          <br />
          <h3 className="card-header">Enter Your LeetCode User ID</h3>
          <div className="card-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="userId">
                <Form.Label>Leetcode Handel</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={userId}
                  onChange={handleInputChange}
                  required
                  />
              </Form.Group>
              <br />
                  <div>
                    {ss}
                  </div>
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
      </Container>
    </>
  );
};

export default EntryPage;
