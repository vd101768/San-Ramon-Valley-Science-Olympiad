import Head from 'next/head';

export default function RegisterNow() {
  return (
    <>
      <Head>
        <title>Register Now</title>
        <meta
          name="description"
          content="This page contains vital information about registering for the 2024-2025 SRVSO Info Night"
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">2024-25 SRVSO Olympiad Team Registration</h2>
        <p className="text-lg">
          This page contains vital information about registering for the
          2024-2025 SRVSO Olympiad
        </p>
      </div>
      <h3 className="mt-20 text-lg">
        Please review this entire document to understand the registration
        process.
      </h3>
      <div className="flex flex-col w-full h-96">
        <iframe
          title="SRVSO Registration Instructions"
          src="https://docs.google.com/document/d/1lQsHzJdEl8z42N_lCuqECu-zahPiuuzkuWliyJmsE_k/edit?usp=sharing"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="flex-grow"
        />
        <a
          href="https://docs.google.com/document/d/1lQsHzJdEl8z42N_lCuqECu-zahPiuuzkuWliyJmsE_k/edit?usp=sharing"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </div>
      <h3 className="mt-20 text-lg">
        Note: Only Team Coaches Fill Out This Form
      </h3>
      <h3 className="mt-6 text-lg">
        Fill Out This Form To Register Your Team for the Olympiad
      </h3>
      <h3 className="text-md">
        If there is an error, please use the external link
      </h3>
      <section className="flex flex-col w-full px-1 overflow-hidden bg-gray-200 rounded-md py-7 h-96">
        <iframe
          title="SRVSO Registration Form"
          src="https://forms.gle/AgQLtauAZfww1J2F7"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
        <a
          href="https://forms.gle/AgQLtauAZfww1J2F7"
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
