import "./index.css";
import Button from "./Button";
import React from "react";

function App() {
  const [darkMode, setd] = React.useState(false);
  const handlemode = () => {
    setd(!darkMode);
  };
  return (
    <div
      className={`${
        darkMode
          ? "dark flex flex-col justify-center items-center gap-6 m-32 h-full relative left-4 w-auto p-4 xs:w-full xs:-left-32 top-28 sm:-top-4 md:w-full md:-left-32 md:top-32 lg:-top-16 lg:w-auto lg:-left-2 lg:h-full "
          : "flex flex-col justify-center items-center gap-6 m-32 relative left-4 w-auto p-4 xs:w-full xs:-left-32 top-24 sm:-top-4 md:w-full md:-left-32 md:top-32 lg:-top-16 lg:w-auto lg:-left-2 lg:h-full"
      }`}
    >
      <div className="grid grid-cols-2 gap-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUaDwee9MidubQaMHU_WMn4j2-5ouqIdKtg&s"
          alt="img"
          className="border-2 border-black shadow-[2px_2px_14px_white] transition-all hover:skew-y-12 md:h-full lg:h-80"
        />
        <img
          src="https://img.freepik.com/free-photo/cute-panda_677411-2505.jpg"
          alt="img"
          className="border-2 border-black shadow-[2px_2px_14px_white] transition-all hover:skew-y-12 lg:h-80"
        />
      </div>
      <Button darkMode={darkMode} handlemode={handlemode} />
      <br />
    </div>
  );
}

export default App;
