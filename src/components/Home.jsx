import React, { useContext, useEffect,useState } from "react";
import leetcodedata from "../state/context";
import "../styles/Home.css";
import Contestdetails from "./Contestdetails";
import Solved from "./solved";
import Submission from "./Submission";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// import Solved from './solved'
const Home = () => {
    const context = useContext(leetcodedata);
    const { fetchUserData, Contestdata, userdata } = context;
    const [userRating, setuserRating] = useState(0.0);
    useEffect(() => {
        fetchUserData();
        const rating = Contestdata.contestRating;
        const formattedRating = rating !== undefined && rating !== null ? parseFloat(rating.toFixed(0)) : null;
        setuserRating(formattedRating);
    }, []);

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
                        width: "34vw", height: "60vh", backgroundColor: "lightdark", margin: "3vw 2vw 0vw 1vw",
                        boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
                        position: "relative", overflow: "hidden",
                        background: 'linear-gradient(to bottom, #333, #000)',
                    }}
                >
                    <ul className="list-group list-group-flush">
                        <img
                            src={userdata.avatar}  // Replace with the actual path to your image
                            alt="User Photo"
                            style={{
                                position: 'absolute',  // Position the image absolutely within the div
                                top: '-0.2vh',  // Position at the top
                                left: '-0.2vw', // Position at the left
                                width: '6vw',  // Adjust the width as needed
                                height: '13vh',  // Adjust the height as needed
                                borderRadius: '0% 0% 20% 0%',  // Make it round if needed
                                border: "0.2vw white solid",
                                objectFit: "cover"
                            }}
                        />
                        {/* <br /> */}
                        {/* <br /> */}
                        <h4 className="user" style={{marginLeft:"6%"}}>{userdata.username}</h4>
                        <br />
                        {/* <p>Username: {userdata.username}</p> */}
                        {/* <br /> */}
                        <p>DOB: {userdata.birthday}</p>
                        <br />
                        <p>{userdata.about}</p>
                        <br />
                        <p>Rating: {userRating}</p>
                        <br />
                        <FontAwesomeIcon className="" size="2x" style={{cursor:'pointer'}} icon={faGithubAlt} />
                        <FontAwesomeIcon className="" size="2x" style={{cursor:'pointer'}} icon={faLinkedinIn} />
                        {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
                    </ul>
                </div>
                <div style={{ alignItems: "center" }}>
                    <Solved />
                </div>
                <div className="box card" style={{
                    width: "34vw", height: "60vh", backgroundColor: "lightdark", margin: "3vw 2vw 1vw 0vw",
                    boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
                    position: "relative", overflow: "hidden",
                    background: 'linear-gradient(to bottom, #333, #000)',
                    color: "white"
                }}>yaha pe dekhte hai</div>
            </div>

            <div className="d-flex"
                style={{ alignItems: "center", justifyContent: "center" }}>
                <Contestdetails />
            </div>
            <div className="d-flex"
                style={{ alignItems: "center", justifyContent: "center" }}>
                <Submission/>
            </div>
        </>
    );
};

export default Home;