import React from "react";
import heroImage from "../assets/Frame 1.png"; // Updated path

function Hero() {
  return (
    <div className="Hero">
      <img src={heroImage} alt="Hero" className="animate-fadeIn" />
      <div>
        <h1 className="animate-fadeIn shadows-into-light-regular text-center mb-4 mx-auto max-w-3xl">
          building up yourselves upon your most holy faith, praying in the Holy
          Spirit, Keep yourselves in the love of God, awaiting the mercy of our
          Lord Jesus Christ unto eternal life. - Jude 20 and 21
        </h1>
      </div>
    </div>
  );
}

export default Hero;
