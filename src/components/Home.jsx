import React, { useContext, useEffect, useState } from "react";
import leetcodedata from "../state/context";
import "../styles/Home.css";
import Contestdetails from "./Contestdetails";
import Solved from "./solved";
import Submission from "./Submission";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

// import Solved from './solved'
const Home = () => {
  const context = useContext(leetcodedata);
  const { fetchUserData, Contestdata, userdata, userBadges, potd } = context;
  const navigate=useNavigate();
  const [userRating, setuserRating] = useState(0.0);
  useEffect(() => {
    fetchUserData();
    if(userdata === ''){
        navigate("/")
    }
    const rating = Contestdata.contestRating;
    const formattedRating =
      rating !== undefined && rating !== null
        ? parseFloat(rating.toFixed(0))
        : null;
    setuserRating(formattedRating);
  }, []);

  const Badge = ({ badge }) => (
    <div key={badge.id}>
      <img
        src={
          badge.displayName === "Knight"
            ? "https://pic.leetcode-cn.com/1605256144-mculET-Knight.gif"
            : badge.icon
        }
        alt={badge.displayName}
        style={{ width: "50px", height: "50px" }}
      />
      <p>{badge.displayName}</p>
      <p>Creation Date: {badge.creationDate}</p>
    </div>
  );

  const UpcomingBadge = ({ upcomingBadge }) => (
    <div key={upcomingBadge.name}>
      <img
        src={upcomingBadge.icon}
        alt={upcomingBadge.name}
        style={{ width: "50px", height: "50px" }}
      />
      <p>{upcomingBadge.name}</p>
    </div>
  );

  const POTDComponent = ({ data }) => {
    const { questionLink, questionTitle, difficulty } = data;

    // Define a style object based on the difficulty
    const difficultyStyle = {
      color:
        difficulty === "Easy"
          ? "green"
          : difficulty === "Medium"
          ? "yellow"
          : "red",
    };

    return (
      <div>
        <div>Haven't solved the POTD yet? Click below to check it out</div>
        <p>
          <a href={questionLink} target="_blank" rel="noopener noreferrer">
            <h2 style={difficultyStyle}>{questionTitle}</h2>
          </a>
        </p>

        <p>Difficulty: {difficulty}</p>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          boxSizing: "border-box",
          width: "100vw",
        }}
      >
        {/* First Div (20vw) */}
        <div
          className="firstdiv box card"
          style={{
            width: "34vw",
            height: "60vh",
            backgroundColor: "lightdark",
            margin: "3vw 2vw 0vw 1vw",
            boxShadow: "0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(to bottom, #333, #000)",
          }}
        >
          <ul className="list-group list-group-flush">
            <img
              src={userdata.avatar!=="https://assets.leetcode.com/users/avatars/avatar_1704517319.png" ? userdata.avatar : "https://leetcode.com/static/images/LeetCode_logo_rvs.png"}
              alt="User Photo"
              style={{
                position: "absolute",
                top: "-0.2vh", 
                left: "-0.2vw",
                width: "6vw",
                height: "13vh",
                borderRadius: "0% 0% 20% 0%",
                border: "0.2vw white solid",
                objectFit: "cover",
              }}
            />
            <a
              className="user"
              style={{ marginLeft: "0%",color:'white' }}
              href={`https://leetcode.com/${userdata.username}`}
              target="_blank"
            >
              {userdata.username}
            </a>
            <br />
            <p>DOB: {userdata.birthday}</p>
            <br />
            <p>{userdata.about}</p>
            <p>RATING: {userRating}</p>
            <br />

            <POTDComponent data={potd} />

            {/* github and linkedin icon */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {userdata.linkedIN && (
                  <a
                    href={userdata.linkedIN}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className=""
                      size="2x"
                      style={{ cursor: "pointer", marginRight: "1vw" }}
                      icon={faLinkedinIn}
                    />
                  </a>
                )}
                {userdata.gitHub && (
                  <a
                    href={userdata.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className=""
                      size="2x"
                      style={{ cursor: "pointer" }}
                      icon={faGithubAlt}
                    />
                  </a>
                )}
              </div>
            </div>
          </ul>
        </div>


        {/* middle div */}

        <div style={{ alignItems: "center" }}>
          <Solved />
        </div>


        {/* third div in first row */}

        <div
          className="box card"
          style={{
            width: "34vw",
            height: "60vh",
            backgroundColor: "lightdark",
            margin: "3vw 2vw 1vw 0vw",
            boxShadow: "0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(to bottom, #333, #000)",
            color: "white",
          }}
        >
          {/* badges on leetcode */}
          <div style={{ overflowY: "scroll" }}>
            <h3>BADGES</h3>
            <h5>Count: {userBadges.badgesCount}</h5>

            <h5>Badges:</h5>
            {/* <div>
              {userBadges &&
                userBadges.badges.map((badge) => (
                  <Badge key={badge.id} badge={badge} />
                ))}
            </div> */}

            {/* <h5>Upcoming Badges:</h5>
            <div>
              {userBadges.upcomingBadges.map((upcomingBadge) => (
                <UpcomingBadge
                  key={upcomingBadge.name}
                  upcomingBadge={upcomingBadge}
                />
              ))}
            </div> */}

            {/* for the active badges */}

            {/* <h5>Active Badge:</h5>
            <Badge badge={userBadges.activeBadge} /> */}
          </div>
        </div>
      </div>

      <div
        className="d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Contestdetails />
      </div>
      <div
        className="d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Submission />
      </div>
    </>
  );
};

export default Home;
