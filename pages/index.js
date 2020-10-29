import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Card from '../components/Card/Card';
import { getEntries } from '../lib/entries';

export default function Home({ entries }) {
  return (
    <Layout home>
      <Head>
        <title>Learning tidbits | Home</title>
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

export async function getStaticProps() {
  const entries = await getEntries();

  return {
    props: {
      entries,
    },
  };
}
