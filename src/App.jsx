import React from "react";
import Navbar from "./components/Navbar/Navbar";

const heroImage =
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_BabitaSinghReporting_Review/cf2aa4b5-3f21-4415-a41a-0e6a6c15c05c._UR3840,1440_SX2160_FMavif_PQ65_.jpeg";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0f171e] text-white">
      <Navbar />
      <div className="-mt-[57px] min-h-screen w-full">
        <img
          src={heroImage}
          alt="Hero Banner"
          className="h-screen w-full object-cover object-center"
        />
      </div>
    </div>
  );
}

export default App;