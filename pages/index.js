import RenderingArray from '../components/CodingProblems/RenderingArray/RenderingArray';
import MergeSort from '../components/Learning/MergeSort';
import HeapSort from '../components/Learning/HeapSort';
import SynthesisCopy from '../components/Projects/SynthesisCopy';
import MarkdownCompiler from '../components/CodingProblems/MarkdownCompiler/MarkdownCompiler';
import PotionInterview from '../components/CodingProblems/PotionInterview/PotionInterview';
import { useEffect, useState } from 'react';

const components = {
  RenderingArray: RenderingArray,
  MergeSort: MergeSort,
  HeapSort: HeapSort,
  SynthesisCopy: SynthesisCopy,
  MarkdownCompiler: MarkdownCompiler,
  PotionInterview: PotionInterview,
};

export default function Home() {
  const [currTabName, setCurrTabName] = useState('RenderingArray');
  const [tabs, setTabs] = useState({
    Problems: {
      RenderingArray: {
        title: 'Rendering Array',
        desc: `Solving a coding problem an unconventional way. Code is un-optimized or cleaned, built the concept to prove a 
        concept of speedup over the regular solution. This solution is O(n + n + c) with n being the number of rows and 
        c being the number of columns. The original solution is O(n*c), nested for loops of columns and rows. Given the 
        problem the highest amount of rows is 24, and columns is 6. If we plug in the numbers, O(24 + 24 + 6) = 54 vs 
        O(24*6) = 144. The original is better for less than 3 columns and 10 rows, but for any more than that, my solution is more 
        optimal (https://www.desmos.com/calculator/6cf9lijgwg).`,
      },
      MarkdownCompiler: {
        title: 'Markdown Compiler',
        desc: `Creating a markdown compiler when accounting for blockquotes, strikethroughs, and line breaks.`,
      },
      PotionInterview: {
        title: 'Potion Interview',
        desc: `Dev environment for the Potion interview.`,
      },
    },
    Learning: {
      HeapSort: {
        title: 'Heap Sort',
        desc: `Heap Sort is a sorting algorithm that works by building a heap from the bottom up. The heap is a binary tree 
        with the root node being the largest value. The heap is then sorted by repeatedly removing the root node and placing it
        at the end of the sorted array. The heap is then rebuilt from the bottom up. This is done by comparing the root node to
        the two children and swapping the root node with the larger of the two children. This process is repeated until the heap
        is empty.`,
      },
      MergeSort: {
        title: 'Merge Sort',
        desc: `Merge sort is a sorting algorithm that works by breaking down a list into smaller lists, sorting those lists, and combining them back together.
        This is a very simple implementation of merge sort. It is O(n log n) with n being the number of items in the list.`,
      },
    },
    Projects: {
      SynthesisCopy: {
        title: 'Synthesis Copy',
        desc: `Challenged to turn a LeetCode interview question into a mobile friendly replica of https://www.synthesis.is/ (the
        website has since changed). Built from scratch in 8 hours using React and TailwindCSS. https://github.com/SilenNaihin/tabular-form`,
      },
    },
  });
  const [category, setCategory] = useState('Problems');
  const [openCategory, setOpenCategory] = useState('Problems');

  const CurrentComponent = components[currTabName];

  const clickTab = (categoryName, tabComponent) => {
    setCategory(categoryName);
    setCurrTabName(tabComponent);
  };

  return (
    <div>
      <div className='w-full h-8 flex'>
        {Object.entries(tabs).map((category, i) => {
          const categoryName = category[0];
          const categoryTabs = [];
          let tabName = '';
          let tabComponent = '';

          Object.entries(category[1]).map((tab) => {
            tabComponent = tab[0];
            tabName = tab[1].title;
            categoryTabs.push(
              <div
                className={`mt-2 flex justify-center items-center rounded-b-lg ${
                  categoryName === openCategory ? '' : 'hidden'
                } ${tabComponent === currTabName ? '' : 'bg-gray-100'}`}
              >
                <div
                  className='px-2'
                  onClick={() => clickTab(categoryName, tabComponent)}
                >
                  {tabName}
                </div>
                <div className=' h-2/3 bg-gray-400' style={{ width: '1px' }} />
              </div>
            );
          });

          return (
            <div className='flex' key={categoryName}>
              <div>
                <div className='px-2 ml-2 bg-red-100 h-1 rounded-lg border-b border-r border-l' />
                <div
                  className='px-2 flex justify-center items-center mt-1 bg-red-100 ml-2 h-full border rounded-lg'
                  onClick={() => setOpenCategory(categoryName)}
                >
                  {categoryName}
                </div>
              </div>
              {categoryTabs.map((tab) => tab)}
            </div>
          );
        })}
      </div>
      {console.log(tabs[category], category, openCategory, CurrentComponent)}
      <div className='w-full flex flex-col p-4'>
        <div className='pb-4'>
          <b>Description:</b> {tabs[category][currTabName].desc}
        </div>
        <CurrentComponent />
      </div>
    </div>
  );
}
