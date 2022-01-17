import React from "react";
import Describtion from "./Describtion";
import WhatDoIDo from "./WhatDoIDo";

function Home() {
  return (
    <div className="py-8">
      <div className="font-mono">
        <Describtion />
        <WhatDoIDo />
      </div>
    </div>
  );
}

export default Home;
