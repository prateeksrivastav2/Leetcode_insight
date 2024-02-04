import React, { useContext, useEffect } from 'react';
import leetcodedata from '../state/context';
import { Container, Row, Col } from 'react-bootstrap';
import Contestdetails from './Contestdetails';

import Solved from './solved'
const Home = () => {
    const context = useContext(leetcodedata);
    const { getuserdata ,userdata} = context;
    useEffect(() => {
        // getuserdata();
    },[])
    
  return (
    <>
    <Solved/>
    <Contestdetails/>
      <Container fluid className="h-100">
        <Row className="h-100">
          {/* First Div */}
          <Col>
            <div className="h-20 w-100 bg-light p-3">
              <h4>User Details</h4>
              <p>Username: {userdata.username}</p>
              <p>Name: {userdata.name}</p>
              <p>DOB: {userdata.birthday}</p>
              <p>About: {userdata.about}</p>
              <p>Ranking: {userdata.ranking}</p>
            </div>
          </Col>

          {/* Space between the Divs */}
          <Col md={3} className="h-100">
            <div className="h-5 w-100"></div>
          </Col>

          {/* Second Div */}
          <Col md={9}>
            <div className="h-75 w-100 bg-light p-3">
              {/* Content for the second div */}
              second div
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
