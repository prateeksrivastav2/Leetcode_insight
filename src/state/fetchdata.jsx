import React,{useState} from 'react'
import Leetcodedata from "./context";
const fetchdata = (props) => {
    let data = [];
    let username1 = "Prateeksrivastav703"
    const [userdata, setuserdata] = useState(data);
    const getuserdata = async (username) => {
        let url = `https://alfa-leetcode-api.vercel.app/${username1}`
        try {
            let responseData = await fetch(url);
            let parsedData = await responseData.json();



           console.log("Parsed Data: ",parsedData);
            // setanimedata(prevData => [...prevData, parsedData]);


            // await new Promise(resolve => setTimeout(resolve, 2000));

        } catch (error) {
            console.log("not found");
            // await new Promise(resolve => setTimeout(resolve, 1500));
        }
    }

    return (
        <>
         <Leetcodedata.Provider value={{ getuserdata  }}>
            {props.children}
        </Leetcodedata.Provider>
        </>
    )
}

export default fetchdata