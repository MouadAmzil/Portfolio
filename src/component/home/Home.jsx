import React from "react";
import Describtion from "./Describtion";
import WhatDoIDo from "./WhatDoIDo";

function Home() {
  return (
    <div className="margin-lg-screen ">
      <div className="font-mono">
        <Describtion />
        <WhatDoIDo />
      </div>
    </div>
  );
}

export default Home;
