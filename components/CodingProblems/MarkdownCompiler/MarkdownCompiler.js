import { useEffect, useState } from 'react';

export default function MarkdownCompiler() {
  const [markdownInput, setMarkdownInput] = useState(`This is a paragraph. 

And this is a paragraph that has 
some line breaks and a blockquote 
> in the latter half. And nothing 
> else besides some more filler. 
\n
There is also an additional final line with 
some ~~strikethrough~~.
`);

  function compileMarkdown() {
    let newInput = markdownInput.slice(0);

    let strikeChecker = false;

    while (newInput.includes('~~')) {
      newInput = newInput.replace('~~', strikeChecker ? '</s>' : '<s>', 1);
      strikeChecker = !strikeChecker;
    }

    newInput = newInput.replace('\n\n', '<br><br>');
    newInput = newInput.split('\n');

    const inputLines = [];
    let elementStore = '';

    newInput.forEach((element, i) => {
      console.log(inputLines);
      if (element.indexOf('>') === 0) {
        elementStore = `${elementStore}${element.slice(1)}`;
        if (i === newInput.length - 1 || newInput[i + 1].indexOf('>') !== 0) {
          // if a single blockquote and only one line append it
          inputLines.push(`<blockquote>${elementStore}</blockquote>`);
          elementStore = '';
          console.log(i, '1_________', inputLines);
        }
      } else {
        inputLines.push(element);
      }
    });

    newInput = inputLines.join('<br>');
    setMarkdownInput(newInput);
  }

  useEffect(() => {
    if (markdownInput) {
      compileMarkdown();
    }
  }, [markdownInput]);

  return (
    <div style={{ width: '50vw', margin: '0 auto' }}>
      <textarea
        style={{ width: '100%', border: '1px solid black', height: '20vh' }}
        placeholder='type here'
        onChange={(e) => setMarkdownInput(e.target.value)}
      />
      <p>{markdownInput}</p>
    </div>
  );
}
