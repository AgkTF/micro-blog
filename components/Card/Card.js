import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Card = ({ date, content, tag }) => {
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

  // const markdown =
  //   "The only falsy values in JS are\r\n\r\n  - Zero (**0**)\r\n  - Empty Strings `''`\r\n  - `Undefined`\r\n  - `NaN`\r\n  - `null`\r\n  - false\r\n  While empty arrays, empty functions and empty objects always evaluate to **true**.\r\n  ~~~js\r\n  import '../styles/tailwind.css';\r\n\r\n  function MyApp({ Component, pageProps }) {\r\n    return <Component {...pageProps} />;\r\n  }\r\n\r\n  export default MyApp;\r\n  ~~~";

  const markdown =
    'The `change` event works (_fires_) in a way that depends on the element being changed and how the user interacts with it.\r\n\r\n- For inputs with type `checkbox` or `radio`, when the element is **:checked**.\r\n- For inputs with type `date` of `files`, when the user selects a date from a date picker or selects a file for `<input type="file" >`.\r\n- Selecting a value from a `select` dropdown menu.\r\n- When the element **loses focus** after its value has changed, for `<input type="text" >` and `<textarea>`.\r\n\r\n  > This works totally different from the _synthetic change event_ in **React** which fires with each change in the value of the input or the textarea. This behavior is identical to normal browser events `input` and `keyup`.';

  return (
    <div
      className={`p-2 w-3/4 sm:w-4/6 md:w-88 border border-l-4 border-${tag} flex flex-col shadow hover:shadow-css`}
    >
      <div className={`self-end font-medium text-xs text-${tag}`}>
        <span>12 Oct, 2020</span>
      </div>

      <div className="prose prose-sm">
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
