import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Link from 'next/link';
import Card from '../components/Card/Card';

export default function Home() {
  return (
    <div className="mx-auto font-work text-gray-700">
      <Head>
        <title>Learning tidbits | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>

      <section className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-3xl sm:text-4xl">
          Welcome{' '}
          <span className="inline-block text-2xl sm:text-3xl animate-wiggle">
            🖐
          </span>
        </h1>
        <p className="text-xs xs:text-sm">
          Learning goes on, one tip at a time
        </p>

        <div className="mt-4 flex gap-3">
          <Link href="/javascript">
            <button className="cat-btn js-btn hover:bg-js">javascript</button>
          </Link>
          <Link href="/css">
            <button className="cat-btn css-btn hover:bg-css">css</button>
          </Link>
          <Link href="/html">
            <button className="cat-btn html-btn hover:bg-html">html</button>
          </Link>
          <Link href="/git">
            <button className="cat-btn git-btn hover:bg-git">git</button>
          </Link>
        </div>
      </section>

      <main className="mt-8 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl xs:text-3xl md:text-4xl">
          Latest Entries
        </h2>

        <Card tag="css" />
      </main>
    </div>
  );
}
