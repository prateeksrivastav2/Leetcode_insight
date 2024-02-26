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
    width: '70vw',
    height: 'fit-content',
    background: 'linear-gradient(to bottom, #333, #000)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
    borderRadius: '8px',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    overflowY: 'hidden',
    margin: 'auto', // Center horizontally
    marginTop: '23vh',

  };
  
  const footerStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1vw',
    
  };

  useEffect(() => {
    setss(userId)
  })

  const handleInputChange = (event) => {
    setUserId(event.target.value);
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
      <div style={{
        overflowY:'hidden',
        // overflowX:'hidden'
      }}>
        <div className="card" style={cardStyles}>
          <br />
          <h3 className="card-header">Enter Your LeetCode User ID</h3>
          <div className="card-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="userId">
                <Form.Label>Leetcode Handle</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={userId}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" block disabled={loader}>
               Get Details
              </Button>
              <br />
              <br />

              <div style={{ display: loader ? "block" : "none" }}>
                <img
                  style={{ height: '8vh', width: '10vw' }}
                  src="https://media.giphy.com/media/VEzBzSyEOKtXGuPIQw/giphy.gif?cid=790b761104n8iodytg9lsmfhhcsamzliam2m6o3g4vsrulof&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                  alt=""
                />
                <div className="text-white" style={{ display: "flex", flexDirection: "column" }}>
                  Loading...
                </div>
              </div>
            </Form>
          </div>
        </div>
        <footer style={footerStyles}>
          <p>Copyright @ PsSr</p>
        </footer>
      </div>
    </>
  );
};

export default EntryPage;