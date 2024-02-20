import React from 'react'
import { useContext,useState } from 'react';
import leetcodedata from '../state/context';
import { useEffect } from 'react';
const Scoregenerator = () => {
    const context = useContext(leetcodedata);
    const { userdata, userBadges, userdata2, userSolved, userSolved2, Contestdata, Contestdata2, userBadges2 } = context;
    // const [finalScore1,setfinalScore1]=(0);
    // const [finalScore2,setfinalScore2]=(0);

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
            let ScoreDiff = formattedRating2 - formattedRating1;
            let divi=100;
            let divider=2.0;
            while (ScoreDiff > 0) {
                ScoreDiff-=100;
                if(ScoreDiff<0)divi=100+ScoreDiff;
                if(formattedRating1>formattedRating2){
                    // let finalScore1=
                    // setfinalScore1((prev)=>(prev+=((divi)/divider)));
                }
                else{
                    // setfinalScore2((prev)=>(prev+=((divi)/divider)));
                }
                divider+=0.5;
            }
        }
    }
    const calculateBadges=()=>{

    }
    const calculateProblem=()=>{
        const Easy1= userSolved.easySolved;
        const Medium1= userSolved.mediumSolved;
        const Hard1 = userSolved.hardSolved;
        const Easy2= userSolved2.easySolved;
        const Medium2= userSolved2.mediumSolved;
        const Hard2 = userSolved2.hardSolved;

    }
    return (
        <>
        aa gya a
        </>
    )
}

export default Scoregenerator;