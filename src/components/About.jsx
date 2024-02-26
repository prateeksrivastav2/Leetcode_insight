import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const footerStyles = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
      };
  return (
    <div
      className="about"
      style={{
        marginTop: "8vh",
        color: "white",
        fontSize: "0.9rem",
        background: "linear-gradient(to left, #333, #000)",
        padding: "2vw",
      }}
    >
      <b>Welcome to LeetCode visualizer</b>
      <br />
      <br />
      At LeetCode visualizer, we believe in the power of coding and continuous
      improvement. Our platform is designed to provide LeetCode enthusiasts with
      valuable insights into their coding journey, fostering growth and
      collaboration within the community.
      <br />
      <br />
      <b>Our Mission</b>
      <br />
      Our mission is to empower users to track their LeetCode progress,
      understand their strengths and weaknesses, and connect with like-minded
      individuals. We aim to create a supportive environment where users can
      learn, compete, and grow together.
      <br />
      <br />
      <b>Key Features</b>
      <br />
      - <b>LeetCode Data Retrieval:</b> Easily retrieve your LeetCode user
      data, including rating, problems solved, and contest history.
      <br />
      - <b>Comparator:</b> Compare your progress with other users.
      <br />
      - <b>Contest Performance:</b> Dive into detailed analyses of your
      performance in LeetCode contests, track your rating changes, and explore
      average problems solved.
      <br />
      <br />
      <b>Development Journey</b>
      <br />
      LeetCode visualizer was born out of a passion for coding and a desire to
      create a platform that adds value to the LeetCode community. Throughout
      our development journey, we've faced challenges and learned valuable
      lessons, but our commitment to providing a top-notch user experience has
      remained unwavering.
      <br />
      <br />
      <b>Benefits for Users</b>
      <br />
      - Gain insights into your LeetCode performance.
      <br />
      - Identify strengths and weaknesses in problem-solving.
      <br />
      <br />
      <b>Future Plans</b>
      <br />
      We're continuously working on enhancing your experience on LeetCode
      visualizer. Stay tuned for upcoming features and improvements that will
      further enrich your coding exploration.
      <br />
      <br />
      <b>Get in Touch</b>
      <br />
      Have questions, suggestions, or just want to say hello? Feel free to reach
      out to us on LinkedIn:
      <br />
      <div style={{ display: "flex", gap: "1vw",justifyContent:'center' }}>
        <div>
          <a
            href="https://www.linkedin.com/in/prateek-srivastav-9131aa21b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap:'1vw'
            }}
          >
            <FontAwesomeIcon
              className=""
              size="2x"
              style={{ cursor: "pointer" }}
              icon={faLinkedinIn}
            />
            Prateek Srivastav
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/suyash-rawat-547876212/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap:'1vw'
            }}
          >
            <FontAwesomeIcon
              className=""
              size="2x"
              style={{ cursor: "pointer" }}
              icon={faLinkedinIn}
            />
            Suyash Rawat
          </a>
        </div>
      </div>
      <br />
      <br /> Happy Leetcoding!
      <br />
      <br />
      <br />
      <footer className="text-white" style={footerStyles}>
          <p>
            Copyright @ PsSr
          </p>
        </footer>
    </div>
  );
};

export default About;
