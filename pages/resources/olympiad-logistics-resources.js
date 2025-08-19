import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function OlympiadLogisticsResources() {
  return (
    <>
      <Head>
        <title> Olympiad Logistics and FAQ Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the olympiad logistics and FAQ resources for SRVSO 2022-23"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Resources</h2>
        <p className="text-lg">
          Here's where you can find all the olympiad logistics and FAQ resources
          for SRVSO 2022-23
        </p>
      </div>
    
    <h3 className="mt-6 text-lg">Schedule</h3>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Schedule"
            src="https://docs.google.com/spreadsheets/d/1Z-uGld7e6yOm4U3v2AACoshEFpRzQZmNpYuP8IaYZac/edit"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/spreadsheets/d/1Z-uGld7e6yOm4U3v2AACoshEFpRzQZmNpYuP8IaYZac/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

      <div className="mb-12">
        <h3 className="mt-6 text-lg">FAQ Document</h3>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="FAQ Document"
            src="https://docs.google.com/document/d/1ZLzn4jPkmADBjk9YpOHnfXmdev4CCfv6bq42_tYC8ds/edit"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/1ZLzn4jPkmADBjk9YpOHnfXmdev4CCfv6bq42_tYC8ds/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">Pre-Olympiad Meeting Slideshow</h3>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Meeting Slideshow"
            src="https://docs.google.com/presentation/d/1mgwgzqRLD5061-vINQLHkl1biQnG88ziGD78RBNt-0g/edit"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/presentation/d/1mgwgzqRLD5061-vINQLHkl1biQnG88ziGD78RBNt-0g/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
        <h3 className="mt-6 text-lg">Pre-Olympiad Meeting Recording</h3>
        <div className="flex flex-col w-full mt-8 h-3/4">
          <iframe
            // width="560"
            className="text-center"
            src="https://www.youtube.com/embed/92ZFOVTBUB4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          <a
            href="https://youtu.be/92ZFOVTBUB4"
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
