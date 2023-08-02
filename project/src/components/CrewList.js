import classNames from "classnames";
import { useState } from "react";

function CrewList() {
  const [curCrewMemberIdx, setCurCrewMemberIdx] = useState(0);
  const data = [
    {
      name: "Douglas Hurley",
      designation: "Commander",
      desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "assets/crew/image-douglas-hurley.png",
    },
    {
      name: "MARK SHUTTLEWORTH",
      designation: "Mission Specialist",
      desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "assets/crew/image-mark-shuttleworth.png",
    },
    {
      name: "Victor Glover",
      designation: "PILOT",
      desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: "assets/crew/image-victor-glover.png",
    },
    {
      name: "Anousheh Ansari",
      designation: "Flight Engineer",
      desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "assets/crew/image-anousheh-ansari.png",
    },
  ];

  const handleClick = (idx) => {
    setCurCrewMemberIdx(idx);
  };

  const buttonsList = data.map((elem, idx) => {
    return (
      <div
        key={idx}
        className={classNames("rounded-full", "w-4", "h-4", "cursor-pointer", {
          "bg-gray-400": idx === curCrewMemberIdx,
          "bg-gray-200": idx !== curCrewMemberIdx,
        })}
        onClick={() => {
          handleClick(idx);
        }}
      ></div>
    );
  });

  return (
    <div>
      <div>
        <h2>{data[curCrewMemberIdx].designation.toUpperCase()}</h2>
        <h1>{data[curCrewMemberIdx].name.toUpperCase()}</h1>
        <p>{data[curCrewMemberIdx].desc}</p>
      </div>
      <div>
        <img
          src={data[curCrewMemberIdx].image}
          alt={data[curCrewMemberIdx].name}
        />
      </div>
      <div>{buttonsList}</div>
    </div>
  );
}

export default CrewList;
