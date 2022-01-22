import React from "react";

function Footer() {
  return (
    <div className="paddnigFooter">
      <div className="border-t-2 px-5 pt-4 pb-20">
        <h1 className="text-3xl font-bold">Mouad Amzil</h1>
        <h2 className="text-xl">
          Software Engineer • {new Date().getFullYear()}
        </h2>
      </div>
    </div>
  );
}

export default Footer;
