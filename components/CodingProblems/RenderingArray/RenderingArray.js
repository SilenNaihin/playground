import { useEffect, useState } from "react";
import Card from "./Card";

export default function RenderingArray() {
  const data = [
    { id: 0, times: [2, 23] },
    { id: 1, times: [2, 3, 7, 21] },
    { id: 2, times: [2, 6] },
    { id: 3, times: [9, 12, 13, 17] },
    { id: 4, times: [2, 23] },
    { id: 5, times: [9, 17, 22] },
  ];

  let selected = [];

  useEffect(() => {
    Object.entries(data).map(([id, times]) => {
      selected.push(id);
      const timesArray = Object.entries(times)[1][1];
      selected = [...selected, ...timesArray];
    });

    let elements = "";
    let id = "";
    console.log("_______________", selected);
    selected.forEach((item, i) => {
      
      if (typeof item === "string") {
        id = parseInt(item);
      } else {
        elements = document.getElementById(item);
        elements.children.item(0).classList.remove("hidden");
        elements.classList.remove("hidden");
        elements.children.item(id + 1).classList.remove("bg-transparent");
        elements.children.item(id + 1).classList.add("bg-gray-300");
        elements.children.item(id + 1).innerHTML = item + 1;
      }
    });
  },[]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-4/5">
        <div className="flex items-center justify-evenly w-full">
          <div className="opacity-0">0</div>
          <Card first={1} />
          <Card first={2} />
          <Card first={3} />
          <Card first={4} />
          <Card first={5} />
          <Card first={6} />
        </div>
        <div id="0" className="hidden flex items-center justify-evenly w-full">
          <div className="mt-2">1</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="1" className="hidden flex items-center justify-evenly w-full">
          <div className="mt-2">2</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="2" className="hidden flex items-center justify-evenly w-full">
          <div className="mt-2">3</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="3" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">4</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="4" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">5</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="5" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">6</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="6" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">7</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="7" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">8</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="8" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">9</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="9" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">10</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="10" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">11</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="11" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">12</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="12" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">13</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="13" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">14</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="14" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">15</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="15" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">16</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="16" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">17</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="17" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">18</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="18" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">19</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="19" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">20</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="20" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">21</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="21" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">22</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="22" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">23</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id="23" className="flex items-center hidden justify-evenly w-full">
          <div className="mt-2">24</div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
