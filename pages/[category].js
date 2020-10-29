import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { getCategoryEntries } from '../lib/entries';
import Card from '../components/Card/Card';

export default function CategoryPage({ entries, category }) {
  return (
    <Layout category={category}>
      <Head>
        <title>{category} tidbits</title>
      </Head>

      {entries.map((entry) => (
        <Card
          key={entry[0]}
          content={entry[1].content}
          date={entry[1].date_added}
          tag={entry[1].category}
          href={`/tip/${entry[0]}`}
        />
      ))}
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'js' } },
      { params: { category: 'css' } },
      { params: { category: 'html' } },
      { params: { category: 'git' } },
      { params: { category: 'vs' } },
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

    case 'vs':
      entries = await getCategoryEntries('vs');
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
