import CodingProblem from "../components/CodingProblem";
import NextOne from "../components/NextOne";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(0);
  // finish this, implement dropdown
  const [tabs, setTabs] = useState([
    [
      <CodingProblem />,
      `Solving a coding problem an unconventional way. Code is un-optimized or cleaned, built the concept to prove a 
      concept of speedup over the regular solution. This solution is O(n + n + c) with n being the number of rows and 
      c being the number of columns. The original solution is O(n*c), nested for loops of columns and rows. Given the 
      problem the highest amount of rows is 24, and columns is 6. If we plug in the numbers, O(24 + 24 + 6) = 54 vs 
      O(24*6) = 144. The original is better for less than 3 columns and 10 rows, but for any more than that, my solution is more 
      optimal (https://www.desmos.com/calculator/6cf9lijgwg).`,
    ],
    [<NextOne />, "Nothing here yet"],
  ]);

  return (
    <>
      <div className="w-full h-8 flex pb-0.5">
        {tabs.map((tab, i) => (
          <div
            className="px-2 bg-gray-100 ml-2 h-full border-b border-r border-l rounded-b"
            onClick={() => setTab(i)}
            key={i}
          >
            {tab[0].type.name}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col">
        <p className="ml-2 my-2">{tabs[tab][1]}</p>
        {tabs[tab][0]}
      </div>
    </>
  );
}
