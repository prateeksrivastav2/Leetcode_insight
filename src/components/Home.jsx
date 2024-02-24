import React, { useContext, useEffect, useState } from "react";
import "../styles/Home.css";
import Contestdetails from "./Contestdetails";
import Solved from "./solved";
import Submission from "./Submission";
import leetcodedata from "../state/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const context = useContext(leetcodedata);
  const { fetchUserData, Contestdata, userdata, userBadges, potd } = context;
  const [userRating, setuserRating] = useState(0.0);

  useEffect(() => {
    console.log("agaye use effect mei home.jsx");
    fetchUserData();
    const rating = Contestdata.contestRating;
    const formattedRating =
      rating !== undefined && rating !== null
        ? parseFloat(rating.toFixed(0))
        : null;
    setuserRating(formattedRating);
  }, []);

  const Badge = ({ badge }) => {
    const getMonthImage = (monthNumber) =>
      `https://leetcode.com/static/images/badges/dcc-2023-${monthNumber}.png`;

    return (
      <div key={badge.id}>
        {badge.displayName === "Jan LeetCoding Challenge" ? (
          <img
            src={getMonthImage(1)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Feb LeetCoding Challenge" ? (
          <img
            src={getMonthImage(2)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Mar LeetCoding Challenge" ? (
          <img
            src={getMonthImage(3)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Apr LeetCoding Challenge" ? (
          <img
            src={getMonthImage(4)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "May LeetCoding Challenge" ? (
          <img
            src={getMonthImage(5)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Jun LeetCoding Challenge" ? (
          <img
            src={getMonthImage(6)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Jul LeetCoding Challenge" ? (
          <img
            src={getMonthImage(7)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Aug LeetCoding Challenge" ? (
          <img
            src={getMonthImage(8)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Sep LeetCoding Challenge" ? (
          <img
            src={getMonthImage(9)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Oct LeetCoding Challenge" ? (
          <img
            src={getMonthImage(10)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Nov LeetCoding Challenge" ? (
          <img
            src={getMonthImage(11)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Dec LeetCoding Challenge" ? (
          <img
            src={getMonthImage(12)}
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Knight" ? (
          <img
            src="https://pic.leetcode-cn.com/1605256144-mculET-Knight.gif"
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : badge.displayName === "Guardian" ? (
          <img
            src="https://leetcode.com/static/images/badges/guardian.png"
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        ) : (
          <img
            src={
              badge.icon.startsWith("/static")
                ? "https://leetcode.com${badge.icon}"
                : badge.icon
            }
            alt={badge.displayName}
            style={{ width: "50px", height: "50px" }}
          />
        )}
        <p>{badge.displayName}</p>
        <p>Creation Date: {badge.creationDate}</p>
      </div>
    );
  };

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
    if (!data) {
      return <div>No POTD data available</div>;
    }
    const {
      questionLink,
      date,
      questionId,
      questionFrontendId,
      questionTitle,
      titleSlug,
      difficulty,
      isPaidOnly,
      question,
      exampleTestcases,
      topicTags,
      hints,
      solution,
      companyTagStats,
      likes,
      dislikes,
      similarQuestions,
    } = data;

    return (
      <div>
        <div style={{ fontSize: "1.5rem" }}>
          Haven't solved the POTD yet? Click below to check it out
        </div>
        <div style={{ margin: "1vw" }}>
          <a href={questionLink} target="_blank" rel="noopener noreferrer">
            <h5>{questionTitle}</h5>
          </a>
        </div>
        <div style={{ fontSize: "1rem", margin: "0.5vh" }}>
          Difficulty: {difficulty}
        </div>
        {Contestdata.contestAttend !== 0 ? (
          Contestdata.contestRating >= 1500 ? (
            <div>
              Average rating increase per contest :{" "}
              {(
                (Contestdata.contestRating - 1500) /
                Contestdata.contestAttend
              ).toFixed(2)}
            </div>
          ) : (
            <div>
              Average rating decrease per contest :{" "}
              {(
                (-Contestdata.contestRating + 1500) /
                Contestdata.contestAttend
              ).toFixed(2)}
            </div>
          )
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <>
      <div
        className="userInfo"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          boxSizing: "border-box",
          width: "100vw",
          marginTop: "2vw",
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
              src={
                userdata.avatar !==
                "https://assets.leetcode.com/users/avatars/avatar_1704517319.png"
                  ? userdata.avatar
                  : "https://leetcode.com/static/images/LeetCode_logo_rvs.png"
              }
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
            <h4 className="user" style={{ marginLeft: "6%" }}>
              {userdata.username}
            </h4>
            <p>{userdata.about}</p>
            <p style={{ display: userdata.birthday === null ? "none" : "" }}>
              DOB: {userdata.birthday}
            </p>

            <POTDComponent data={potd} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0.5vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: userdata.linkedIN === null ? "none" : "" }}
                >
                  <a href={userdata.linkedIN} target="_blank">
                    <FontAwesomeIcon
                      className=""
                      size="2x"
                      style={{ cursor: "pointer", marginRight: "1vw" }}
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
                <div
                  style={{ display: userdata.gitHub === null ? "none" : "" }}
                >
                  <a href={userdata.gitHub} target="_blank">
                    <FontAwesomeIcon
                      className=""
                      size="2x"
                      style={{ cursor: "pointer" }}
                      icon={faGithubAlt}
                    />
                  </a>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div
          className="middlediv"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Solved />
        </div>

        <div
          className="box card"
          style={{
            width: userBadges && userBadges.badgesCount !== 0 ? "34vw" : "0px",
            height: userBadges && userBadges.badgesCount !== 0 ? "60vh" : "0px",
            padding: userBadges && userBadges.badgesCount !== 0 ? "1%" : "0px",
            backgroundColor: "lightdark",
            margin: "3vw 2vw 1vw 0vw",
            boxShadow: "0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(to bottom, #333, #000)",
            color: "white",
          }}
        >
          {userBadges && userBadges.badgesCount !== 0 && (
            <div style={{ overflowY: "scroll" }}>
              <h3>BADGES</h3>
              <>
                <h5>Count: {userBadges.badgesCount}</h5>

                <h5>Badges:</h5>
                <div>
                  {userBadges.badges
                    ? userBadges.badges.map((badge) => (
                        <Badge key={badge.id} badge={badge} />
                      ))
                    : null}
                </div>

                {/* <h5>Upcoming Badges:</h5>
                <div>
                    {userBadges.upcomingBadges
                        ? userBadges.upcomingBadges.map((upcomingBadge) => (
                              <UpcomingBadge
                                  key={upcomingBadge.name}
                                  upcomingBadge={upcomingBadge}
                              />
                          ))
                        : null}
                </div> */}
              </>
            </div>
          )}
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
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "3vw",
        }}
      >
        <Submission />
      </div>
    </>
  );
};

export default Home;
