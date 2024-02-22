import React from 'react';

const ContestComparison = ({ user1Contests, user2Contests }) => {
  // Find common contests
  
  const commonContests = user1Contests.filter((contest1) =>
    user2Contests.some((contest2) => contest1.contest.title === contest2.contest.title)
  );


  return (
    <div>
      {commonContests.length===0 ? "kuch ni hai" : ""}
      <h2 style={{color:'w'}}>Common Contests and Rankings</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {commonContests.map((commonContest) => {
          // Find the corresponding contest for user2
          const user2Contest = user2Contests.find(
            (contest2) => contest2.contest.title === commonContest.contest.title
          );

          return (
            <div
              key={commonContest.contest.title}
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '5px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f0f0f0',
              }}
            >
              <div style={{ flex: '1' }}>
                <strong>Contest:</strong> {commonContest.contest.title}
              </div>
              <div style={{ flex: '1' }}>
                <strong>{localStorage.getItem('userId')} Ranking:</strong> {commonContest.ranking}
              </div>
              <div style={{ flex: '1' }}>
                <strong>{localStorage.getItem('userId2')} Ranking:</strong> {user2Contest ? user2Contest.ranking : 'N/A'}
              </div>
              {commonContest.ranking < (user2Contest ? user2Contest.ranking : 0) ? (
                <div style={{ flex: '1', color: 'green' }}>
                  {localStorage.getItem('userId')} has a better rank!
                </div>
              ) : (
                <div style={{ flex: '1', color: 'green' }}>
                  {localStorage.getItem('userId2')} has a better rank!
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContestComparison;
