import { motion } from "framer-motion";
import CursorTrail from "./Components/CursorTrail";
import { useState } from "react";

const name = "Vishnu Vardhan";

const App = () => {
  const [isCursorTrailActive, setIsCursorTrailActive] = useState(true);

  return (
    <div className="w-full h-screen bg-[#c8c8c8]">
      <CursorTrail isActive={isCursorTrailActive}/>
      <div className="flex flex-col gap-10 items-center justify-center h-full">
        <div className="flex flex-col md:flex-row text-xl gap-5 text-gray-500 font-medium font-sora items-center justify-center">
          <h1 
            className="text-sm z-50" 
            onMouseEnter={() => setIsCursorTrailActive(false)}
            onMouseLeave={() => setIsCursorTrailActive(true)}
          >Hi i am</h1>
          <h1 
            className="font-bold md:text-9xl z-50 text-4xl tracking-tight font-poppins flex flex-wrap justify-center"
            onMouseEnter={() => setIsCursorTrailActive(false)}
            onMouseLeave={() => setIsCursorTrailActive(true)}
          >
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -20 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-[#000000] inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </div>
        
        <div className="z-50 text-center">
          <h1 
            className="text-sm"
            onMouseEnter={() => setIsCursorTrailActive(false)}
            onMouseLeave={() => setIsCursorTrailActive(true)}
          >Full-Stack Dev & AI Nerd</h1>
          <h1 
            onMouseEnter={() => setIsCursorTrailActive(false)}
            onMouseLeave={() => setIsCursorTrailActive(true)}
          >India</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
