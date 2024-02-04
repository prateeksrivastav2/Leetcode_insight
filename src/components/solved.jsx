import React, { useEffect, useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import leetcodedata from '../state/context';

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
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: 'left',
    },
    cutout: '45%',
    radius: '100%',
  };

  const cardStyles = {
    width: '40vw',
    maxHeight: '80vw',
    maxWidth: '45vw',
    background: 'linear-gradient(to bottom, #333, #000)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
    borderRadius: '8px',
    margin: '16px',
    padding:0,
  };

  return (
    <div className="card" style={cardStyles}>
      <h5 className="card-header">Solved Questions</h5>
      <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Pie data={data} options={options} />
      </div>
            <p><strong >Total Solved: </strong>{userSolved.solvedProblem}</p>
    </div>
  );
};

export default Solved;
