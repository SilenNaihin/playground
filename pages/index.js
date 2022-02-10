import RenderingArray from "../components/CodingProblems/RenderingArray/RenderingArray";
import MergeSort from "../components/Learning/MergeSort";
import HeapSort from "../components/Learning/HeapSort";
import SynthesisCopy from "../components/Projects/SynthesisCopy";
import TabWrapper from "../components/TabWrapper";
import { useEffect, useState } from "react";

export default function Home() {
  const [currTab, setCurrTab] = useState("RenderingArray");
  // finish this, implement dropdown
  const [tabs, setTabs] = useState({
    problems: {
      RenderingArray: {
        title: "Rendering Array",
        desc: `Solving a coding problem an unconventional way. Code is un-optimized or cleaned, built the concept to prove a 
        concept of speedup over the regular solution. This solution is O(n + n + c) with n being the number of rows and 
        c being the number of columns. The original solution is O(n*c), nested for loops of columns and rows. Given the 
        problem the highest amount of rows is 24, and columns is 6. If we plug in the numbers, O(24 + 24 + 6) = 54 vs 
        O(24*6) = 144. The original is better for less than 3 columns and 10 rows, but for any more than that, my solution is more 
        optimal (https://www.desmos.com/calculator/6cf9lijgwg).`,
      },
    },
    learning: {
      HeapSort: {
        title: "Heap Sort",
        desc: `Heap Sort is a sorting algorithm that works by building a heap from the bottom up. The heap is a binary tree 
        with the root node being the largest value. The heap is then sorted by repeatedly removing the root node and placing it
        at the end of the sorted array. The heap is then rebuilt from the bottom up. This is done by comparing the root node to
        the two children and swapping the root node with the larger of the two children. This process is repeated until the heap
        is empty.`,
      },
      MergeSort: {
        title: "Merge Sort",
        desc: `Merge sort is a sorting algorithm that works by breaking down a list into smaller lists, sorting those lists, and combining them back together.
        This is a very simple implementation of merge sort. It is O(n log n) with n being the number of items in the list.`,
      },
    },
    projects: {
      SynthesisCopy: {
        title: "Synthesis Copy",
        desc: `Challenged to turn a LeetCode interview question into a mobile friendly replica of https://www.synthesis.is/ (the
        website has since changed). Built from scratch in 8 hours using React and TailwindCSS. https://github.com/SilenNaihin/tabular-form`,
      },
    },
  });
  const [category, setCategory] = useState("problems");
  const [CurrentComponent, setCurrentComponent] = useState(<RenderingArray />);

  useEffect(() => {
    setCurrentComponent(<CurrentComponent currTab={currTab} />);
    console.log(CurrentComponent);
  }, [currTab]);

  return (
    <>
      <div className="w-full h-8 flex pb-0.5">
        {console.log(Object.entries(tabs))}
        {Object.entries(tabs).map((category, i) => {
          const categoryName = category[0];
          console.log(Object.entries(category[1]));
          Object.entries(category[1]).map((tab) => {
            const tabComponent = tab[0];
            const tabName = tab[1].title;
            return (
              <div
                className="px-2 bg-gray-100 ml-2 h-full border-b border-r border-l rounded-b"
                onClick={() => setCurrTab(tabComponent)}
                key={i}
              >
                {tabName}
              </div>
            );
          });
          return <div key={categoryName}>{categoryName}</div>;
        })}
        <TabWrapper desc={tabs[category][currTab].desc}>
          <CurrentComponent />
        </TabWrapper>
      </div>
    </>
  );
}
