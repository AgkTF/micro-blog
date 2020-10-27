import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Card = ({ date, content, tag }) => {
  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={solarizedlight}
          language={language}
          children={value}
        />
      );
    },
  };

  const markdown =
    '[`Element.getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) methods returns the size of the element and its position relative to the viewport.';

  return (
    <div
      className={`p-2 w-3/4 sm:w-4/6 md:w-88 border border-l-4 border-${tag} flex flex-col shadow hover:shadow-css`}
    >
      <div className={`self-end font-medium text-xs text-${tag}`}>
        <span>12 Oct, 2020</span>
      </div>

      <div className="mt-2 text-sm">
        <ReactMarkdown renderers={renderers} children={markdown} />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div
          className={`px-1 rounded bg-${tag}-light text-${tag} text-xs font-medium`}
        >
          {tag}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
