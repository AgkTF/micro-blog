import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import NavLinks from '../NavLinks/NavLinks';

export default function Layout({ children, home, category, date }) {
  let headerContent;

  if (home) {
    headerContent = (
      <>
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
      </>
    );
  } else if (category) {
    headerContent = (
      <>
        <NavLinks />
        <div className="mt-16 text-center flex flex-col justify-center items-center">
          {/* //TODO: select which image to show */}
          {/* <img src="/css3-plain.svg" alt="css3 logo" className="w-1/2" /> */}
          <h2
            className={`mt-3 font-semibold text-2xl sm:text-3xl text-${category}`}
          >
            <span className="underline uppercase">{category}</span> Tidbits
          </h2>
        </div>
        <hr className={`mt-3 bg-${category}-light h-px w-full`} />
      </>
    );
  } else if (date) {
    headerContent = (
      <>
        <NavLinks />
        <div className="mt-16 text-center flex flex-col justify-center items-center">
          <span className="font-medium text-base md:text-lg">Tips of</span>
          <h2 className="mt-3 font-semibold text-2xl sm:text-3xl">{date}</h2>
        </div>
      </>
    );
  }

  return (
    <div className="mx-auto bg-gray-100 font-work text-gray-700">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A collection of useful tidbits of everything programming create by Agk."
        />
        <meta name="og:title" content="Learning tidbits" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        <Navbar />

        <section className="flex flex-col justify-center items-center text-center">
          {headerContent}
        </section>
      </header>

      <main className="mt-10 flex flex-col gap-4 items-center justify-center">
        {children}
      </main>
    </div>
  );
}