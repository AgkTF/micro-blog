import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import NavLinks from '../../components/NavLinks/NavLinks';
import Card from '../../components/Card/Card';
import { getTip } from '../../lib/tip';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { isEmpty } from 'lodash';

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

export default function TipPage({ tipDetails }) {
  const { isFallback } = useRouter();

  if (!isFallback && isEmpty(tipDetails)) {
    return <Error statusCode={404} title="This tip could not be found" />;
  }

  return (
    <div className="mx-auto font-work text-gray-700">
      <Head>
        <title>One single tip</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <section className="flex flex-col justify-center items-center text-center">
        <NavLinks />
      </section>

      <hr className={`mt-3 bg-gray-300 h-px`} />

      <section className="mt-10 flex flex-col gap-4 items-center justify-center">
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
      </section>
    </div>
  );
}
