import Head from 'next/head';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function Registration() {
  return (
    <>
      <Head>
        <title>Registration — SRVSO</title>
        <meta
          name="description"
          content="Registration opened on October 31, 2021 and has closed."
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Registration</h2>
        <p className="text-lg">
          Registration opened on October 31, 2021 and has closed.
        </p>
      </div>

      <div className="flex flex-col px-8 border border-gray-800 py-7">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">1</span>
          </div>
          <p className="text-gray-400">
            I already have a team of 6 formed from one school.
          </p>
        </div>
        <iframe
          title="2022 SRVSO Registration"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbZ5d-hc0W7CFUxAdRuZv7DoApduASPIp70TnjW2_mVG3_KA/viewform?embedded=true"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
        <div className="flex items-center px-4 py-2 mt-12 text-red-300 bg-red-800 rounded-md gap-x-2">
          <RiErrorWarningLine className="w-6 h-6" />
          <p className="text-sm">
            If the form is not loading, please follow{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbZ5d-hc0W7CFUxAdRuZv7DoApduASPIp70TnjW2_mVG3_KA/viewform?usp=sf_link"
              target="_blank"
              className="font-medium text-red-300 transition-colors hover:text-red-200"
              rel="noopener noreferrer"
            >
              this link
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-col px-8 mt-8 border border-gray-800 py-7">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">2</span>
          </div>
          <p className="text-gray-400">
            I currently don't have a full team of 6 from one school.
          </p>
        </div>
        <iframe
          title="Request to Join an SRVSO-Formed Team"
          src="https://docs.google.com/forms/d/e/1FAIpQLScJDSJPY7032XBGqrmRtPCRVTQorgJLnlYfBWgubOtFB_x0gA/viewform?embedded=true"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
        <div className="flex items-center px-4 py-2 mt-12 text-red-300 bg-red-800 rounded-md gap-x-2">
          <RiErrorWarningLine className="w-6 h-6" />
          <p className="text-sm">
            If the form is not loading, please follow{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScJDSJPY7032XBGqrmRtPCRVTQorgJLnlYfBWgubOtFB_x0gA/viewform?embedded=true"
              target="_blank"
              className="font-medium text-red-300 transition-colors hover:text-red-200"
              rel="noopener noreferrer"
            >
              this link
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
