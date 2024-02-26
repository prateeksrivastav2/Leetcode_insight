import React, { useEffect, useContext, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import leetcodedata from '../state/context';
import 'chartjs-plugin-scroll-bar'; // Import the scrollbar plugin

ChartJS.register(LinearScale, CategoryScale, Tooltip, Legend, PointElement, LineElement);

const Contestdetails = () => {
    const context = useContext(leetcodedata);
    const { Contestdata } = context;

    const [contestRating, setContestRating] = useState([]);
    const [contestName, setContestName] = useState([]);
    const [avgSolved, setavgSolved] = useState([]);
    const [avgSolvedk, setavgSolvedk] = useState(0.0);
    const [userRating, setuserRating] = useState(0.0);
    const [p, setP] = useState([]);

    const setDetails = async () => {
        for (let contest of Contestdata.contestParticipation) {
            setContestName((prevNames) => {
                if (!prevNames.includes(contest.contest.title)) {
                    return [...prevNames, contest.contest.title];
                }
                return prevNames;
            });
            setContestRating((prevRatings) => {
                if (!prevRatings.includes(contest.rating)) {
                    return [...prevRatings, contest.rating];
                }
                return prevRatings;
            });
            setavgSolved((prevSolved) => {
                return [...prevSolved, contest.problemsSolved];
            });
        }
    };

    useEffect(() => {
        setDetails();
        ////console.log(Contestdata);
    }, [Contestdata]);

    useEffect(() => {
        let sum = 0;
        for (let ind = 0; ind < avgSolved.length; ind++) {
            sum += avgSolved[ind];
        }
        const average = avgSolved.length > 0 ? sum / avgSolved.length : 0;
        setavgSolvedk(parseFloat(average.toFixed(2)));

        const rating = Contestdata.contestRating;
        const formattedRating = rating !== undefined && rating !== null ? parseFloat(rating.toFixed(2)) : null;
        setuserRating(formattedRating);
    }, [contestName, contestRating, avgSolved]);

    const data = {
        labels: contestName,
        datasets: [
            {
                label: 'Contest Ratings',
                data: contestRating,
                fill: false,
                borderColor: '#FF6384',
                tension: 0.5,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                labels: contestName,
                offset: true, // Add this line to allow space for the scrollbar
            },
            y: {
                type: 'linear',
                stepSize: 10,
                beginAtZero: false,
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            position: 'right',
        },
        plugins: {
            scrollbar: {
                mode: 'x', // Enable horizontal scrollbar
            },
        },
    };

    return (
        <div className="card" style={{ width: '70vw', height: 'fit-content', background: 'linear-gradient(to bottom, #333, #000)', color: '#fff', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)', borderRadius: '8px', margin: '2vw' }}>
            <h5 className="card-header">Contest Ratings</h5>
            <div className="card-body">
                <Line data={data} options={options} />
            </div>
            <div>
                <p className='btn btn-danger mx-2'>Rating : {userRating}</p>
                <p className='btn btn-info mx-2'>Contests : {Contestdata.contestAttend}</p>
                <p className='btn btn-primary mx-2'>InTop : {Contestdata.contestTopPercentage}%</p>
                <p className='btn btn-success mx-2'>Average Solved : {avgSolvedk}</p>
                <p className='btn btn-info mx-2'>Ranking : {Contestdata.contestGlobalRanking}</p>
                {Contestdata.contestBadges && <p className='btn btn-warning mx-2'>Level : {Contestdata.contestBadges.name}</p>}
            </div>
        </div>
    );
};

export default Contestdetails;
