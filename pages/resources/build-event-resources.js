import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function BuildEventResources() {
  return (
    <>
      <Head>
        <title> Build Event Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the relevant resources for SRVSO 2022-23"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Resources</h2>
        <p className="text-lg">
          Here's where you can find all the build event resources for SRVSO
          2022-23
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mt-6 text-lg">Build Event Procedures</h3>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Build Event Procedures"
            src="https://docs.google.com/document/d/1lQpYZ7lNUq0EOwuhcM06zo73lumJ5suv4ty1K6Uwjn4/edit"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/1lQpYZ7lNUq0EOwuhcM06zo73lumJ5suv4ty1K6Uwjn4/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">Build Binder Layout</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="https://docs.google.com/document/d/10cD0wL1Ghy0SRou4Y7jIUhFyDVVq7-d9W4ytDCK_h0k/edit?usp=sharing"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/10cD0wL1Ghy0SRou4Y7jIUhFyDVVq7-d9W4ytDCK_h0k/edit?usp=sharing"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
        {/* <h2 className="mb-4">2022 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 4th annual SRVSO was held at Windemere Ranch Middle School in
          April 2022.
        </p> */}
      </div>
    </>
  );
}
