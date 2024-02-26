import React, { useContext, useEffect, useState } from "react";
import leetcodedata from "../state/context";
import CompareProblems from "./CompareProblems";
import ContestComparison from "./CommonContext";
import User2 from "./User2";
import User1 from "./User1";
import "../styles/ScoreGenerator.css"

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

  const [finalScore1, setFinalScore1] = useState(0);
  const [finalScore2, setFinalScore2] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const calculateRating = async () => {
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

      let scoreDiff = formattedRating2 - formattedRating1;
      let divider = 1.5;

      let score1 = 0;
      while (scoreDiff > 0) {
        score1 += Math.min(100, scoreDiff) / divider;
        scoreDiff -= 100;
        divider += 0.5;
      }

      let score2 = 0;
      scoreDiff = formattedRating2 - formattedRating1;
      scoreDiff *= -1;
      divider = 1.5;
      while (scoreDiff > 0) {
        score2 += Math.min(100, scoreDiff) / divider;
        scoreDiff -= 100;
        divider += 0.5;
      }
      let y = 0;
      if (isMounted) {
        setFinalScore1((prevScore2) => prevScore2 + score2);
        setFinalScore2((prevScore1) => prevScore1 + score1);
        y = 1;
      }
      if (y === 1) {
        calculateBadges();
      }
    };

    const calculateBadges = async () => {
      let score = 0,
        score2 = 0;

      for (let index = 0; index < userBadges.badges.length; index++) {
        if (userBadges.badges[index].displayName === "Knight") {
          score += 25;
        } else if (userBadges.badges[index].displayName === "Guardian") {
          score += 35;
        } else score += 2;
      }

      for (let index = 0; index < userBadges2.badges.length; index++) {
        if (userBadges2.badges[index].displayName === "Knight") {
          score2 += 25;
        } else if (userBadges2.badges[index].displayName === "Guardian") {
          score2 += 35;
        } else score2 += 2;
      }
      let y = 0;
      if (isMounted) {
        setFinalScore1((prevScore1) => prevScore1 + score);
        setFinalScore2((prevScore2) => prevScore2 + score2);
        y = 1;
      }
      if (y === 1) calculateProblem();
    };

    const calculateProblem = async () => {
      let a = userSolved.easySolved,
        b = userSolved.mediumSolved,
        c = userSolved.hardSolved;
      let a2 = userSolved2.easySolved,
        b2 = userSolved2.mediumSolved,
        c2 = userSolved2.hardSolved;

      let score1 = 0,
        score2 = 0;

      score1 += a * 0.25 + b * 1.25 + c * 2.25;
      score2 += a2 * 0.25 + b2 * 1.25 + c2 * 2.25;
      let y = 0;
      if (isMounted) {
        setFinalScore1((prevScore1) => prevScore1 + score1);
        setFinalScore2((prevScore2) => prevScore2 + score2);
        y = 1;
      }
    };

    // Call functions sequentially
    // calculateBadges();
    // calcu/lateProblem();
    calculateRating();

    // Cleanup function to handle component unmounting
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="users" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:'8vh'}}>
        <User2 score={finalScore2}/>
        
        <User1 score={finalScore1}/>
      </div>
      <div>
        <CompareProblems />
      </div>
      <div>
        <ContestComparison
          user1Contests={Contestdata.contestParticipation}
          user2Contests={Contestdata2.contestParticipation}
        />
      </div>
    </>
  );
};

export default Scoregenerator;
