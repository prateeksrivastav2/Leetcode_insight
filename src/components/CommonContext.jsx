import React from "react";

const ContestComparison = ({ user1Contests, user2Contests }) => {
  // Check if either user1Contests or user2Contests is undefined
  if (!user1Contests || !user2Contests) {
    return null; // or return some default UI or loading indicator
  }

  // Find common contests
  const commonContests = user1Contests.filter((contest1) =>
    user2Contests.some(
      (contest2) => contest1.contest.title === contest2.contest.title
    )
  );

  return (
    <div style={{ color: "white", backgroundColor: "black",marginTop:'10vh'}}>
      {commonContests.length === 0 ? (
        <div style={{ color: "white" }}>kuch common contests ni hai</div>
      ) : (
        <>
        <h2 style={{ color: "white" }}>Common Contests and Rankings</h2>
        <div style={{width:"100vw",display:'flex',justifyContent:'center',alignItems:'center' }}>
          <table
            style={{
              color: "white",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th>Contest</th>
                <th>{localStorage.getItem("userId")}'s Rank</th>
                <th>{localStorage.getItem("userId2")}'s Rank</th>
              </tr>
            </thead>
            <tbody>
              {commonContests.map((commonContest) => {
                // Find the corresponding contest for user2
                const user2Contest = user2Contests.find(
                  (contest2) =>
                    contest2.contest.title === commonContest.contest.title
                );

                const user1Ranking = commonContest.ranking;
                const user2Ranking = user2Contest
                  ? user2Contest.ranking
                  : "N/A";

                return (
                  <tr
                    key={commonContest.contest.title}
                    style={{
                      width: "80vw",
                      margin: "5px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "linear-gradient(to bottom, #333, #000)", // Background color for each row

                      boxShadow: "0 4px 8px rgba(0.1, 0.1, 0.3, 0.8)",
                      borderRadius: "8px",
                    }}
                  >
                    <td style={{ color: "white", backgroundColor: "black" }}>
                      {commonContest.contest.title}
                    </td>
                    <td
                      style={{
                        color: user1Ranking < user2Ranking ? "green" : "white",
                        backgroundColor: "black",
                      }}
                    >
                      {user1Ranking}
                    </td>
                    <td
                      style={{
                        color: user2Ranking < user1Ranking ? "green" : "white",
                        backgroundColor: "black",
                      }}
                    >
                      {user2Ranking}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div></>
      )}
    </div>
  );
};

export default ContestComparison;
