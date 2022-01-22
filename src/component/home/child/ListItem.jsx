import React from "react";

const ListItem = ({ icon, text }) => {
  return (
    <li className="flex space-x-2 font-thin">
      <span>{icon({ className: "h-6 w-6" })}</span>
      <span>{text}</span>
    </li>
  );
};

export default ListItem;
