import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import Card from '../../components/Card/Card';
import { getTip } from '../../lib/tip';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { isEmpty } from 'lodash';

export default function TipPage({ tipDetails }) {
  const { isFallback } = useRouter();

  if (!isFallback && isEmpty(tipDetails)) {
    return <Error statusCode={404} title="This tip could not be found" />;
  }

  return (
    <Layout>
      <Head>
        <title>One single tip</title>
      </Head>

      {isFallback ? (
        <p className="text-green-600 font-semibold text-center">Loading...</p>
      ) : (
        <Card
          key={tipDetails.date_added}
          content={tipDetails.content}
          date={tipDetails.date_added}
          tag={tipDetails.category}
        />
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
  const { id } = params;

  try {
    const tipDetails = await getTip(id);

    //TODO: test if the tip does not exist
    return {
      props: { tipDetails },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}
