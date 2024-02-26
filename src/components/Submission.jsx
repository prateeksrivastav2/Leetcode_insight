import React, { useEffect, useContext, useState } from 'react';
import leetcodedata from '../state/context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Submission = () => {
  const context = useContext(leetcodedata);
  const { setuseracSubmissiondata,setuserSubmissiondata,useracSubmissiondata, userSubmissiondata, limit, setLimit, usersubmission, useracsubmission } = context;
  const [Question, setQuestion] = useState([]);
  const [Questiondata, setQuestiondata] = useState(userSubmissiondata);
    const [newLimit,setNewLimit]=useState(limit);

  const storeQuestion = () => {
    if (Array.isArray(Questiondata.submission)) {
      for (let submission of Questiondata.submission) {
        setQuestion((prevacQuestion) => {
          return [...prevacQuestion, { title: submission.title, status: submission.statusDisplay }];
        });
      }
    }
  };

  const handleSubmission = () => {
    if (Questiondata === userSubmissiondata) {
      setQuestion([]);
      setQuestiondata(useracSubmissiondata);
    } else {
      setQuestion([]);
      setQuestiondata(userSubmissiondata);
    }
    storeQuestion();
  };
    const usersubmission2 = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            //console.log('abhi limit hai ',limit);
            let url = `http://localhost:6001/api/${storedUsername}/submission?limit=${parseInt(limit)}`;
            try {
                let responseData = await fetch(url);
                let parsedData = await responseData.json();

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

    const useracsubmission2 = async () => {
        let storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            //console.log('abhi limit hai ',limit);
            let url = `http://localhost:6001/api/${storedUsername}/acSubmission?limit=${parseInt(limit)}`;
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
    const handleSubmissionForLimitChange =async () => {
        //console.log('limit change mei toh agay',newLimit)
        let x=parseInt(newLimit,10)
        setLimit(x);
        // setQuestion([]);
        // setQuestiondata(userSubmissiondata)
        await useracsubmission2();
        await usersubmission2();
        setQuestion([]);
        setQuestiondata(userSubmissiondata);
        //console.log(Questiondata)
        storeQuestion();
    };

  const handelquestion = (name) => {
    const naam = name.toLowerCase().replace(/\s+/g, '-');
    window.open(`https://leetcode.com/problems/${naam}/`, '_blank');
  }

  useEffect(() => {
    setQuestion([]);
    storeQuestion();
  }, [Questiondata]);

  const cardStyles = {
    width: '70vw',
    height: 'fit-content',
    background: 'linear-gradient(to bottom, #333, #000)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)',
    borderRadius: '8px',
    margin: '3vw 3vw 0vw 0vw',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'right',
    padding: '0.5rem 0',
    borderBottom: '1px solid #fff',
  };

  const itemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #fff',
    borderRadius: '4px',
    margin: '0.5rem',
    padding: '1rem',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  };

  const itemHoverStyles = {
    backgroundColor: '#555',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const footerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
  };

    return (
        <>
            <div className="card" style={cardStyles}>
                <div className="card-header">
                    <h5>Previous Submission</h5>
                </div>
                <div className="card-body">
                    <div style={containerStyles}>
                        <p>Question</p>
                        <p>Status</p>
                    </div>
                    <div>
                        {Question.map((item, index) => (
                            <div
                                key={index}
                                style={{ ...itemStyles, ...(index % 2 === 0 ? itemHoverStyles : null) }}
                            >
                                <a onClick={() => { handelquestion(item.title) }}>{item.title}</a>
                                <div>
                                    {item.status === "Accepted" && <FontAwesomeIcon className='text-success' style={{ fontSize: '1.3rem' }} icon={faCheck} />}
                                    {item.status !== "Accepted" && <FontAwesomeIcon className='text-danger' style={{ fontSize: '1.3rem' }} icon={faCircleXmark} />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card-footer text-body-secondary">
                    {Questiondata === userSubmissiondata && <a onClick={handleSubmission} className='btn btn-primary'>Ac Submission</a>}
                    {Questiondata !== userSubmissiondata && <a onClick={handleSubmission} className='btn btn-primary'>All Submissions</a>}
                    
                    {/* <label 
                        htmlFor="limit"
                        style={{ color: 'white', marginLeft: "1vw" }}
                    >
                        Limit on submission:
                    </label>
                    <input
                        type="number"
                        id="limit"
                        value={newLimit}
                        min="1"                        
                        onChange={(e) => setNewLimit(parseInt(e.target.value, 10))}
                        placeholder='10(default)'
                    />
                    {/* Add a submit button */}
                    
                </div>
            </div>
        </>
    );
};

export default Submission;
