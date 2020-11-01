import { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRouter } from 'next/router';
import TweetBtn from '../ShareBtn/ShareBtn';

const Card = ({ date, content, tag, href }) => {
  const router = useRouter();
  const [contentText, setContentText] = useState('');

  const contentRef = useCallback((node) => {
    if (node !== null) {
      setContentText(node.innerText);
    }
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={ghcolors}
          language={language}
          children={value}
        />
      );
    },
  };

  const tagNameModifier = (tag) => {
    let updatedTag;

    if (tag === 'js') {
      updatedTag = 'javascript';
    } else if (tag === 'vs') {
      updatedTag = 'vs code';
    } else {
      updatedTag = tag;
    }
    return updatedTag;
  };

  const renderedContent = (
    <ReactMarkdown renderers={renderers} children={content} />
  );

  return (
    <div
      className={`py-2 px-3 w-3/4 xs:w-88 sm:w-136 border-l-4 border-${tag} flex flex-col cursor-pointer transition-all duration-150 ease-in-out bg-offWhite shadow-${tag}Light hover:shadow-${tag}`}
      onClick={clickHandler}
    >
      <div className={`self-end font-medium text-xs text-${tag}`}>
        <span>
          {new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
            day: 'numeric',
          })}
        </span>
      </div>

      <div className="mt-2 prose prose-sm" ref={contentRef}>
        {renderedContent}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div
          className={`px-1 rounded bg-${tag}-light text-${tag} text-xs font-medium`}
        >
          {tagNameModifier(tag)}
        </div>
        <TweetBtn content={contentText} tip_url={href} />
      </div>
    </div>
  );
};

export default Card;
