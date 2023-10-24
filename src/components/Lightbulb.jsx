import { useState } from "react";

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [bulbOnOff, setBulbOnOff] = useState(false);

  const toggleLight = () => {
    // Toggle the on/off state
    setBulbOnOff(!bulbOnOff);
    console.log("Clicked");
  };
  return (
    <div className="lightbulb-container">

      <div className= {bulbOnOff ? "lightbulb on" : "lightbulb off"} onClick={toggleLight}>
        <div className="bulb">  
          
        </div>
      </div>
    </div>
  );
};
