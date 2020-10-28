import Link from 'next/link';

const NavLinks = () => {
  return (
    <div className="mt-4 flex gap-3">
      <Link href="/javascript">
        <button className="cat-btn js-btn hover:bg-js focus:bg-js active:bg-js">
          javascript
        </button>
      </Link>
      <Link href="/css">
        <button className="cat-btn css-btn hover:bg-css focus:bg-css active:bg-css">
          css
        </button>
      </Link>
      <Link href="/html">
        <button className="cat-btn html-btn hover:bg-html focus:bg-html active:bg-html">
          html
        </button>
      </Link>
      <Link href="/git">
        <button className="cat-btn git-btn hover:bg-git focus:bg-git active:bg-git">
          git
        </button>
      </Link>
    </div>
  );
};

export default NavLinks;
