import { useState } from "react";
import Card from "./CodingProblem/Card";

export default function CodingProblem() {
  const data = [
    { id: 0, times: [2, 23] },
    { id: 1, times: [2, 3, 7, 21] },
    { id: 2, times: [2, 6] },
    { id: 3, times: [9, 12, 13, 17] },
    { id: 4, times: [2, 23] },
    { id: 5, times: [9, 17, 22] },
  ];

  const selected = [];

  const createSchedule = () => {
    Object.entries(data).map(([id, times]) => {
      selected.push(id);
      const timesArray = Object.entries(times)[1][1];
      selected = [...selected, ...timesArray];
    });
    console.log(selected);

    const elements = '';
    selected.forEach((item, i) => {
      if (typeof item === "string") {
        elements = document.getElementById(item).children;
      } else {
        elements.item(item).classList.remove("bg-transparent");
        elements.item(item).classList.add("bg-gray-300");
        elements.item(item).innerHTML = item;
      }
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <button onClick={createSchedule}>Create sssssssssssssssSchedule</button>
      <div className="flex w-4/5">
        <div className="flex flex-col justify-center items-center w-1/6">
          1
          <div id="0">
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/6">
          2
          <div
            id="1"
            className="flex flex-col justify-center items-center w-1/6"
          >
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/6">
          3
          <div id="2" className="flex flex-col w-1/6">
            <Card />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/6">
          4
          <div id="3" className="flex flex-col w-1/6">
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/6">
          5
          <div id="4" className="flex flex-col w-1/6">
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/6">
          6
          <div id="5" className="flex flex-col w-1/6">
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
            <Card number={null} show={false} />
          </div>
        </div>
      </div>
      {/* {createSchedule()} */}
    </div>
  );
}
