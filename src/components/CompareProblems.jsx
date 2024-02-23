import React, { useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, registerables } from 'chart.js';
import leetcodedata from '../state/context';
import { Center } from '@chakra-ui/layout';
ChartJS.register(...registerables);

const CompareProblems = () => {
  const context = useContext(leetcodedata);
  const { userSolved, userSolved2 } = context;

  useEffect(() => {
    // console.log(userSolved);
  });

  const data = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: localStorage.getItem('userId'),
        data: [userSolved.easySolved, userSolved.mediumSolved, userSolved.hardSolved],
        backgroundColor: 'blue', // Blue color with transparency
      },
      {
        label: localStorage.getItem('userId2'),
        data: [userSolved2.easySolved, userSolved2.mediumSolved, userSolved2.hardSolved],
        backgroundColor: 'green', // Green color with transparency
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Legend text color
        },
      },
      title: {
        display: true,
        text: 'Solved Questions',
        color: 'white', // Title text color
      },
    },
    barPercentage: 0.9,
    categoryPercentage: 0.5,
  };

  const cardStyles = {
    width: '70vw',
    height: 'fit-content',
    background: 'linear-gradient(to bottom, #333, #000)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
    borderRadius: '8px',
    margin: '2vw',
  };

  const mainstyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={mainstyles}>
      <div className="card" style={cardStyles}>
        <br />
        <h3 className="card-header">Problems Solved</h3>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CompareProblems;
