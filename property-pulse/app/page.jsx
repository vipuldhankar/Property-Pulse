import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

const Homepage = () => {
  return (
    <div>
    <Hero/>
    <InfoBoxes/>
    <HomeProperties/>
    </div>
  );
};

export default Homepage;
