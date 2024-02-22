import React, { useContext, useEffect, useState } from 'react';
import leetcodedata from '../state/context';
import ContestComparison from './CommonContext';
// import {Contestdata,Contestdata2} from '../state/fetchdata'


const Scoregenerator = () => {
    const context = useContext(leetcodedata);
    const {
        Contestdata,
        Contestdata2,
        userSolved,
        userSolved2,
    } = context;

    const [count,setCount] = useState(1);

    const [finalScore1, setFinalScore1] = useState(0);
    const [finalScore2, setFinalScore2] = useState(0);

    const calculateRating = () => {
        const rating1 = Contestdata.contestRating;
        const formattedRating1 =
            rating1 !== undefined && rating1 !== null
                ? parseFloat(rating1.toFixed(0))
                : 1500;

        const rating2 = Contestdata2.contestRating;
        const formattedRating2 =
            rating2 !== undefined && rating2 !== null
                ? parseFloat(rating2.toFixed(0))
                : 1500;

        if (formattedRating1 !== null && formattedRating2 !== null) {
            let scoreDiff = formattedRating2 - formattedRating1;
            let divider = 2.0;

            while (scoreDiff > 0) {
                setFinalScore1((prev) => prev + Math.min(100, scoreDiff) / divider);
                scoreDiff -= 100;
                divider += 0.5;
            }

            scoreDiff = Math.abs(formattedRating1 - formattedRating2);
            divider = 2.0;

            while (scoreDiff > 0) {
                setFinalScore2((prev) => prev + Math.min(100, scoreDiff) / divider);
                scoreDiff -= 100;
                divider += 0.5;
            }
        }
    };

    const calculateBadges = () => {
        // Your logic for calculating badges
    };

    const calculateProblem = () => {
        // Your logic for calculating solved problems
    };

    useEffect(() => {
        calculateRating();
        calculateBadges();
        calculateProblem();
        console.log("pahle ka",Contestdata.contestParticipation);
        console.log("dusre ka",Contestdata2.contestParticipation);
    }, [Contestdata, Contestdata2, userSolved, userSolved2]);

    return (
        <>
            <div>
                <br /><br />
                <p style={{color:"white"}}>Final Score of {localStorage.getItem('userId')}: {finalScore1}</p>
                <p style={{color:"white"}}>Final Score {localStorage.getItem('userId2')}: {finalScore2}</p>
            </div>
            <div>
                {/* first user : {localStorage.getItem("userId")}
                <br />
                second user : {localStorage.getItem("userId2")}
                <br /> */}
                <ContestComparison
                user1Contests={Contestdata.contestParticipation}
                user2Contests={Contestdata2.contestParticipation}
            />
            </div>
        </>
    );
};

export default Scoregenerator;
