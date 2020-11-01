import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import Card from '../../components/Card/Card';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { getEntriesByDate } from '../../lib/entries';
import { isEmpty } from 'lodash';

export default function DatePage({ tipsOfDay, date }) {
  const { isFallback } = useRouter();

  if (!isFallback && isEmpty(tipsOfDay)) {
    return (
      <Error
        statusCode={404}
        title="We could not find the tips for that day!"
      />
    );
  }

  return (
    <Layout date={date}>
      <Head>
        <title>Tips of {date}</title>
      </Head>

      {isFallback ? (
        <p className="text-green-600 font-semibold text-center">Loading...</p>
      ) : (
        tipsOfDay.map((entry) => (
          <Card
            key={entry[0]}
            content={entry[1].content}
            date={entry[1].date_added}
            tag={entry[1].category}
            href={`/tip/${entry[0]}`}
          />
        ))
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { date } = params;

  try {
    const tipsOfDay = await getEntriesByDate(date);

    return {
      props: { tipsOfDay, date },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}
