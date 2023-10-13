import React, { useState } from "react";


import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
  const [currentColor, setCurrentColor] = useState("red");
  const [display, setDisplay] = useState("true");
  let light = null


  if (display === true) {
    light = (
      <div className="text-center">
        <div className="stick"></div>
        <div className="stopLight">
         
          <div
            className={currentColor === "red" ? "red light glow" : "red light"}
            onClick={() => setCurrentColor("red")}
          ></div>

          <div
            className={
              currentColor === "yellow" ? "yellow light glow" : "yellow light"
            }
            onClick={() => setCurrentColor("yellow")}
          ></div>
		   <div
            className={
              currentColor === "yellow" ? "yellow light glow" : "yellow light"
            }
            onClick={() => setCurrentColor("yellow")}
          ></div>
          <div
            className={
              currentColor === "green" ? "green light glow" : "green light"
            }
            onClick={() => setCurrentColor("green")}
          ></div>
        </div>
        <button onClick={() => {setDisplay(false)}}>Add Purple Light</button>
      </div>
    );
  }
  else (
light = (
	<div className="text-center">
	<div className="stick"></div>
	<div className="stopLight">
	
	  <div
		className={currentColor === "red" ? "red light glow" : "red light"}
		onClick={() => setCurrentColor("red")}
	  ></div>
	  	  <div
		className={
		  currentColor === "yellow" ? "yellow light glow" : "yellow light"
		}
		onClick={() => setCurrentColor("yellow")}
	  ></div>
	  <div
		className={
		  currentColor === "green" ? "green light glow" : "green light"
		}
		onClick={() => setCurrentColor("green")}
	  ></div>
	   <div
		className={
		  currentColor === "purple" ? "purple light glow" : "purple light"
		}
		onClick={() => setCurrentColor("purple")}
	  ></div>
	</div>
	<button onClick={() => setDisplay(true)}>Remove Purple Light</button>
  </div>
  )
  )

  return (
	<div>
		{light}
	</div>
  );
};

export default Home;