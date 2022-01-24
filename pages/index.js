import CodingProblem from "../components/CodingProblem";
import NextOne from "../components/NextOne";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState([<CodingProblem />, <NextOne />]);

  return (
    <>
      <div className="w-full h-8 flex pb-0.5">
        {tabs.map((tab, i) => (
          <div
            className="px-2 bg-gray-100 ml-2 h-full border-b border-r border-l rounded-b"
            onClick={() => setTab(i)}
            key={i}
          >
            {tab.type.name}
          </div>
        ))}
      </div>
      <div className="w-full">{tabs[tab]}</div>
    </>
  );
}
