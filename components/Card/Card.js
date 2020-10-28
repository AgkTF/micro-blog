import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRouter } from 'next/router';

const Card = ({ date, content, tag, href }) => {
  const router = useRouter();

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

  return (
    <div
      className={`p-2 w-3/4 sm:w-4/6 md:w-88 border border-l-4 border-${tag} flex flex-col cursor-pointer shadow-${tag}Light hover:shadow-${tag}`}
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

      <div className="mt-2 prose prose-sm">
        <ReactMarkdown renderers={renderers} children={content} />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div
          className={`px-1 rounded bg-${tag}-light text-${tag} text-xs font-medium`}
        >
          {tag === 'js' ? 'javascript' : tag}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
