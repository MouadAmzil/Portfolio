import React from "react";
import Describtion from "./child/Describtion";
import WhatDoIDo from "./child/WhatDoIDo";
import Gitproject from "./child/Gitproject.jsx";
import Technologies from "./child/Technologies";
import ListItem from "./child/ListItem.jsx";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiGit,
  SiBootstrap,
  SiTailwindcss,
  SiNpm,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiRedux,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

function Home() {
  const [v1, v2, v3, v4, v5, v6] = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis, sapiente neque praesentium ",
    " ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis,",
    "projects I've worked on. In total, the following repos have earnt",
    "building a way to watch & browse the web, together.",
    "software engineer from the Morocco. I'm interested in full stack web development including large scale frontend applic",
    "Rapidly build modern websites without ever leaving your HTML",
  ];

  return (
    <div className="margin-lg-screen ">
      <div className="font-mono">
        <Describtion />
        <WhatDoIDo />
      </div>
      <div className="grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-3">
        <Gitproject value={v1} />
        <Gitproject value={v2} />
        <Gitproject value={v3} />
        <Gitproject value={v4} />
        <Gitproject value={v5} />
        <Gitproject value={v6} />
      </div>
      <div className="font-mono ">
        <Technologies />
        <div className="flex justify-center">
          <ul className="grid grid-cols-3 gap-4 sm:grid-cols-3">
            <ListItem icon={SiHtml5} text={"HTML 5"} />
            <ListItem icon={SiCss3} text={"CSS 3"} />
            <ListItem icon={SiJavascript} text={"JavaScript "} />
            <ListItem icon={SiJquery} text={"JQuery "} />
            <ListItem icon={SiGit} text={"Git "} />
            <ListItem icon={SiBootstrap} text={"Bootstrap "} />
            <ListItem icon={SiTailwindcss} text={"Tailwindcss "} />
            <ListItem icon={SiNpm} text={"NPM "} />
            <ListItem icon={SiNodedotjs} text={"Node.js "} />
            <ListItem icon={SiExpress} text={"Express.js "} />
            <ListItem icon={SiPhp} text={"PHP"} />
            <ListItem icon={SiRedux} text={"Redux.js "} />
            <ListItem icon={SiReact} text={"React.js "} />
            <ListItem icon={SiStyledcomponents} text={"styled-components"} />
            <ListItem icon={SiNextdotjs} text={"Next.js "} />
            <ListItem icon={SiMicrosoftsqlserver} text={"SQL Server "} />
            <ListItem icon={SiMysql} text={"MySql "} />
            <ListItem icon={SiMongodb} text={"Mongodb "} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
