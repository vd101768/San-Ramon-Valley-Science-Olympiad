import Head from 'next/head';

export default function Coaches() {
  return (
    <>
      <Head>
        <title>Coaches — SRVSO</title>
        <meta
          name="description"
          content="The recorded video and slide deck of the coach's seminar."
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Coaches</h2>
        <p className="text-lg">
          The recorded video and slide deck of the coach's seminar.
        </p>
      </div>
      <section className="flex flex-col w-full overflow-hidden h-96">
        <iframe
          title="SRVSO Coach's Seminar"
          src="https://drive.google.com/file/d/1UGZPKF5Nh-BsCGHz3oY4P9EC3z595omi/preview"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="flex-grow border border-gray-700 rounded-md"
        />
        <a
          href="https://drive.google.com/file/d/1UGZPKF5Nh-BsCGHz3oY4P9EC3z595omi/preview"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </section>
      <section className="flex flex-col w-full px-1 py-6 mt-12 overflow-hidden bg-gray-200 rounded-md h-[700px]">
        <iframe
          title="SRVSO Coach's Seminar Slideset"
          src="https://docs.google.com/presentation/d/1RlhH7Y_KTp0NB9L7Kzi3X6D8-Y7U4b3qcEBp8UCXPH8/edit?usp=sharing"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
        <a
          href="https://docs.google.com/presentation/d/1RlhH7Y_KTp0NB9L7Kzi3X6D8-Y7U4b3qcEBp8UCXPH8/edit?usp=sharing"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </section>
    </>
  );
}
