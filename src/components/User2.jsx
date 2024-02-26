import React, { useContext, useState } from 'react'
import leetcodedata from "../state/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const User2 = (props) => {
    const context = useContext(leetcodedata);
    const {score}=props;
    const { userdata2,Contestdata2 } = context;
    // const [userRating, setuserRating] = useState(0.0);

    const AvgRating = () => {
        if(Contestdata2 === undefined) return <div>Loading...</div>;
        return (
            <div>
            {Contestdata2.contestAttend !== 0 ? 
            Contestdata2.contestRating >= 1500 ?
            <div style={{color:'green'}}>Average rating INCREASE per contest : {((Contestdata2.contestRating-1500) / Contestdata2.contestAttend).toFixed(2)}</div>
            :
            <div style={{color:'red'}}>Average rating DECREASE per contest : {((-Contestdata2.contestRating+1500) / Contestdata2.contestAttend).toFixed(2)}</div>
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
                            src={userdata2.avatar !== "https://assets.leetcode.com/users/avatars/avatar_1704517319.png" ?
                                userdata2.avatar : "https://leetcode.com/static/images/LeetCode_logo_rvs.png"}
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
                            {userdata2.username}
                        </h4>
                        <p>{userdata2.about}</p>
                        <p style={{display:userdata2.birthday === null ? 'none' : ''}}>DOB: {userdata2.birthday}</p>
                        <p>Contest rating :{parseInt(Contestdata2.contestRating)}</p>
                        <AvgRating />
                        <div style={{ display: "flex", justifyContent: "space-between",flexDirection:'row-reverse' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                margin:'0.5vh'
                            }}>
                                <a href={userdata2.gitHub} target='_blank'
                                style={{display : userdata2.gitHub === null ? 'none' : ''}}>
                                <FontAwesomeIcon
                                    className=""
                                    size="2x"
                                    style={{ cursor: "pointer", marginRight: "1vw" }}
                                    icon={faGithubAlt}
                                /></a>
                                <a href={userdata2.linkedIN} target='_blank'
                                style={{display : userdata2.linkedIN === null ? 'none' : ''}}>
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
                                Id Score: {localStorage.getItem("userId2")}:{" "}
                                {score.toFixed(2)}
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default User2