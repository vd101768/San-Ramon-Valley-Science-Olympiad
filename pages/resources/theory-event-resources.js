import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function TheoryEventResources() {
  return (
    <>
      <Head>
        <title> Theory Event Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the theory event resources for SRVSO 2022-23"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Theory Event Resources</h2>
        <p className="text-lg">
          Here's where you can find all the theory event resources for SRVSO
          2022-23
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mt-6 text-lg">Theory Work Ups 22-23</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="https://docs.google.com/document/d/10qw43wElrUTeb-d-ayywS1f-X7KOXPlhpgVqx16Ls6A/edit"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/10qw43wElrUTeb-d-ayywS1f-X7KOXPlhpgVqx16Ls6A/edit"
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
