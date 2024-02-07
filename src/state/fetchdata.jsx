import React, { useState, useEffect } from 'react';
import Leetcodedata from './context';

const FetchData = (props) => {
    const [userdata, setuserdata] = useState([]);
    const [userBadges, setuserBadges] = useState([]);
    const [userSolved, setSolved] = useState([]);
    const [Contestdata, setContestdata] = useState([]);
    const [userSubmissiondata, setuserSubmissiondata] = useState([]);
    const [useracSubmissiondata, setuseracSubmissiondata] = useState([]);
    const [useapionce, setuseapionce] = useState(false);
    const [potd,setPotd] = useState();
    const [limit,setLimit] = useState(10);

    const fetchUserData = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            console.log("storedUsername");
            console.log(storedUsername);
            try {
                let url = `http://localhost:3000/api/${storedUsername}`;
                let urlsolve = `http://localhost:3000/api/${storedUsername}/solved`;
                let urlbadge = `http://localhost:3000/api/${storedUsername}/badges`;
                let POTD = `http://localhost:3000/api/daily`;

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

                setuserdata(parsedData);
                setSolved(parsedData2);
                setuserBadges(parsedData3);
                setPotd(parsedData4)
            } catch (error) {
                window.location.replace('/');
                console.log('Error fetching data:', error.message);
            }

            await contestdata();
            await usersubmission();
            await useracsubmission();
            setuseapionce(true);
        } else {
            window.location.replace('/');
        }
    };

    const contestdata = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            let url = `http://localhost:3000/api/${storedUsername}/contest`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                if (!responseData.ok) throw new Error(parsedData.message);

                setContestdata(parsedData);
            } catch (error) {
                window.location.replace('/');
                console.log('Error fetching data:', error.message);
            }
        } else {
            window.location.replace('/');
        }
    };

    const usersubmission = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            console.log('abhi limit hai ',limit);
            let url = `http://localhost:3000/api/${storedUsername}/submission?limit=${limit}`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                if (!responseData.ok) throw new Error(parsedData.message);

                setuserSubmissiondata(parsedData);
            } catch (error) {
                window.location.replace('/');
                console.log('Error fetching data:', error.message);
            }
        } else {
            window.location.replace('/');
        }
    };

    const useracsubmission = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            console.log('abhi limit hai ',limit);
            let url = `http://localhost:3000/api/${storedUsername}/acSubmission?limit=${limit}`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                if (!responseData.ok) throw new Error(parsedData.message);

                setuseracSubmissiondata(parsedData);
            } catch (error) {
                window.location.replace('/');
                console.log('Error fetching data:', error.message);
            }
        } else {
            window.location.replace('/');
        }
    };

    return (
        <>
            <Leetcodedata.Provider value={{ fetchUserData, userSolved, userdata, Contestdata, userSubmissiondata, useracSubmissiondata, userBadges ,potd,useracsubmission,usersubmission,setLimit }}>
                {props.children}
            </Leetcodedata.Provider>
        </>
    );
};

export default FetchData;
