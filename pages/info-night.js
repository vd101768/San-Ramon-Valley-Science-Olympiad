import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function InfoNight() {
  return (
    <>
      <Head>
        <title>Info Night Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the relevant resources for SRVSO's Info Night 2024-25"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Info Night Resources</h2>
        <p className="text-lg">
          Here's where you can find all the relevant resources for SRVSO's Info
          Night 2024-25
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mt-12 text-lg">Watch the Info Night</h3>
        <section className="flex flex-col w-full px-1 overflow-hidden bg-gray-200 rounded-md py-7 h-96">
          <iframe
            title="2024-25 SRVSO Information Night Recording"
            src="https://www.youtube.com/watch?v=Tz9fI4Hps2A"
            marginHeight="0"
            marginWidth="0"
            className="flex-grow"
          />
          <a
            href="https://www.youtube.com/watch?v=Tz9fI4Hps2A"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </section>
        <h3 className="mt-12 text-lg">Information Release Form</h3>
        <section className="flex flex-col w-full px-1 overflow-hidden bg-gray-200 rounded-md py-7 h-96">
          <iframe
            title="SRVSO Information Release Form"
            src="https://forms.gle/uBdRqqcxD8AywDmf7"
            marginHeight="0"
            marginWidth="0"
            className="flex-grow"
          />
          <a
            href="https://forms.gle/uBdRqqcxD8AywDmf7"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </section>
      </div>

      <h3 className="mt-20 text-lg">
        Parent Contact Information for Team Formation
      </h3>
      <section className="flex flex-col w-full px-1 overflow-hidden bg-gray-200 rounded-md py-7 h-96">
        <iframe
          title="SRVSO Team Formation Contact Formation"
          src="https://docs.google.com/spreadsheets/d/1u3vmKALth45a85bgfN-raZk2TpffiMCJI8lyiD5FkIw/edit?usp=sharing"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
        <a
          href="https://docs.google.com/spreadsheets/d/1u3vmKALth45a85bgfN-raZk2TpffiMCJI8lyiD5FkIw/edit?usp=sharing"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </section>

      {/* <h3 className="mt-6 text-lg">Info Night Recorded Presentation</h3>
      <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
        <iframe
          title="Info Night Recorded Presentation"
          src="https://drive.google.com/file/d/1z7sJcvTXpfHcOIHW10L062fSBUYHiADE/view?t=9s"
          className="flex-grow"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <a
          href="https://drive.google.com/file/d/1z7sJcvTXpfHcOIHW10L062fSBUYHiADE/view?t=9s"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </div> */}
      <h3 className="mt-6 text-lg">Slideshow</h3>
      <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
        <iframe
          title="Info Night Slideshow"
          src="/documents/infonight.pdf"
          className="flex-grow"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <a
          href="https://docs.google.com/presentation/d/1u0ImtXyGUCtY4TgiTp3uoRCniqyiZRM3_piJR_v027k/edit?usp=sharing"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </div>

      {/* <div className="mb-12">
        <h2 className="mb-4">2021 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 3rd annual SRVSO was held online in March 2021.
        </p>
        <h3 className="text-lg">Images</h3>
        <Carousel
          className="relative mt-2 sm:mt-12"
          autoplay
          pauseOnHover
          swiping
          wrapAround
        >
          <img
            src="/images/carousel/DSC_0055_3_15.jpg"
            alt="Carousel"
            className="object-contain"
          />
          <Image
            src="/images/carousel/DSC_0084_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
        <h3 className="mt-6 text-lg">Results</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/2021 San Ramon Valley Science Olympiad Score Release.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="/documents/2021 San Ramon Valley Science Olympiad Score Release.pdf"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div> */}

      {/* <div className="mb-12">
        <h2 className="mb-4">2020 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 2nd annual SRVSO was held online in May 2020.
        </p>
        <h3 className="text-lg">Images</h3>
        <Carousel
          className="relative mt-2 sm:mt-12"
          autoplay
          pauseOnHover
          swiping
          wrapAround
        >
          <img
            src="/images/carousel/DSC_0055_3_15.jpg"
            alt="Carousel"
            className="object-contain"
          />
          <Image
            src="/images/carousel/DSC_0084_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
        <h3 className="mt-6 text-lg">Results</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/2020 San Ramon Valley Science Olympiad Score Release.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="/documents/2020 San Ramon Valley Science Olympiad Score Release.pdf"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div> */}

      {/* <div className="mb-12">
        <h2 className="mb-4">2019 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 1st annual SRVSO was held at Dougherty Valley High School in April
          2019.
        </p>
        <h3 className="text-lg">Images</h3>
        <Carousel
          className="relative mt-2 sm:mt-12"
          autoplay
          pauseOnHover
          swiping
          wrapAround
        >
          <img
            src="/images/carousel/DSC_0055_3_15.jpg"
            alt="Carousel"
            className="object-contain"
          />
          <Image
            src="/images/carousel/DSC_0084_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0089_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0207_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0232_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0238_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0309_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0315_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0320_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0483_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
        <h3 className="mt-6 text-lg">
          <a
            href="https://drive.google.com/file/d/13Y2B6ch1quXKbUTTueKREkZ36zc5Kx4z/view"
            target="_blank"
            className="mt-4 underline"
            rel="noopener noreferrer"
          >
            Results
          </a>
        </h3>
      </div> */}
    </>
  );
}
