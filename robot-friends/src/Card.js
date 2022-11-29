import React, { Component } from "react";
import "./card.css";

const Card = ({ robot }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const robotsMap = robot.map((robot, i) => {
    return (
      <div
        key={i}
        className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 "
      >
        <img
          src={`https://robohash.org/${getRandomInt(100)}?size=200x200 `}
          alt={robot.name}
        />
        <div>
          <h2>{robot.name}</h2>
          <p>{robot.email}</p>
        </div>
      </div>
    );
  });

  return (
    //   <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    //     <img src="https://robohash.org/test?size=200x200 " alt="a robot" />
    //     <div>
    //       <h2>Jane Doe</h2>
    //       <p>jane.doe@gmail.com</p>
    //     </div>
    //   </div>
    <>{robotsMap}</>
  );
};

export default Card;
