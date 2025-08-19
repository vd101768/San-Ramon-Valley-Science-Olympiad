import Head from 'next/head';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ — SRVSO</title>
        <meta
          name="description"
          content="A FAQ document containing questions that we often get."
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">FAQ</h2>
        <p className="text-lg">
          This is a document containing questions that we often get.
        </p>
      </div>
      <div className="flex flex-col w-full overflow-hidden h-[800px]">
        <iframe
          title="SRVSO FAQ"
          src="https://docs.google.com/document/d/14aM2sioacuNmCxU6v5XQ61o9XfUIK8p7dwkh-TwVJ-4"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="flex-grow"
        />
        <a
          href="https://docs.google.com/document/d/14aM2sioacuNmCxU6v5XQ61o9XfUIK8p7dwkh-TwVJ-4"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </div>
    </>
  );
}
