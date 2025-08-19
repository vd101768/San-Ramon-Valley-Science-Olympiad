import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function InstantChallengeResources() {
  return (
    <>
      <Head>
        <title> Instant Challenge Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the instant challenge resources for SRVSO 2022-23"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Resources</h2>
        <p className="text-lg">
          Here's where you can find all the instant challenge resources for
          SRVSO 2022-23
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mt-6 text-lg">Instant Challenge</h3>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Instant Challenge"
            src="https://docs.google.com/document/d/1xHNXYC7u9aARrfY0obKJ8XoHKp6fGvVsrNybgoNfvg0/edit"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/1xHNXYC7u9aARrfY0obKJ8XoHKp6fGvVsrNybgoNfvg0/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">Going Fishing</h3>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Instant Challenge"
            src="https://docs.google.com/document/d/17nO3TO291FpzHsdf-fnmNDMZ6JdJ4x4LtdwZZc0v1N8/edit?usp=sharing"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/17nO3TO291FpzHsdf-fnmNDMZ6JdJ4x4LtdwZZc0v1N8/edit?usp=sharing"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">100th Floor Cathedral</h3>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="100th Floor Cathedral"
            src="https://docs.google.com/document/d/1Pf-RAQqcGTdDNEYSTXhaB-q5rDVVDj2fcLgeiMGsx5E/edit"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/1Pf-RAQqcGTdDNEYSTXhaB-q5rDVVDj2fcLgeiMGsx5E/edit"
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
