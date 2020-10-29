import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLinks = () => {
  const router = useRouter();

  return (
    <div className="mt-4 flex gap-3">
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
