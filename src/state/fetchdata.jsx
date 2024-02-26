import React, { useState, useEffect } from 'react';
import Leetcodedata from './context';

const FetchData = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [userdata, setuserdata] = useState([]);
    const [userBadges, setuserBadges] = useState([]);
    const [userSolved, setSolved] = useState([]);
    const [Contestdata, setContestdata] = useState([]);
    const [userSubmissiondata, setuserSubmissiondata] = useState([]);
    const [useracSubmissiondata, setuseracSubmissiondata] = useState([]);
    // const [useapionce, setuseapionce] = useState(false);
    const [potd,setPotd] = useState();
    const [limit,setLimit] = useState(10);

    const [userdata2, setuserdata2] = useState([]);
    const [userBadges2, setuserBadges2] = useState([]);
    const [userSolved2, setSolved2] = useState([]);
    const [Contestdata2, setContestdata2] = useState([]);
    // const [useapionce2, setuseapionce2] = useState(false);
    const fetchUserData = async () => {
        const storedUsername = String((localStorage.getItem('userId')).trim());
        if (storedUsername) {
            // //console.log("storedUsername");
            // //console.log(storedUsername);
            try {
                let url =`https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}`; // Dynamically generate URL based on storedUsername
                let urlsolve = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}/solved`;
                let urlbadge = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}/badges`;
                let POTD = `https://alfa-leetcode-api-kohz.onrender.com/daily`;
    
                let responseData = await fetch(url);
                let responseData2 = await fetch(urlsolve);
                let responseData3 = await fetch(urlbadge);
                let responseData4 = await fetch(POTD);

    
                let parsedData = await responseData.json();
                let parsedData2 = await responseData2.json();
                let parsedData3 = await responseData3.json();
                let parsedData4 = await responseData4.json();
    
                if (!responseData.ok) throw new Error(parsedData.message);
                if (!responseData2.ok) throw new Error(parsedData2.message);
                if (!responseData3.ok) throw new Error(parsedData3.message);
                // //console.log(parsedData2);
    
                setuserdata(parsedData);
                setSolved(parsedData2);
                setuserBadges(parsedData3);
                setPotd(parsedData4);
            } catch (error) {
                window.location.replace('/');
                //console.log('Error fetching data:', error.message);
            }
    
            await  contestdata();
            usersubmission();
            useracsubmission();
            // setuseapionce(true);
        } else {
            window.location.replace('/');
        }
    };
    
    const contestdata = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            let url = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}/contest`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                if (!responseData.ok) throw new Error(parsedData.message);

                setContestdata(parsedData);
            } catch (error) {
                window.location.replace('/');
                //console.log('Error fetching data:', error.message);
            }
        } else {
            window.location.replace('/');
        }
    };

    const usersubmission = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            let url = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}/submission?limit=10`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();
                // //console.log(parsedData);

                if (!responseData.ok) throw new Error(parsedData.message);

                setuserSubmissiondata(parsedData);
            } catch (error) {
                window.location.replace('/');
                //console.log('Error fetching data:', error.message);
            }
        } else {
            window.location.replace('/');
        }
    };

    const useracsubmission = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            let url = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}/acSubmission?limit=10`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                if (!responseData.ok) throw new Error(parsedData.message);

                setuseracSubmissiondata(parsedData);
            } catch (error) {
                window.location.replace('/');
                //console.log('Error fetching data:', error.message);
            }
        } else {
            window.location.replace('/');
        }
    };
    const fetchUserData2 = async () => {
        let storedUsername = localStorage.getItem('userId2');
        if (storedUsername) {
            // //console.log("storedUsername");
            // //console.log(storedUsername);
            try {
                let url = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}`;
                let urlsolve = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}/solved`;
                let urlbadge = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}/badges`;
                // let POTD = `https://alfa-leetcode-api-kohz.onrender.com/daily`;

                let responseData = await fetch(url);
                let responseData2 = await fetch(urlsolve);
                let responseData3 = await fetch(urlbadge);
                // let responseData4 = await fetch(POTD);

                let parsedData = await responseData.json();
                let parsedData2 = await responseData2.json();
                let parsedData3 = await responseData3.json();
                // let parsedData4 = await responseData4.json();

                if (!responseData.ok) throw new Error(parsedData.message);
                if (!responseData2.ok) throw new Error(parsedData2.message);
                if (!responseData3.ok) throw new Error(parsedData3.message);

                setuserdata2(parsedData);
                setSolved2(parsedData2);
                setuserBadges2(parsedData3);
            } catch (error) {
                window.location.replace('/');
                //console.log('Error fetching data:', error.message);
            }

            await contestdata2();
            // setuseapionce(true);
        } else {
            window.location.replace('/');
        }
    };

    const contestdata2 = async () => {
        let storedUsername = localStorage.getItem('userId2');
        if (storedUsername) {
            let url = `https://alfa-leetcode-api-kohz.onrender.com/${storedUsername}/contest`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                if (!responseData.ok) throw new Error(parsedData.message);

                setContestdata2(parsedData);
                // //console.log(parsedData);
            } catch (error) {
                window.location.replace('/');
                //console.log('Error fetching data:', error.message);
            }
            localStorage.removeItem('userId2');
        } else {
            window.location.replace('/');
        }
    };

    return (
        <>
            <Leetcodedata.Provider value={{ setuserSubmissiondata,setuseracSubmissiondata, usersubmission,useracsubmission,setLimit,fetchUserData,fetchUserData2, userSolved, userdata, Contestdata, userSubmissiondata, useracSubmissiondata, userBadges ,potd ,userSolved2, userdata2, Contestdata2, userBadges2 ,expanded,setExpanded}}>
                {props.children}
            </Leetcodedata.Provider>
        </>
    );
};

export default FetchData;
