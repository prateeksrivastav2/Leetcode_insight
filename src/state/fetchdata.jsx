import React, { useState, useEffect } from 'react';
import Leetcodedata from './context';

const FetchData = (props) => {
    const [userdata, setuserdata] = useState([]);
    const [userBadges, setuserBadges] = useState([]);
    const [userSolved, setSolved] = useState([]);
    const [Contestdata, setContestdata] = useState([]);
    const [userSubmissiondata, setuserSubmissiondata] = useState([]);
    const [useracSubmissiondata, setuseracSubmissiondata] = useState([]);
    // const [userdata, setuserdata] = useState([]);
    const [useapionce, setuseapionce] = useState(false);
    let username1 = "Prateeksrivastav703"
    const getuserdata = async () => {
        if (!useapionce) {
            setuseapionce(true);
            let url = `http://localhost:3000/api/${username1}`;
            let urlsolve=`http://localhost:3000/api/${username1}/solved`;
            let urlbadge=`http://localhost:3000/api/${username1}/badges`;
            try {
                let responseData = await fetch(url);
                let responseData2 = await fetch(urlsolve);
                let responseData3 = await fetch(urlbadge);
                let parsedData = await responseData.json();
                let parsedData2 = await responseData2.json();
                let parsedData3 = await responseData3.json();

                console.log('Parsed Data: ', parsedData);
                if (!responseData.ok) throw new Error(parsedData.message);
                if (!responseData2.ok) throw new Error(parsedData.message);
                if (!responseData3.ok) throw new Error(parsedData.message);

                setuserdata(parsedData);
                setSolved(parsedData2);
                setuserBadges(parsedData3);
            } catch (error) {
                console.log('Error fetching data:', error.message);
            }
            contestdata();
            usersubmission();
            useracsubmission();
        }
    };
    const contestdata = async () => {
        // if (!useapionce) {
            // setuseapionce(true);
            let url = `http://localhost:3000/api/${username1}/contest`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                console.log('Parsed Data: ', parsedData);
                if (!responseData.ok) throw new Error(parsedData.message);

                setContestdata(parsedData);
            } catch (error) {
                console.log('Error fetching data:', error.message);
            }
        // }
    };
    const usersubmission = async () => {
        
            let url = `http://localhost:3000/api/${username1}/submission?limit=10`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                console.log('Parsed Data: ', parsedData);
                if (!responseData.ok) throw new Error(parsedData.message);

                setuserSubmissiondata(parsedData);
            } catch (error) {
                console.log('Error fetching data:', error.message);
            }
        // }
    };
    const useracsubmission = async () => {
       
            let url = `http://localhost:3000/api/${username1}/acSubmission?limit=10`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

                console.log('Parsed Data: ', parsedData);
                if (!responseData.ok) throw new Error(parsedData.message);

                setuseracSubmissiondata(parsedData);
            } catch (error) {
                console.log('Error fetching data:', error.message);
            }
        // }
    };

    // useEffect(() => {
    //     console.log('Userdata in useEffect:', userdata);
    // }, [userdata]);

    return (
        <>
         <Leetcodedata.Provider value={{ getuserdata  }}>
            {props.children}
        </Leetcodedata.Provider>
        </>
    );
};

export default FetchData;
