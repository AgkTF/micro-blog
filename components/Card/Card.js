import { useCallback, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRouter } from 'next/router';
import TweetBtn from '../ShareBtn/ShareBtn';
import Link from 'next/link';

const Card = ({ date, content, tag, href }) => {
  const router = useRouter();
  const [contentText, setContentText] = useState('');

  // Instead of using just Refs here, we used callbackRef
  // to able to be notified when the value of the ref changes and act on it.
  const contentRef = useCallback((node) => {
    if (node !== null) {
      setContentText(node.innerText);
    }
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const clickStopPropagate = (e) => {
    e.stopPropagation();
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
      className={`pt-2 pb-3 px-3 w-3/4 xs:w-88 sm:w-136 border-l-4 border-${tag} flex flex-col cursor-pointer transition-all duration-150 ease-in-out bg-offWhite shadow-${tag}Light hover:shadow-${tag}`}
      onClick={clickHandler}
    >
      <Link href={`/day/${date}`}>
        <div
          className={`px-1 self-end font-medium text-xs text-${tag} rounded hover:bg-gray-300`}
          onClick={clickStopPropagate}
        >
          <span>
            {new Date(date).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
              day: 'numeric',
            })}
          </span>
        </div>
      </Link>

      <div className="mt-2 prose prose-sm" ref={contentRef}>
        {renderedContent}
      </div>

      <div className="mt-5 flex justify-between items-center">
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
