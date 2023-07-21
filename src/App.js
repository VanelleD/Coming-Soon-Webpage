import React from "react";

// import clock
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

// clock css
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
// import video
import VideoBg from "../src/assets/video.mp4";

// import css
import "./styles.css";

const App = () => {
  return (
    <section className="page">
      {/* overlay */}
      <div className="overlay"></div>
      {/* video */}
      <video src={VideoBg} autoPlay Loop muted></video>
      {/* content */}
      <div class="page__content">
        <h1>Launching Soon</h1>
        <h3>Keave your email and we'll let you know once the site goes live</h3>
        {/* clock */}
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          className="flip-clock"
          duration={0.5}
        />
        {/* button */}
        <button className="btn">Notify Me</button>
      </div>
    </section>
  );
};

export default App;
