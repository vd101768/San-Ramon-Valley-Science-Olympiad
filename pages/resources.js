import React, { useState, useEffect } from "react";
import Head from "next/head";
import { FaSun, FaMoon } from "react-icons/fa";

const Resource = ({ title, url, style }) => (
  <div className="flex flex-col w-full mt-4 overflow-hidden h-96">
    <h4 className="mb-2 ml-3 text-lg" style={{ ...style }}>
      {title}
    </h4>
    <iframe
      title={title}
      src={url}
      className="flex-grow"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
    <a
      href={url}
      target="_blank"
      className="mt-2 text-sm text-center underline"
      rel="noopener noreferrer"
    >
      External link
    </a>
  </div>
);

const Dropdown = ({ title, isOpen, onClick, children, style }) => (
  <tr>
    <td colSpan="2" className="p-4 border border-gray-300">
      <h3
        className="text-lg font-bold cursor-pointer"
        onClick={onClick}
        style={{ ...style }}
      >
        {title} {isOpen ? "▲" : "▼"}
      </h3>
      {isOpen && <div className="flex flex-col mt-4">{children}</div>}
    </td>
  </tr>
);

const InfoNight = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const handleDropdownChange = (dropdown) => {
    setSelectedDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown,
    );
  };

  const isDropdownOpen = (dropdown) => selectedDropdown === dropdown;

  const [isDark, setIsDark] = useState(false);

  // Set dark class on <html> for Tailwind dark: support (not used for styles anymore)
  // Load theme from local storage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // Cleanup function to remove the class when the component unmounts
    return () => html.classList.remove("dark");
  }, [isDark]);

  // Apply global theme styles to the body element
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#e5e7eb" : "#18181b";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  // Theme toggle handler
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-8 z-50 p-2 rounded-full shadow transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <FaSun className="text-white text-xl" />
        ) : (
          <FaMoon className="text-gray-800 text-xl" />
        )}
      </button>
      <Head>
        <title> Relevant Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the relevant resources for SRVSO 2024-25"
        />
      </Head>

      <div className="mb-12">
        <h1
          className="mb-4"
          style={{
            color: isDark ? "#fff" : "#000",
            alignSelf: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Resources
        </h1>
        <p
          className="text-lg"
          style={{
            alignSelf: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Here's where you can find all the relevant resources for SRVSO
          2025-26!
        </p>
        <p className="mt-7 text-md" style={{ textAlign: "center" }}>
          Please note that SRVSO reserves the right to make changes to these
          resources. In the event of changes, coaches will be notified.
        </p>
      </div>

      <table className="w-full mb-12 border border-collapse border-gray-300">
        <tbody>
          <Dropdown
            title="Olympiad Day Logistics"
            isOpen={isDropdownOpen("olympiadDayLogistics")}
            onClick={() => handleDropdownChange("olympiadDayLogistics")}
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Master Olympiad Schedule
            </h4>
            <iframe
              src="https://docs.google.com/spreadsheets/d/15q_XIbAL2nd5fCFryu-PRw6BOai_VYGswzvvRyF-y5I/edit?usp=sharing"
              width="100%"
              height="500"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
              allowFullScreen
            ></iframe>
            <a
              href="https://docs.google.com/spreadsheets/d/15q_XIbAL2nd5fCFryu-PRw6BOai_VYGswzvvRyF-y5I/edit?usp=sharing"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Build Event Walkthroughs
            </h4>
            <iframe
              src="https://docs.google.com/document/d/17btWHSuwL9mH8jE5q7Slaq5YOK9xr-9hH5lRlQrhda4/edit?usp=sharing"
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/17btWHSuwL9mH8jE5q7Slaq5YOK9xr-9hH5lRlQrhda4/edit?usp=sharing"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Instant Challenge Walkthroughs
            </h4>
            <iframe
              src="https://docs.google.com/document/d/1TVA2Ppiz8sVYK9E2iVwjGSgvEVfDQVXI6ZZ6rZiKCk4/edit?usp=sharing "
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1TVA2Ppiz8sVYK9E2iVwjGSgvEVfDQVXI6ZZ6rZiKCk4/edit?usp=sharing"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>
          </Dropdown>
          <Dropdown
            title="Coach Seminar Resources"
            isOpen={isDropdownOpen("coachSeminars")}
            onClick={() => handleDropdownChange("coachSeminars")}
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Pre-Olympiad Logistics Meeting Slideshow
            </h4>
            <iframe
              src="https://docs.google.com/presentation/d/14QWckJoARGd-OS4YMEZMWqVsbfKyAI2lokEEgU9zGYA/edit?usp=sharing"
              width="100%"
              height="500"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
              allowFullScreen
            ></iframe>
            <a
              href="https://docs.google.com/presentation/d/14QWckJoARGd-OS4YMEZMWqVsbfKyAI2lokEEgU9zGYA/edit?usp=sharing"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Pre-Olympiad Logistics Meeting
            </h4>
            <iframe
              src="https://www.youtube.com/embed/CU1QYK2Q5Gc?si=kZjWILw1Iso6R404"
              width="100%"
              height="500"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
              allowFullScreen
            ></iframe>
            <a
              href="https://www.youtube.com/embed/CU1QYK2Q5Gc?si=kZjWILw1Iso6R404"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              FAQ & Coach Updates Meeting Recording
            </h4>
            <iframe
              src="https://www.youtube.com/embed/-GLqo8_dUzc?si=oMoSGrkhlPRQZpRG"
              width="100%"
              height="500"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
              allowFullScreen
            ></iframe>
            <a
              href="https://www.youtube.com/embed/-GLqo8_dUzc?si=oMoSGrkhlPRQZpRG"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              FAQ & Coach Updates Meeting Slideshow
            </h4>

            <iframe
              src="https://docs.google.com/presentation/d/15WwXGjtP9T2yZ3P6BrVWaQDLOc-p5NetX-6T8rySCL0/edit?usp=sharing"
              width="100%"
              height="500"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
              allowFullScreen
            ></iframe>
            <a
              href="https://docs.google.com/presentation/d/15WwXGjtP9T2yZ3P6BrVWaQDLOc-p5NetX-6T8rySCL0/edit?usp=sharing"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Introductory Coach Seminar Recording
            </h4>
            <iframe
              src="https://www.youtube.com/embed/-xZEW0fngnw?si=Y9eBz-LAL4pVN1n9"
              width="100%"
              height="500"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
              allowFullScreen
            ></iframe>
            <a
              href="https://www.youtube.com/embed/-xZEW0fngnw?si=Y9eBz-LAL4pVN1n9"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Introductory Coach Seminar Slideshow
            </h4>
            <iframe
              src="https://docs.google.com/presentation/d/1SLhRLChhHmaxK26CI3qnBpZNCs1TqJEjNrrO7ZVNKzg/edit?slide=id.p#slide=id.p"
              width="100%"
              height="500"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
              allowFullScreen
            ></iframe>
            <a
              href="https://docs.google.com/presentation/d/1SLhRLChhHmaxK26CI3qnBpZNCs1TqJEjNrrO7ZVNKzg/edit?slide=id.p#slide=id.p"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>
          </Dropdown>
          <Dropdown
            title="General Olympiad Resources"
            isOpen={isDropdownOpen("generalResources")}
            onClick={() => handleDropdownChange("generalResources")}
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Coach Seminar FAQs
            </h4>
            <iframe
              src="https://docs.google.com/document/d/1Vk6C32QkV93pw-VMLX30-PhSRh66CvmNiJlcItHqB2k/edit?tab=t.0"
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1Vk6C32QkV93pw-VMLX30-PhSRh66CvmNiJlcItHqB2k/edit?tab=t.0"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>
          </Dropdown>
          <Dropdown
            title="Build Event Resources"
            isOpen={isDropdownOpen("build")}
            onClick={() => handleDropdownChange("build")}
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Build Event Procedures
            </h4>
            <iframe
              src="https://docs.google.com/document/d/1tV1jr4R05IpW0ZWDmgahAf3VxPJ2bYNmilWy91WacrA/edit?tab=t.0"
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1tV1jr4R05IpW0ZWDmgahAf3VxPJ2bYNmilWy91WacrA/edit?tab=t.0"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Build Binder Layout
            </h4>
            <iframe
              src="https://docs.google.com/document/d/1J8dDc8uTCE225gWCvLivkefEuNI_8t7L3ioiVj9XC3I/edit?tab=t.0"
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1J8dDc8uTCE225gWCvLivkefEuNI_8t7L3ioiVj9XC3I/edit?tab=t.0"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>

            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Build Events Ongoing Revisions
            </h4>
            <iframe
              src="https://docs.google.com/document/d/1tFc4TswybvLJO7yuCYYE_LrwKM-uEUKXmDXEp2uifNc/edit?tab=t.0"
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1tFc4TswybvLJO7yuCYYE_LrwKM-uEUKXmDXEp2uifNc/edit?tab=t.0"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>
          </Dropdown>

          <Dropdown
            title="Theory Event Resources"
            isOpen={isDropdownOpen("theoryWorkUps")}
            onClick={() => handleDropdownChange("theoryWorkUps")}
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Theory Work Ups 2025-26
            </h4>
            <iframe
              src="https://docs.google.com/document/d/1IiZmQiAQoXtjMVo8fYPRAEmkCQnAdmnShVGvUa7dDEk/edit?tab=t.0"
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1IiZmQiAQoXtjMVo8fYPRAEmkCQnAdmnShVGvUa7dDEk/edit?tab=t.0"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>
          </Dropdown>

          <Dropdown
            title="Instant Challenge Resources"
            isOpen={isDropdownOpen("challenges")}
            onClick={() => handleDropdownChange("challenges")}
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Beat the Breeze Practice Event
            </h4>
            <iframe
              src="https://docs.google.com/document/d/1AuO5spWsxL4K-mHmvBD6KW4FdTioxKgF0gxmTFaqG4U/edit?tab=t.0"
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1AuO5spWsxL4K-mHmvBD6KW4FdTioxKgF0gxmTFaqG4U/edit?tab=t.0"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>
            <h4
              className="mb-2 ml-3 text-lg sm:text-base"
              style={{ color: isDark ? "#4ade80" : "#166534" }}
            >
              Straw Up! Practice Event
            </h4>
            <iframe
              src="https://docs.google.com/document/d/1LZhouNRmMHrk3LGtpg4sAjyvVrrn79axVe30wwl7AqI/edit?tab=t.0"
              width="100%"
              height="1000"
              className="sm:h-64"
              style={{
                border: isDark ? "4px solid #4ade80" : "4px solid #166534",
                borderRadius: 20,
              }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1LZhouNRmMHrk3LGtpg4sAjyvVrrn79axVe30wwl7AqI/edit?tab=t.0"
              target="_blank"
              className="mt-2 text-sm text-center underline"
              rel="noopener noreferrer"
            >
              External link
            </a>
          </Dropdown>
        </tbody>
      </table>
    </div>
  );
};

export default InfoNight;
