import React,{useContext,useState} from 'react'
import leetcodedata from "../state/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const User2 = () => {
    const context = useContext(leetcodedata);
    const { userdata2 } = context;
    const [userRating, setuserRating] = useState(0.0);
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    width: "100vw",
                    marginTop: '2vw'
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
                            src={userdata2.avatar !== "https://assets.leetcode.com/users/avatars/avatar_1704517319.png" ?
                                userdata2.avatar : "https://leetcode.com/static/images/LeetCode_logo_rvs.png"}
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
                            {userdata2.username}
                        </h4>
                        <p>{userdata2.about}</p>
                        <p>DOB: {userdata2.birthday}</p>
                        <p>Rating: {userRating}</p>

                        {/* <POTDComponent data={potd} /> */}

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <FontAwesomeIcon
                                    className=""
                                    size="2x"
                                    style={{ cursor: "pointer", marginRight: "1vw" }}
                                    icon={faGithubAlt}
                                />
                                <FontAwesomeIcon
                                    className=""
                                    size="2x"
                                    style={{ cursor: "pointer" }}
                                    icon={faLinkedinIn}
                                />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default User2