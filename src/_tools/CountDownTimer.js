import { useEffect, useState } from "react";

let CountDownTImer = () => {
  // USE STATE creating Time
  //Input measured in seconds
  //TODO update state for input
  let [time, setTime] = useState(500);

  // Input value for timer to count down
  // Seprate input values for hours mintunes seconds
  let [hrs, setHrs] = useState(0);
  let [mins, setMins] = useState(0);
  let [secs, setSec] = useState(0);


  // HandleInput
  let handleInput = (e) => {

  }// Timer Subnmit for input value
  let submitInput = (e) => {

  }


  // USE EFFECT Timer Lopgic
  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  // Start of return UI
  //TODO put input box
  return (
    <div className="CountDownTimer">
      <p>
        Time Left:
        {`${Math.floor(time / 60)}`.padStart(2, 0)}
        {`${time % 60}`.padStart(2, 0)}
      </p>

      <p>
        <input className="hrInput" />
        <input className="minInput" />
        <input className="secInput" />
      </p>
    </div>
  );
};

export default CountDownTImer;
