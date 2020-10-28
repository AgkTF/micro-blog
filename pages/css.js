import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import NavLinks from '../components/NavLinks/NavLinks';
import { getCategoryEntries } from '../lib/entries';
import Card from '../components/Card/Card';

export default function CssPage({ entries }) {
  return (
    <div className="mx-auto font-work text-gray-700">
      <Head>
        <title>CSS tidbits</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <section className="flex flex-col justify-center items-center text-center">
        <NavLinks />

        <div className="mt-16 text-center flex flex-col justify-center items-center">
          <img src="/css3-plain.svg" alt="css3 logo" className="w-1/2" />
          <h2 className="mt-3 font-semibold text-2xl sm:text-3xl text-css">
            CSS Tidbits
          </h2>
        </div>
      </section>

      <hr className="mt-3 bg-css-light h-px" />

      <section className="mt-10 flex flex-col gap-4 items-center justify-center">
        {entries.map((entry) => (
          <Card
            key={entry.date_added}
            content={entry.content}
            date={entry.date_added}
            tag={entry.category}
          />
        ))}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const entries = await getCategoryEntries('css');

  return {
    props: {
      entries,
    },
  };
}
