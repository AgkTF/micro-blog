import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLinks = () => {
  const router = useRouter();

  return (
    <div className="mt-4 flex gap-3">
      <Link href="/">
        <a className="hover:text-indigo-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
      </Link>
      <Link href="/js">
        <a
          className={`cat-btn js-btn hover:bg-js focus:bg-js active:bg-js ${
            router.pathname === '/js'
              ? `border-opacity-0 text-offWhite bg-js`
              : ``
          }`}
        >
          javascript
        </a>
      </Link>
      <Link href="/css">
        <a
          className={`cat-btn css-btn hover:bg-css focus:bg-css active:bg-css ${
            router.pathname === '/css'
              ? `border-opacity-0 text-offWhite bg-css`
              : ``
          }`}
        >
          css
        </a>
      </Link>
      <Link href="/html">
        <a
          className={`cat-btn html-btn hover:bg-html focus:bg-html active:bg-html ${
            router.pathname === '/html'
              ? `border-opacity-0 text-offWhite bg-html`
              : ``
          }`}
        >
          html
        </a>
      </Link>
      <Link href="/git">
        <a
          className={`cat-btn git-btn hover:bg-git focus:bg-git active:bg-git ${
            router.pathname === '/git'
              ? `border-opacity-0 text-offWhite bg-git`
              : ``
          }`}
        >
          git
        </a>
      </Link>
      <Link href="/vs">
        <a
          className={`cat-btn vs-btn hover:bg-vs focus:bg-vs active:bg-vs ${
            router.pathname === '/vs'
              ? `border-opacity-0 text-offWhite bg-vs`
              : ``
          }`}
        >
          vs code
        </a>
      </Link>
    </div>
  );
};

export default NavLinks;
