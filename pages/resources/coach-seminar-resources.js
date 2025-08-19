import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function CoachSeminarResources() {
  return (
    <>
      <Head>
        <title> Coach Seminar Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the coach seminar resources for SRVSO 2022-23"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Resources</h2>
        <p className="text-lg">
          Here's where you can find all the coach seminar resources for SRVSO
          2022-23
        </p>
      </div>

      <h3 className="mt-6 text-lg">Ongoing Revision Document</h3>
      <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
        <iframe
          title="100th Floor Cathedral"
          src="https://docs.google.com/document/d/1kGKMLO_IFfjuofyyMt6gYXHjWJqPwu8w02fOBDvqNS8/edit"
          className="flex-grow"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <a
          href="https://docs.google.com/document/d/1kGKMLO_IFfjuofyyMt6gYXHjWJqPwu8w02fOBDvqNS8/edit"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </div>

      <div className="mb-12">
        <h3 className="mt-6 text-lg">Coach Seminar Recording</h3>
        <div className="flex flex-col w-full mt-8 h-3/4">
          <iframe
            src="https://www.youtube.com/embed/2Jkff4GjY-Y"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />

          <a
            href="https://drive.google.com/file/d/1g1rt8C4-e0GHijLCVvbOugPEiiJflWHS/view?usp=sharing"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">Coach Seminar Slideshow</h3>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Coach Seminar Slideshow"
            src="https://docs.google.com/presentation/d/1BWCf6aSb2jhby0JQZwUL7Eg-mLxUeXgCFBawQNAn7zg/edit"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/presentation/d/1BWCf6aSb2jhby0JQZwUL7Eg-mLxUeXgCFBawQNAn7zg/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div>
    </>
  );
}
