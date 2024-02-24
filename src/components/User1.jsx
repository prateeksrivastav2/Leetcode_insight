import React, { useContext, useState } from 'react'
import leetcodedata from "../state/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const User1 = (props) => {
    const { score } = props;
    const context = useContext(leetcodedata);
    const { userdata, Contestdata } = context;
    const [userRating, setuserRating] = useState(0.0);
    let rating = parseInt(userRating).toFixed(0);
    const AvgRating = () => {
        return (
            <div>
                {Contestdata.contestAttend !== 0 ?
                    Contestdata.contestRating >= 1500 ?
                        <div style={{color:'green'}}>Average rating INCREASE per contest : {((Contestdata.contestRating - 1500) / Contestdata.contestAttend).toFixed(2)}</div>
                        :
                        <div style={{color:'red'}}>Average rating DECREASE per contest : {((-Contestdata.contestRating + 1500) / Contestdata.contestAttend).toFixed(2)}</div>
                    :
                    ""
                }
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
                    width: "40vw",
                    marginTop: '2vw',
                    // height:'0vh'
                }}
            >
                {/* First Div (20vw) */}
                <div
                    className="firstdiv box card"
                    style={{
                        width: "50vw",
                        height: "50vh",
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
                            src={userdata.avatar !== "https://assets.leetcode.com/users/avatars/avatar_1704517319.png" ?
                                userdata.avatar : "https://leetcode.com/static/images/LeetCode_logo_rvs.png"}
                            alt="User Photo"
                            style={{
                                position: "absolute",
                                top: "-0.2vh",
                                left: "-0.2vw",
                                width: "6vw",
                                height: "13vh",
                                // borderRadius: "0% 0% 20% 0%",
                                border: "0.2vw white solid",
                                objectFit: "cover",
                            }}
                        />
                        <h4 className="user" style={{ marginLeft: "6%" }}>
                            {userdata.username}
                        </h4>
                        <p>{userdata.about} </p>
                        <p style={{display:userdata.birthday === null ? 'none' : ''}}>DOB: {userdata.birthday}</p>
                        <p>Contest rating:{parseInt(Contestdata.contestRating)}</p>
                        <AvgRating />
                        <div style={{ display: "flex",flexDirection:'row-reverse', justifyContent: "space-between" }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                margin:'0.5vh'
                            }}>
                                <a href={userdata.gitHub} target='_blank'
                                style={{display : userdata.gitHub === null ? 'none' : ''}}>
                                    <FontAwesomeIcon
                                        className=""
                                        size="2x"
                                        style={{ cursor: "pointer", marginRight: "1vw" }}
                                        icon={faGithubAlt}
                                    /></a>
                                <a href={userdata.linkedIN} target='_blank'
                                style={{display : userdata.linkedIN === null ? 'none' : ''}}>
                                    <FontAwesomeIcon
                                        className=""
                                        size="2x"
                                        style={{ cursor: "pointer" }}
                                        icon={faLinkedinIn}
                                    /></a>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-success mx-3 my-2">
                                Id Score: {localStorage.getItem("userId")}:{" "}
                                {score.toFixed(2)}
                            </button>
                        </div>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default User1