import React, { useContext, useEffect, useState } from 'react';
import leetcodedata from '../state/context';
import ContestComparison from './CommonContext';
// import {Contestdata,Contestdata2} from '../state/fetchdata'

import CompareProblems from './CompareProblems';

const Scoregenerator = () => {
    const context = useContext(leetcodedata);
    const {
        userBadges,
        userBadges2,
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

            console.log(scoreDiff);
            console.log("scoreDiff");
            while (scoreDiff > 0) {
                setFinalScore1((prev) => prev + Math.min(100, scoreDiff) / divider);
                scoreDiff -= 100;
                divider += 0.5;
            }
            scoreDiff = formattedRating2 - formattedRating1;
            scoreDiff*=-1;
            divider = 2.0;

            while (scoreDiff > 0) {
                setFinalScore2((prev) => prev + Math.min(100, scoreDiff) / divider);
                scoreDiff -= 100;
                divider += 0.5;
            }
            console.log(finalScore1+" "+finalScore2);
        }
    };

    const calculateBadges = () => {
        // Your logic for calculating badge
        let score=0,score2=0;
        for(let index=0;index<userBadges.badges.length;index++){
            if(userBadges.badges[index].displayName == "Knight"){
                score+=15;
            }
            else if(userBadges.badges[index].displayName == "Guardian"){
                score+=30;
            }
            else
            score+=2;
        }
        for(let index=0;index<userBadges2.badges.length;index++){
            if(userBadges2.badges[index].displayName == "Knight"){
                score2+=15;
            }
            else if(userBadges2.badges[index].displayName == "Guardian"){
                score2+=30;
            }
            else
            score2+=2;
        }
        score=score+finalScore1;
        score2=score2+finalScore2;
        setFinalScore1(score);
        setFinalScore2(score2);
        // console.log(score+" "+score2);
        // console.log("score   score2");

    };

    const calculateProblem = () => {
        // Your logic for calculating solved problems
        let a=userSolved.easySolved, b=userSolved.mediumSolved, c=userSolved.hardSolved;
        let a2=userSolved2.easySolved, b2=userSolved2.mediumSolved, c2=userSolved2.hardSolved;
        let score1=0,score2=0;
        let s1=a-a2;
        let s2=b-b2;
        let s3=c-c2;
        let ss1=a2-a;
        let ss2=b2-b;
        let ss3=c2-c;
        score1+=s1*1+s2*2+s3*3;
        score2+=ss1*1+ss2*2+ss3*3;
        if(score1<0)score1=score2/2;
        if(score2<0)score2=score1/2;
        score1=score1+finalScore1;
        score2=score2+finalScore2;
        setFinalScore1(score1);
        setFinalScore2(score2);
        // console.log(score1+" "+score2);
        // console.log("score   score2");


    };

    useEffect(() => {
        calculateRating();
        // calculateBadges();
        // calculateProblem();
        console.log("pahle ka",Contestdata.contestParticipation);
        console.log("dusre ka",Contestdata2.contestParticipation);
    });

    return (
        <>
            <div>
                <br /><br />
                <p style={{color:"white"}}>Final Score of {localStorage.getItem('userId')}: {finalScore1}</p>
                <p style={{color:"white"}}>Final Score of {localStorage.getItem('userId2')}: {finalScore2}</p>
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
            <div>
                <CompareProblems/>
            </div>
        </>
    );
};

export default Scoregenerator;
