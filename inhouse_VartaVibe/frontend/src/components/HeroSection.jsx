import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";

export const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Stay Informed
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Stay Ahead
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Your Personalized News, Anytime, Anywhere
      </p>
      <div className="flex justify-center my-10">
        {/* Navigate to the sign-up page */}
        <Link
          to="/SignUp" // Use Link for navigation
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          // onClick={() => console.log('Navigating to SignUp')}
        >
          Start Reading
        </Link>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 shadow-sm shadow-black mx-2 my-4"
        >
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 shadow-sm shadow-black mx-2 my-4"
        >
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
