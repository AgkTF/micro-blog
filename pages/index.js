import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import NavLinks from '../components/NavLinks/NavLinks';
import Card from '../components/Card/Card';
import { getEntries } from '../lib/entries';

export default function Home({ entries }) {
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

        <NavLinks />
      </section>

      <main className="mt-8 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl xs:text-3xl md:text-4xl">
          Latest Entries
        </h2>

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
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const entries = await getEntries();

  return {
    props: {
      entries,
    },
  };
}
