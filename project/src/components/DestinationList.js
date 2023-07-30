import { useState } from "react";

function DestinationList() {
  const [curDest, setCurDest] = useState("moon");
  const data = [
    {
      name: "moon",
      desc: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting Luna 2 and Apollo 11 landing sites.",
      avgDist: "384,400 KM",
      estTravelTime: "3 DAYS",
      image: "assets/destination/image-moon.png",
    },
    {
      name: "mars",
      desc: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in out solar system. It's two and a half times the size of Everest!",
      avgDist: "225 MIL. KM",
      estTravelTime: "9 MONTHS",
      image: "assets/destination/image-mars.png",
    },
    {
      name: "europa",
      desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDist: "628 MIL. KM",
      estTravelTime: "3 YEARS",
      image: "assets/destination/image-europa.png",
    },
    {
      name: "titan",
      desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDist: "1.6 BIL. KM",
      estTravelTime: "7 YEARS",
      image: "assets/destination/image-titan.png",
    },
  ];
  const handleClick = (name) => {
    setCurDest(name);
  };
  const renderedKeys = data.map((dest) => {
    return (
      <li key={dest.name} onClick={() => handleClick(dest.name)}>
        <p>{dest.name.toUpperCase()}</p>
      </li>
    );
  });
  const selectedDestData = data.filter((dest) => dest.name === curDest)[0];
  return (
    <div>
      <ul>{renderedKeys}</ul>
      <img src={selectedDestData.image} alt={selectedDestData.name} />
      <div>
        <h1>{selectedDestData.name.toUpperCase()}</h1>
        <p>{selectedDestData.desc}</p>
        <div>
          <h2>AVG. DISTANCE</h2>
          <p>{selectedDestData.avgDist}</p>
        </div>
        <div>
          <h2>EST. TRAVEL TIME</h2>
          <p>{selectedDestData.estTravelTime}</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationList;
