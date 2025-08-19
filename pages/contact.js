import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — SRVSO</title>
        <meta
          name="description"
          content="Ask questions about the olympiad and get in touch with the team."
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Contact</h2>
        <p className="text-lg">
          Ask questions about the olympiad and get in touch with the team.
        </p>
        <p className="mt-6 text-lg">
          For general inquiries, you can reach us at{' '}
          <a href="mailto:srvso2020@gmail.com" className="underline">
            srvso2020@gmail.com
          </a>
          .
        </p>
        <p className="mt-5 text-lg">
          To receive updates via Remind, text <strong>@srvsoco</strong> to{' '}
          <strong>81010</strong>.
        </p>
      </div>
    </>
  );
}
