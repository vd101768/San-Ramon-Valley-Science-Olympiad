import Head from 'next/head';

export default function MeetingPresentationSlides() {
  return (
    <>
      <Head>
        <title>Meeting Presentation Slides — SRVSO</title>
        <meta
          name="description"
          content="The slide decks from our past informational meetings."
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Meeting Presentation Slides</h2>
        <p className="text-lg">
          The slide decks from our past informational meetings.
        </p>
      </div>
      <div className="flex flex-col w-full overflow-hidden h-96">
        <iframe
          title="SRVSO Presentation"
          src="https://docs.google.com/presentation/d/e/2PACX-1vSaO1EsfG4m2G92mzTrgvUBZ4_S7Wqtx1XCwwp7ndQjm01KxH5J6ASryEF79r1urQhTLk5_j06HesVv/embed"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="flex-grow"
        />
        <a
          href="https://docs.google.com/presentation/d/e/2PACX-1vSaO1EsfG4m2G92mzTrgvUBZ4_S7Wqtx1XCwwp7ndQjm01KxH5J6ASryEF79r1urQhTLk5_j06HesVv/embed"
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
