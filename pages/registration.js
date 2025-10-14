import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaExternalLinkAlt } from 'react-icons/fa';

export default function Registration() {
  const [isDark, setIsDark] = useState(false);

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
    } else {
      html.classList.remove('dark');
    }
    document.body.style.backgroundColor = isDark ? "#000" : "#f9fafb";
    document.body.style.color = isDark ? "#e5e7eb" : "#18181b";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const colors = {
    background: isDark ? "#000" : "#f9fafb",
    text: isDark ? "#e5e7eb" : "#18181b",
    border: isDark ? "#4ade80" : "#166534",
  };

  return (
    <div style={{ background: colors.background, color: colors.text }}>
      <Head>
        <title>Registration — SRVSO</title>
        <meta name="description" content="Register for the San Ramon Valley Science Olympiad." />
      </Head>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed z-50 p-2 transition-all duration-300 rounded-full shadow top-6 right-8 sm:absolute sm:top-5 sm:right-20 sm:p-1"
        style={{ pointerEvents: "auto" }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <FaSun className="text-xl text-white sm:text-lg" />
        ) : (
          <FaMoon className="text-xl text-gray-800 sm:text-lg" />
        )}
      </button>

      <div className="max-w-6xl mx-auto py-10 px-4" >
        <h1 className="text-4xl font-bold mb-6" style={{ color: colors.text, alignItems: "center", justifyContent: "center", display: "flex" }}>Registration</h1>

        {/* Embeds Grid */}
        <div className="grid grid-cols-2" style={{ columnGap: 250, rowGap: 100, marginLeft: -150, marginTop: 50 }}>
          {/* Slideshow Embed */}
          <div style={{ position: "relative" }}>
            <iframe
              src="https://docs.google.com/presentation/d/1XyMosY7MVjPdeQ8K4IRapNJDrP5eBxfCnj7urGWIvWY/edit?slide=id.p#slide=id.p"
              width="500"
              height="400"
              style={{ border: `2px solid ${colors.border}`, borderRadius: "8px" }}
              allowFullScreen
            ></iframe>
            <a
              href="https://docs.google.com/presentation/d/1XyMosY7MVjPdeQ8K4IRapNJDrP5eBxfCnj7urGWIvWY/edit?slide=id.p#slide=id.p"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: "absolute", top: 10, right: -130, backgroundColor: "black", color: "white", padding: "5px", borderRadius: "50%", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          {/* YouTube Video Embed */}
          <div style={{ position: "relative" }}>
            <iframe
              src="https://www.youtube.com/watch?v=XCdJMmzR1Ro"
              width="500"
              height="400"
              style={{ border: `2px solid ${colors.border}`, borderRadius: "8px" }}
              allowFullScreen
            ></iframe>
            <a
              href="https://www.youtube.com/watch?v=XCdJMmzR1Ro"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: "absolute", top: 10, right: -130, backgroundColor: "black", color: "white", padding: "5px", borderRadius: "50%", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          {/* Document Embed */}
          <div style={{ position: "relative" }}>
            <iframe
              src="https://docs.google.com/document/d/1F7inmjct7ZEGp1d7R47nkTJnd2zFG8vfXcEr0_21BIA/edit?tab=t.0"
              width="500"
              height="400"
              style={{ border: `2px solid ${colors.border}`, borderRadius: "8px" }}
            ></iframe>
            <a
              href="https://docs.google.com/document/d/1F7inmjct7ZEGp1d7R47nkTJnd2zFG8vfXcEr0_21BIA/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: "absolute", top: 10, right: -130, backgroundColor: "black", color: "white", padding: "5px", borderRadius: "50%", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <FaExternalLinkAlt />
            </a>
          </div>

          {/* Google Form Embed */}
          <div style={{ position: "relative" }}>
            <iframe
              src="https://forms.gle/XQhXydTuvdxwYk6h6"
              width="500"
              height="400"
              style={{ border: `2px solid ${colors.border}`, borderRadius: "8px" }}
            ></iframe>
            <a
              href="https://forms.gle/XQhXydTuvdxwYk6h6"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: "absolute", top: 10, right: -130, backgroundColor: "black", color: "white", padding: "5px", borderRadius: "50%", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
