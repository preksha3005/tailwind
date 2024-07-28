import React from "react";
import "./index.css";

const Button = ({ darkMode, handlemode }) => {
  return (
    <div>
      <button
        onClick={handlemode}
        className={`${
          darkMode
            ? "border border-white p-2 transition-all hover:-translate-y-1 hover:scale-110 xs:w-40 text-xl sm:w-44 md:w-60 md:text-2xl mt-8"
            : "border border-black p-2 transition-all hover:-translate-y-1 hover:scale-110 xs:w-40 text-xl sm:w-44 md:w-60 md:text-2xl mt-8"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/*<span className="animate-ping absolute inline-flex h-1/2 w-1/2 rounded-full bg-sky-400 opacity-75"></span>*/}
    </div>
  );
};

export default Button;
//border border-black p-2
