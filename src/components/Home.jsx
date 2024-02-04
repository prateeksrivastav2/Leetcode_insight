// Home.js

import React, { useContext, useEffect } from 'react';
import leetcodedata from '../state/context';
import '../styles/Home.css';
import Contestdetails from './Contestdetails';
import Solved from './solved';

// import Solved from './solved'
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
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',boxSizing:'border-box',width:"100vw" }}>
      {/* First Div (20vw) */}
      <div className='firstdiv box card' style={{ width: '20vw', backgroundColor: 'lightdark',margin:"3vw"}}>
        <ul className="list-group list-group-flush">
        <h4>User Details</h4>
        <br />
        <p>*Username: {userdata.username}</p>
        <br />
        <p>*Name: {userdata.name === undefined ? "none" :userdata.name}</p>
        <br />
        <p>*DOB: {userdata.birthday}</p>
        <br />
        <p>*About: {userdata.about}</p>
        <br />
        <p>*Ranking: {userdata.ranking}</p>
        </ul>
      </div>

      {/* Second Div (70vw) */}
      <div className='seconddiv box' style={{ width: '85vw',margin:'3vw'}}>
        {/* Content for the second div */}
        second div
      </div>
    </div>
    
    </>
  );
};

export default Home;
