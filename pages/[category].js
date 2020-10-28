import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import NavLinks from '../components/NavLinks/NavLinks';
import { getCategoryEntries } from '../lib/entries';
import Card from '../components/Card/Card';

export default function CategoryPage({ entries, category }) {
  return (
    <div className="mx-auto font-work text-gray-700">
      <Head>
        <title>{category} tidbits</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <section className="flex flex-col justify-center items-center text-center">
        <NavLinks />

        <div className="mt-16 text-center flex flex-col justify-center items-center">
          {/* <img src="/css3-plain.svg" alt="css3 logo" className="w-1/2" /> */}
          <h2
            className={`mt-3 font-semibold text-2xl sm:text-3xl text-${category}`}
          >
            {category} Tidbits
          </h2>
        </div>
      </section>

      <hr className={`mt-3 bg-${category}-light h-px`} />

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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'js' } },
      { params: { category: 'css' } },
      { params: { category: 'html' } },
      { params: { category: 'git' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let entries;

  switch (params.category) {
    case 'js':
      entries = await getCategoryEntries('js');
      break;

    case 'css':
      entries = await getCategoryEntries('css');
      break;

    case 'html':
      entries = await getCategoryEntries('html');
      break;

    case 'git':
      entries = await getCategoryEntries('git');
      break;

    default:
      break;
  }

  return {
    props: {
      entries,
      category: params.category,
    },
  };
}
