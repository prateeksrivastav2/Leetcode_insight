// Home.js

import React, { useContext, useEffect } from 'react';
import leetcodedata from '../state/context';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Home.css';

const Home = () => {
  const context = useContext(leetcodedata);
  const { getuserdata, userdata } = context;

  useEffect(() => {
    // getuserdata();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',boxSizing:'border-box',width:"90vw" }}>
        {/* First Div (20vw) */}
        <div className='firstdiv' style={{ width: '20vw', backgroundColor: 'lightdark',margin:"5vw",padding:"1%"}}>
          <h4>User Details</h4>
          <p>*Username: {userdata.username}</p>
          <p>*Name: {userdata.name}</p>
          <p>*DOB: {userdata.birthday}</p>
          <p>*About: {userdata.about}</p>
          <p>*Ranking: {userdata.ranking}</p>
        </div>

        {/* Second Div (70vw) */}
        <div className='seconddiv' style={{ width: '85vw'}}>
          {/* Content for the second div */}
          second div
        </div>
      </div>
    </>
  );
};

export default Home;
