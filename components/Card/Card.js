const Card = ({ date, content, tag }) => {
  return (
    <div
      className={`p-2 w-72 xs:w-88 border border-l-4 border-${tag} flex flex-col shadow`}
    >
      <div className={`self-end font-medium text-xs text-${tag}`}>
        <span>12 Oct, 2020</span>
      </div>

      <p className="mt-2 text-sm">
        <em>even</em> and <em>odd</em> are keywords that can be used with{' '}
        <span className="font-mono text-pink-700">nth-child(n)</span> to match
        elements with odd or even indexes. The first element has index of 1.
      </p>

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
