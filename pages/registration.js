import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaExternalLinkAlt } from 'react-icons/fa';

const Resource = ({ title, url, style, ye, width, height }) => (
  <div className="flex flex-col w-full mt-4 overflow-hidden h-96">
    <h4 className="mb-2 ml-3 text-lg" style={{...style}}>{title}</h4>
    <iframe
      title={title}
      src={url}
      width={width}
      height={height}
      className="flex-grow"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      style={{...ye}}
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

const Dropdown = ({ title, isOpen, onClick, children, style}) => (
  <tr>
    <td colSpan="2" className="p-4 border border-gray-300" >
      <h3 className="text-lg font-bold cursor-pointer" onClick={onClick} style={{...style }}>
        {title} {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && <div className="flex flex-col mt-4">{children}</div>}
    </td>
  </tr>
);

export default function Registration() {
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const handleDropdownChange = (dropdown) => {
    setSelectedDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown
    );
  };

  const isDropdownOpen = (dropdown) => selectedDropdown === dropdown;

  const [isDark, setIsDark] = useState(false);

  // Set dark class on <html> for Tailwind dark: support (not used for styles anymore)
  // Load theme from local storage on initial render
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setIsDark(savedTheme === 'dark');
  }
}, []);

  useEffect(() => {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  // Cleanup function to remove the class when the component unmounts
  return () => html.classList.remove('dark');
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
          className="fixed top-6 right-16 z-50 p-2 rounded-full shadow transition-all duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <FaSun className="text-white text-xl" />
          ) : (
            <FaMoon className="text-gray-800 text-xl" />
          )}
        </button>
      {/* <Head>
        <title> Relevant Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the relevant resources for SRVSO 2024-25"
        />
      </Head> */}

      <div className="mb-12">
        <h1 className="mb-4 text-center text-2xl sm:text-xl" style={{ color: isDark ? "#fff" : "#000" }}>Registration</h1>
        <p className="text-lg text-center sm:text-base" style={{ color: isDark ? "#e5e7eb" : "#18181b" }}>
          To learn more about this year's Olympiad, please view our online Info Night and our associated Slideshow!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center px-4 sm:px-2">
        <table className="w-full mb-12 border border-collapse border-gray-300 sm:w-full">
          <tbody>
            <Dropdown
              title="Information Night Video and Slideshow"
              isOpen={isDropdownOpen('coachSeminars')}
              onClick={() => handleDropdownChange('coachSeminars')}
              style={{ color: isDark ? '#fff' : '#000' }}
            >
              <h4 className="mb-2 ml-3 text-lg sm:text-base" style={{ color: isDark ? '#4ade80' : '#166534' }}>Registration Instructions</h4>
              <iframe
                src="https://docs.google.com/presentation/d/1XyMosY7MVjPdeQ8K4IRapNJDrP5eBxfCnj7urGWIvWY/edit?slide=id.p#slide=id.p"
                width="100%"
                height="500"
                className="sm:h-64"
                style={{ border: isDark ? '4px solid #4ade80' : '4px solid #166534', borderRadius: 20 }}
              ></iframe>
              <a
                href="https://docs.google.com/presentation/d/1XyMosY7MVjPdeQ8K4IRapNJDrP5eBxfCnj7urGWIvWY/edit?slide=id.p#slide=id.p"
                target="_blank"
                className="mt-2 text-sm text-center underline"
                rel="noopener noreferrer"
              >
                External link
              </a>
              <h4 className="mb-2 ml-3 text-lg sm:text-base" style={{ color: isDark ? '#4ade80' : '#166534' }}>Information Night Video</h4>
              <iframe
                width="100%"
                height="500"
                className="sm:h-64"
                src="https://www.youtube.com/embed/XCdJMmzR1Ro"
                title="2025-2026 SRVSO Information Night"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ border: isDark ? '4px solid #4ade80' : '4px solid #166534', borderRadius: 20 }}
              ></iframe>
            </Dropdown>
            <Dropdown
              title="Registration Document"
              isOpen={isDropdownOpen('generalResources')}
              onClick={() => handleDropdownChange('generalResources')}
              style={{ color: isDark ? '#fff' : '#000' }}
            >
              <h4 className="mb-2 ml-3 text-lg sm:text-base" style={{ color: isDark ? '#4ade80' : '#166534' }}>Registration Instructions</h4>
              <iframe
                src="https://docs.google.com/document/d/1F7inmjct7ZEGp1d7R47nkTJnd2zFG8vfXcEr0_21BIA/edit?usp=sharing"
                width="100%"
                height="1000"
                className="sm:h-64"
                style={{ border: isDark ? '4px solid #4ade80' : '4px solid #166534', borderRadius: 20 }}
              ></iframe>
              <a
                href="https://docs.google.com/document/d/1F7inmjct7ZEGp1d7R47nkTJnd2zFG8vfXcEr0_21BIA/edit?usp=sharing"
                target="_blank"
                className="mt-2 text-sm text-center underline"
                rel="noopener noreferrer"
              >
                External link
              </a>
            </Dropdown>
            <Dropdown
              title="Registration Form"
              isOpen={isDropdownOpen('build')}
              onClick={() => handleDropdownChange('build')}
              style={{ color: isDark ? '#fff' : '#000' }}
            >
              <h4 className="mb-2 ml-3 text-lg sm:text-base" style={{ color: isDark ? '#4ade80' : '#166534' }}>Registration Form</h4>
              <iframe
                src="https://forms.gle/XQhXydTuvdxwYk6h6"
                width="100%"
                height="1000"
                className="sm:h-64"
                style={{ border: isDark ? '4px solid #4ade80' : '4px solid #166534', borderRadius: 20 }}
              ></iframe>
              <a
                href="https://forms.gle/XQhXydTuvdxwYk6h6/"
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
    </div>
  );
}
