import React, { useEffect, useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import leetcodedata from '../state/context';
import { Center } from '@chakra-ui/layout';

ChartJS.register(ArcElement, Tooltip, Legend);

const Solved = () => {
  const context = useContext(leetcodedata);
  const { userSolved } = context;

  useEffect(() => {
    console.log("user");
    console.log(userSolved);
  }, [userSolved]);

  const data = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [userSolved.easySolved, userSolved.mediumSolved, userSolved.hardSolved],
        backgroundColor: ['blue', 'green', 'red'],
        hoverBackgroundColor: ['blue', 'green', 'red'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: 'left',
    },
    cutout: '50%',
    radius: '60%',
  };

  const cardStyles = {
    width: '33vw',
    height: '60vh',
    background: 'linear-gradient(to bottom, #333, #000)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
    borderRadius: '8px',
    margin: '3vw 3vw 0vw 0vw',
    padding:0,
  };

  const mainstyles = {
    alignItems:"center"
  };

  return (
    <div style={mainstyles}>
    <div className="card" style={cardStyles}>
      <h5 className="card-header">Solved Questions</h5>
      <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Pie data={data} options={options} />
      </div>
            <p><strong >Total Solved: </strong>{userSolved.solvedProblem}</p>
    </div>
    </div>
  );
};

export default Solved;
